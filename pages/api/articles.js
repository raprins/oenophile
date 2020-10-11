import * as service from '../../library/articles.service'

export default (req, res) => {

  const {search} = req.query
  res.json(service.findArticleHeader(search))
}
