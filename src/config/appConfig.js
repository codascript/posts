require('dotenv').config()
const port = process.env.PORT

export default {
  url: `http://localhost:${port}`
}
