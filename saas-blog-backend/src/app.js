import express from "express";

const app = express();

app.get("/api/demo", (req, res) => {
    res
        .status(200)
        .json({ message: "Hello Dummy Api!" })
});

export { app };