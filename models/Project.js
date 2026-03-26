import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  name: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  
});

export default mongoose.model('Project', projectSchema);