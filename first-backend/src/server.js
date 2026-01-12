import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

// * -> allows requests from all origins
app.use(cors({
    // origin: "*" // watch out
    origin: process.env.ALLOWED_ORIGIN
}));

app.get('/api/hello', (req, res) => {
    res
        .status(200)
        .json({
            message: "Hello api!"
        })
});

app.listen(port, "0.0.0.0", () => {
    console.log(`First Backend listening on port ${port}`);
})
