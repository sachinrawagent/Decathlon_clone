const express = require("express");

const User = require("../model/user.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    return res.status(201).send(user);
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

// router.get("", async (req, res) => {
//   try {
//     const page = req.query.page || 1;
//     const size = req.query.size || 10;
//     const users = await User.find()
//       .skip((page - 1) * size)
//       .limit(size)
//       .lean()
//       .exec();

//     const totalPages = Math.ceil((await User.find().countDocuments()) / size);

//     return res.send({ users, totalPages });
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

module.exports = router;
