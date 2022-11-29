const bcrypt = require('bcrypt');
const {User} = require('../db/models');
const render = require('../lib/render');
const SignUpForm = require('../views/SignUpForm');


exports.createUserAndSession = async (req, res, next) => {
    const {name, email, password} = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({name: name, email: email, password: hashedPassword, isAdmin:false });
      
      req.session.user = {id: user.id, name: user.name};
      res.redirect('/'); 
  
    } catch (error) {
        
      console.log(error, error.message);
    //   if (error.name === 'SequelizeUniqueConstraintError') {
    //     error.message = error.errors[0].message;
    //     error.name = 'Ошибка валидации данных в Sequelize'
    //   }
      next(error);
    }
  };

  exports.renderSignUpForm = (req, res) =>
  render(SignUpForm, {}, res);