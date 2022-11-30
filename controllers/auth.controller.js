const render = require("../lib/render");

// const bcrypt = require("bcrypt");

const { User } = require("../db/models");

const SignInForm = require("../views/SignInForm");

exports.checkAdminAndCreateSession = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const admin = await User.findOne({ where: { isAdmin: true } });
    const users = await User.findAll({ where: { isAdmin: false } });

    const usersNames = users.map((el) => el.name);
    const usersEmails = users.map((el) => el.email);

    if (admin.email === email && admin.password === password) {
      req.session.user = { id: admin.id, name: admin.name, isAdmin: true }; // записываем в req.session.user данные (id & name) (создаем сессию)
      res.redirect("/"); // ответ + автоматическое создание и отправка cookies в заголовке клиенту
    } 
    if (usersNames.includes(name) && usersEmails.includes(email)) {
      const ourUser = await User.findOne({ where: { email: req.body.email } });
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
