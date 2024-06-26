const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const ShopSchema = new mongoose.Schema(
  {
    shopName: String,
    ownerName: String,
    encryPassword: String,
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);

ShopSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encryPassword = this.securePassword(password);
  })
  .get(function () {
    this._password;
  });

ShopSchema.methods = {
  securePassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  authenticate: function (password) {
    return this.securePassword(password) === this.encryPassword;
  },
};
module.exports = mongoose.model("shop", ShopSchema);
