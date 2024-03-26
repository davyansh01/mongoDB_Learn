import express from "express";
import connectDb from "./db/connectDB.js";
import bodyParser from "body-parser";
import { person } from "./models/Person.js";
import { menu } from "./models/MenuItem.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://Ares0001:Ares0001@cluster0.z0odsfz.mongodb.net/";

connectDb(DATABASE_URL);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to hotel");
});
app.post("/person", async (req, res) => {
  try {
    const user = req.body;
    const newUser = new person(user);
    const response = await newUser.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "Internal server error" });
  }
});

// GET method to get the person

app.get("/person", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data Fetched");
    res.send(data).status(200);
  } catch (error) {
    res.send(error).status(500);
  }
});

app.listen(port, () => console.log(`Server Listening on PORT ${port}`));
