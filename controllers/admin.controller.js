const render = require("../lib/render");

// const bcrypt = require("bcrypt");

const { Tea } = require("../db/models");

const PrivateAdmin = require("../views/AdminPrivate");

exports.privateAdminPage = async (req, res) => {
  try {
    const allTeas = await Tea.findAll({ raw: true });
    render(PrivateAdmin, { allTeas }, res);
  } catch (err) {
    console.error(err);
  }
};

exports.createTeaCard = async (req, res) => {
  const { name, picture_url, info, placeOfBirth, coordinates } = req.body;
  try {
    const allTeas = await Tea.create({
      name,
      picture_url,
      info,
      placeOfBirth,
      coordinates,
    });
    res.redirect("/private/admin");
  } catch (err) {
    console.error(err);
  }
};

exports.deleteTeaCard = async (req, res) => {
  try {
    const destroyTea = await Tea.destroy({ where: { id: req.body.id } });
    res.redirect("/private/admin");
  } catch (err) {
    console.error(err);
  }
};

exports.updateTeaCard = async (req, res) => {
  try {
    const { id, name, picture_url, info, placeOfBirth, coordinates } = req.body;
    const updateTea = await Tea.findOne({ where: { id: id } });
    updateTea.name = name;
    updateTea.picture_url = picture_url;
    updateTea.info = info;
    updateTea.placeOfBirth = placeOfBirth;
    updateTea.coordinates = coordinates;
    updateTea.save();
    res.redirect("/private/admin");
  } catch (err) {
    console.error(err);
  }
};
