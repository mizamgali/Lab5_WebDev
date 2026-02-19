const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const clientRoutes = require("./routes/clientRoutes");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Layout middleware
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", clientRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`NorthStar portal running on http://localhost:${PORT}`);
});
