import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  birthData: {
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: {
      description: { type: String, required: true },
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  },
  imprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Imprint',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
