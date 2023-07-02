import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

type User = {
  id: string;
  name: string;
  mail: string;
};

const users: User[] = [
  {
    id: uuidv4(),
    name: "John Doe",
    mail: "john.doe@mail.com",
  },
  {
    id: uuidv4(),
    name: "Jane Doe",
    mail: "jana.doe@mail.com",
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Create
app.post("/users", (req: Request, res: Response) => {
  console.log(req.body);
  const user: User = {
    id: uuidv4(),
    name: req.body.name,
    mail: req.body.mail,
  };
  users.push(user);
  res.status(201).json(user);
});

// Read
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update
app.put("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, mail } = req.body;
  const user = users.find((u) => u.id === id);
  if (user) {
    user.name = name;
    user.mail = mail;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete
app.delete("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
