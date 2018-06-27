const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const messages = require(__dirname + "/controllers/messages_controller");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", messages.create);
app.get("/api/messages", messages.read);
app.put("/api/messages/:id", messages.update);
app.delete("/api/messages/:id", messages.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
