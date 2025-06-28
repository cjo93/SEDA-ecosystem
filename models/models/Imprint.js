import mongoose from 'mongoose';

const imprintSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  astrology: {
    sun: { sign: String, degree: Number, house: Number },
    moon: { sign: String, degree: Number, house: Number },
    ascendant: { sign: String, degree: Number },
  },
  humanDesign: {
    type: String,
    authority: String,
    definedCenters: [String],
    undefinedCenters: [String],
    channels: [String],
  },
  numerology: {
    lifePath: Number,
  },
}, { timestamps: true });

const Imprint = mongoose.model('Imprint', imprintSchema);
export default Imprint;
