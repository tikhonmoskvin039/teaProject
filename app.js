const express = require("express");
const app = express();
require("@babel/register");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const render = require("./lib/render");
const Err404 = require("./views/Error404");

//импорт вспомогательных ф-й
const dbCheck = require("./db/dbCheck");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

// импорт роутов
const indexRoutes = require("./routes/indexRoutes");
const teasRoutes = require("./routes/teasRoutes");
const privateRoutes = require("./routes/privateRoutes");

const authRouter = require("./routes/auth.route");
const privateRouter = require("./routes/private.route");

// вызов функции проверки соединения с базоый данных
dbCheck();

app.use(express.static(path.resolve("public")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: "sid", // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false, // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === "production", // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log("\n\x1b[33m", "req.session.user :", req.session?.user);
  res.locals.username = req.session?.user?.name;
  next();
});

//роутеры
app.use("/", indexRoutes);
app.use("/teas", teasRoutes);
app.use("/private", privateRoutes);

app.use("/auth", authRouter);
app.use("/private", privateRouter);

app.get("*", (req, res) => {
  render(Err404, {}, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log("Ошибка запуска сервера.", err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
