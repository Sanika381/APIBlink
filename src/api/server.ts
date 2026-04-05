import express from 'express'
import cors from 'cors'


export function expressServer(port: number = 3131) {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
}