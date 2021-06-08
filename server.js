import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()
const path = require('path');

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json
({ error: "not found"}))

//Server Stattic assets in production

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

export default app