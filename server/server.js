const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

// SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.send("User already exists");

  const user = new User({ email, password });
  await user.save();

  res.send("Signup successful");
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (user) return res.send("Login successful");

  res.send("Invalid credentials");
});

app.listen(5000, () => console.log("Server running on 5000"));