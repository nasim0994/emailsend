const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
