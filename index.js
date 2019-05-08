require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routes/users");
const pollingRouter = require("./routes/pollings");
const cors = require("cors");
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/users", userRouter);
app.use("/pollings", pollingRouter);

app.listen(PORT, () => {
  console.log(`running port ${PORT}`);
});
