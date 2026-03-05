require("dotenv").config();

const app = require("./app.js");
const connectDB = require("./config/database.js");

// Connect to MongoDB
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
