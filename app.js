var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require ("method-override");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
var productRouter = require("./routes/product");
var carritoRouter = require("./routes/carrito");
var menuRouter = require("./routes/menu");

var homeRouter = require("./routes/home");
var registerRouter = require("./routes/register");
var bartenderRouter = require("./routes/bartender");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/", homeRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/product-detail", productRouter);
app.use("/register", registerRouter);
app.use("/bartender", bartenderRouter);
app.use("/carrito", carritoRouter);
app.use("/menu", menuRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
