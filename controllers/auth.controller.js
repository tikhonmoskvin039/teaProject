const render = require("../lib/render");

const bcrypt = require("bcrypt");

const { User } = require("../db/models");

const SignInForm = require("../views/SignInForm");
const SignUpForm = require("../views/SignUpForm");

exports.checkAdminAndCreateSession = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // const { name, password } = req.body;
    // const admin = await User.findOne({ where: { isAdmin: true } });
    const admins = await User.findAll({ where: { isAdmin: true } });
    const users = await User.findAll({ where: { isAdmin: false } });

    const usersNames = users.map((el) => el.name);
    const adminNames = admins.map((el) => el.name);
    // const usersEmails = users.map((el) => el.email);

    // if (admin.email === email && admin.password === password) {
    // if (admin.name === name && admin.password === password) {
    if (adminNames.includes(name)) {
      const ourAdmin = await User.findOne({ where: { name: req.body.name } });
      req.session.user = {
        id: ourAdmin.id,
        name: ourAdmin.name,
        isAdmin: true,
      }; // записываем в req.session.user данные (id & name) (создаем сессию)
      res.redirect("/"); // ответ + автоматическое создание и отправка cookies в заголовке клиенту
    } 

    if (usersNames.includes(name)) {
      const ourUser = await User.findOne({ where: { name: req.body.name } });
      req.session.user = { id: ourUser.id, name: ourUser.name };
      res.redirect("/"); // ответ + автоматическое создание и отправка cookies в заголовке клиенту
    }
  } catch (error) {
    console.log("\x1b[31m", "SignIn Error:", error);
    next(error);
  }
};


exports.renderSignInForm = (req, res) => render(SignInForm, {}, res);


exports.deleteSession = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.clearCookie("sid");
    res.redirect("/");
  });
};

exports.createUserAndSession = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      isAdmin: false,
    });

    req.session.user = { id: user.id, name: user.name };
    res.redirect("/");
  } catch (error) {
    console.log(error, error.message);
    //   if (error.name === 'SequelizeUniqueConstraintError') {
    //     error.message = error.errors[0].message;
    //     error.name = 'Ошибка валидации данных в Sequelize'
    //   }
    next(error);
  }
};

exports.renderSignUpForm = (req, res) => render(SignUpForm, {}, res);
