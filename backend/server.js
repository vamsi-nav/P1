import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;


  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password" });
  }


  const token = jwt.sign(
    { userId: user.id, email: user.email },
    "supersecret",
    { expiresIn: "1h" }
  );


  res.json({ token });
});

const users = [];

app.post("/signup", async (req, res) => {
  const { email, password } = req.body; 

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  } 
  const hashedPassword = await bcrypt.hash(password, 10); 
  const newUser = { id: users.length + 1, email, password: hashedPassword };
  users.push(newUser);
  res.json({ message: "User created" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

