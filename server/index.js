import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["POST", "GET"]

}));

app.use(express.json());

app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));