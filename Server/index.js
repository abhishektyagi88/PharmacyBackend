const express = require("express");
const app = express();
const userRoute = require("./Routes/usersRoute");
const pharmacyRoute = require("./Routes/registerPharmaciesRoute");
const medicineRoute = require("./Routes/medicineRoute");
const cacheRoute = require("./Cache/PharmacyCache");
const path = require("path");

require("dotenv").config();
const db = require("./Config/dbConfig");

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/pharmacy", pharmacyRoute);
app.use("/api/medicine", medicineRoute);
app.use("/api/cache", cacheRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/CLIENT/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "CLIENT", "build", "index.html"));
    });
  }


app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
})

