const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('src/assets/db.json')
const middlewares = jsonServer.defaults() //[{ noCors: true }]
const port = 3000
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})
