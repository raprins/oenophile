import fs from 'fs'
import path from 'path'

export default async (req, res) => {
    const filenames = fs.readdirSync(path.resolve(process.cwd(), 'pages'))
    res.json(filenames)
}