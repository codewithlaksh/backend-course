import "dotenv/config";
import { app } from "./app.js";
import { dbConnect } from "./lib/db.js";

const port = process.env.PORT || 8080;

dbConnect()
.then(() => {
    app.listen(port, "0.0.0.0", () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch(err => {
    console.log(err);
    process.exit(1);
})