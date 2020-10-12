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
                <ul className="article-others">
                    <li className="previous">
                        <h4>Article précédent</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ducimus nobis optio corrupti cupiditate assumenda, ea placeat hic necessitatibus debitis numquam quasi facere accusantium fuga, dolorem expedita! Ullam, fuga quibusdam.</p>
                        <a className="btn">Voir</a>
                    </li>
                    <li className="next">
                        <h4>Prochain article</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ducimus nobis optio corrupti cupiditate assumenda, ea placeat hic necessitatibus debitis numquam quasi facere accusantium fuga, dolorem expedita! Ullam, fuga quibusdam.</p>
                        <a className="btn">Voir</a>
                    </li>
                </ul>
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
            article: articleFull,
            previous: {
                title: 'Previous Article',
            },
            next: {
                title: 'Next Article',
            }
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
