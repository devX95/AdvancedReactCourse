const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(canidatePassword, callback) {
  bcrypt.compare(canidatePassword, this.password, function(err, isMatch) {
    if(err) return callback(err)

    callback(err, isMatch)
  })
}

const ModelClass = mongoose.model("user", userSchema);

module.exports = ModelClass;
