import Link from 'next/link'
import React, { useState } from 'react'
import PageLayout from '../components/PageLayout'

export default function articles({ articles = [] }) {

    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState(articles)
    const handleSearchArticles = e => {
        e.preventDefault()

        fetch(`/api/articles?search=${searchTerm}`)
            .then(result => result.json())
            .then(result => setData(result))
    }


    const handleChangeSearch = e => setSearchTerm(e.target.value)
    return (
        <PageLayout className="articles-list">
            <div className="container">
                <form className="search" onSubmit={handleSearchArticles}>
                    <input placeholder="Rechercher des articles"
                        value={searchTerm}
                        onChange={handleChangeSearch}
                    />
                </form>
                <ul className="cards">
                    {data.map(article => <ArticleItem key={article.id} article={article} />)}
                </ul>
            </div>
        </PageLayout>
    )
}

function ArticleItem({ article }) {
    const { title, id, image, description } = article
    return (
        <li className="article-item card">
            <div className="article-figure" style={{
                backgroundImage: `url(${image})`
            }}>

            </div>
            <div className="card-body">
                <h3 className="color-primary">{title}</h3>
                <p>{description}</p>
            </div>
            <Link href={`/articles/${id}`}><a>See Story</a></Link>
        </li>
    )
}


export async function getStaticProps(context) {
    const service = await import('../library/articles.service')
    const articles = service.findArticleHeader()

    return {
        props: {
            articles
        }
    }
}

