import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const DIRECTORY = path.resolve(process.cwd(), 'content', 'articles')

/**
 * 
 * @param {String} query 
 * @returns {Array<any>}
 */
export const findArticleHeader = (search) => {
    //Article filename with extension
    const articleExtFilenames = fs.readdirSync(DIRECTORY)
    const articleHeaders = articleExtFilenames.map(fullFilename => {
        const content = fs.readFileSync(path.resolve(DIRECTORY, fullFilename))
        const formatted = matter(content)
        const id = fullFilename.replace('.md', '')
        const header = {
            id,
            ...formatted.data,
            date: `${formatted.data.date}`
        }

        return header
    })

    if(!search) {
        return articleHeaders
    }

    return articleHeaders.filter(header => header.title.indexOf(search) > 0)
}


export const readArticleById = (id) => {
    const content = fs.readFileSync(path.resolve(DIRECTORY, `${id}.md`))
    const formatted = matter(content)

    return {
        header : {
            id,
            ...formatted.data,
            date: `${formatted.data.date}`
        },
        content: formatted.content
    }

}
