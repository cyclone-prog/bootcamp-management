import express from "express";
import indexRouter from "./routes/index.js";
import config from "./config/config.js";
import { dbConnection } from "./config/db.config.js";
const app = express();
dbConnection();
app.use("/api/v1", indexRouter);
//error handling for unmatched route
app.use((req, res, next) => {
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});
//error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    //server error=>500
    status: false,
    error: error.message,
  });
});
app.listen(config.PORT, () => {
  console.log(`server running in ${config.NODE_ENV} at port ${config.PORT}`);
});
