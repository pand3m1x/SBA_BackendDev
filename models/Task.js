import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({

  title: String,
  description: String,
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    }
});

export default mongoose.model('task', taskSchema);