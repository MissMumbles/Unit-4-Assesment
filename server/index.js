const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getAllItems, createItem, deleteItem, updateItem } = require('./controller');


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/items", getAllItems);
app.delete("/api/items/:id", deleteItem);
app.put("/api/items/:id",updateItem);
app.post("/api/items", createItem);


app.listen(4000, () => console.log("Server running on 4000"));