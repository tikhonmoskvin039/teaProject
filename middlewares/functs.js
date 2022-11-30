// exports.isAuth = (req, res, next) => {
//   if (req.session?.user) next();
//   else res.redirect("/auth/signin");
// };


exports.isAdmin = (req, res, next) => {
  if (req.session?.user?.isAdmin === true) next();
  else res.redirect("/private");
};

exports.isValid = (req, res, next) => {
  const { name, password, email } = req.body;
  if (name && password && email) next();
  else {
    res.status(401);
    // next('Validation Error');
  }
};

