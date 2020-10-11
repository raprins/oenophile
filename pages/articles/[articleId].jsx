import React from 'react'
import ReactMarkdown from 'react-markdown'
import PageLayout from '../../components/PageLayout'

export default function Article({ article }) {

    const { header, content } = article

    return (
        <PageLayout >
            <div className="article-detail" >
                <header className="article-header" style={{
                    backgroundImage: `url(${header.image})`
                }}>
                    <h1>{header.title}</h1>
                </header>
                <ReactMarkdown className="article-content" source={content} />
            </div>
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
