import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use valid email"]
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

  },
  { timestamps: true }
);

// hash password before saving
userSchema.pre("save", async function(next){

  if(!this.isModified("password")) return next()

  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password,salt)

  next()

})


// compare password
userSchema.methods.matchPassword = async function(enteredPassword){

  return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model('User',userSchema);

export default User;
