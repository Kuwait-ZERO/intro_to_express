const express = require("express");

const app = express();

app.get("/", (request, response) =>
  response.json({ message: "Hello Hussain" })
);

app.listen(8000, () => {
  console.log(
    "My name is Hussain Alqallaf and The application is running on http://localhost:8000"
  );
});
