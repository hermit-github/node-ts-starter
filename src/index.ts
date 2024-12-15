import express from "express";
import morgan from "morgan";

const PORT = Number(process.env.PORT || 8080);

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/",(req,res) => {
    res.json({message:"Welcome to Node Starter!"})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})