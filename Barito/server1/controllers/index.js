const { Op } = require("sequelize");
const { List } = require("../models");

class Controller {
  static async getLists(req, res, next) {
    try {
      console.log(req);
      let response = await List.findAll({ order: [["createdAt", "ASC"]] });
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async listdetail(req, res, next) {
    try {
      let response = await List.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async addlist(req, res, next) {
    try {
      console.log(req.body);
      let response = await List.create({
        list: req.body.list,
      });
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async listdone(req, res, next) {
    try {
      let response = await List.update(
        { isDone: true },
        { where: { id: req.params.id } }
      );
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
  static async searchKeyword(req, res, next) {
    try {
      let hasil;
      let response;
      if (req.query.status == "true") {
        hasil = true;
      } else if (req.query.status == "false") {
        hasil = false;
      } else {
        hasil = null;
      }
      if (hasil == null) {
        response = await List.findAll({
          where: {
            list: {
              [Op.like]: `%${req.query.list}%`,
            },
          },
        });
      } else {
        response = await List.findAll({
          where: {
            list: {
              [Op.like]: `%${req.query.list}%`,
            },
            isDone: {
              [Op.is]: hasil,
            },
          },
        });
      }
      if (response) {
        res.status(200).json(response);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
