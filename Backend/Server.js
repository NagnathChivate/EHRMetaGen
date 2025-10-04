import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join("", "EmpDetail.json");

// Read employees
app.get("/employees", (req, res) => {
  const data = fs.readFileSync(filePath, "utf8");
  res.json(JSON.parse(data));
});

// Add new employee
app.post("/employees", (req, res) => {
  const newEmp = req.body;
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  data.push(newEmp);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ message: "Employee added successfully" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
