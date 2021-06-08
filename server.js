import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()
// const path = require('path');

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json
({ error: "not found"}))

//Server Stattic assets in production

// if(process.env.)

export default app