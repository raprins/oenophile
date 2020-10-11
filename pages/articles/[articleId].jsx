import React from 'react'
import ReactMarkdown from 'react-markdown'
import PageLayout from '../../components/PageLayout'

export default function Article({ article }) {
    return (
        <PageLayout>
            <header>
                <h1>{article.header.title}</h1>
            </header>
            <ReactMarkdown source={article.content} />
        </PageLayout>
    )
}

export async function getStaticProps(context) {
    const service = await import('../../library/articles.service')
    const { articleId } = context.params
    const articleFull = service.readArticleById(articleId)
    return {
        props: {
            article: articleFull
        }
    }
}

export async function getStaticPaths() {

    const service = await import('../../library/articles.service')
    const articleHeaders = service.findArticleHeader()

    const paths = articleHeaders.map(header => (
        {
            params: {
                articleId: header.id
            }
        }
    ))

    return {
        paths,
        fallback: false // See the "fallback" section below
    };
}
