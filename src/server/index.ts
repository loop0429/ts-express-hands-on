import Express from 'express'
// import cors from 'cors'
// import { Health } from '../types/api'

const app = Express()
// ______________________________________________________
//
// CORS対応

// app.use(cors())
// ______________________________________________________
//
// Route

// app.get('/api/health', (req, res) => {
//   const data: Health = { message: 'pong' }
//   res.send(data)
// })
// ______________________________________________________
//
// Routing に一致しない Request

// app.use((req, res, next) => {
//   res.sendStatus(404)
//   next({ statusCode: 404 })
// })
// ______________________________________________________
//
// エラーハンドリング

// app.use(
//   (
//     err: { statusCode: number },
//     req: Express.Request,
//     res: Express.Response,
//     next: Express.NextFunction
//   ) => {
//     console.log(err.statusCode)
//   }
// )

// ______________________________________________________
//
// Express Server の起動

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   res.send('Got a Post Request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})
