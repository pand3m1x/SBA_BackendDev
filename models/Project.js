import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  name: { 
    type: String,
    required: true 
  },
  description: { 
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  
});

export default mongoose.model('Project', projectSchema);