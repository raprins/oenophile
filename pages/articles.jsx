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
        <PageLayout>

            <h1>Articles</h1>
            <div>
                <form onSubmit={handleSearchArticles}>
                    <input placeholder="Rechercher des articles" 
                        value={searchTerm}
                        onChange={handleChangeSearch}
                        />
                </form>
            </div>
            {data.map(article => <ArticleItem key={article.id} article={article} />)}
        </PageLayout>
    )
}

function ArticleItem({ article }) {
    const { title, id } = article
    return (
        <div>
            <h2>{title}</h2>
            <Link href={`/articles/${id}`}><a>See Story</a></Link>
        </div>
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

