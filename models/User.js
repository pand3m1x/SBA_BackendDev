import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  username: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model('User', userSchema);