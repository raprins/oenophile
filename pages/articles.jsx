import Link from 'next/link'
import React, { useState } from 'react'
import Card from '../components/Card'
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
                <div className="search-bar">
                    <form className="search" onSubmit={handleSearchArticles}>
                        <input placeholder="Rechercher des articles"
                            value={searchTerm}
                            onChange={handleChangeSearch}
                        />
                    </form>
                </div>
                <ul className="cards">
                    {data.map(article => <ArticleItem key={article.id} article={article} />)}
                </ul>
            </div>
        </PageLayout>
    )
}

function ArticleItem({ article }) {
    const { title, id, image, description } = article
    const links = [{
        href: `/articles/${id}`,
        text: 'Voir',
        style : 'btn primary'
    }]
    return (
        <Card imageUrl={image}
            title={title}
            body={description}
            links={links}
        >

        </Card>
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

