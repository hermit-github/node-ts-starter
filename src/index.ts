import express from "express";
import morgan from "morgan";
import prisma from "./database";

const PORT = Number(process.env.PORT || 8080);

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/",async (req,res) => {
    const users = await prisma.users.findAll();
    res.json({message:"Welcome to Node Starter Project!"})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})