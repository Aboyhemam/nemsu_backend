const Member = require("../models/member_model");

const getMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = getMembers;