import mongoose from 'mongoose';

const connectionBlueprintSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  connectionName: {
    type: String,
    required: true,
  },
  connectionBirthData: {
    date: { type: Date, required: true },
    time: { type: String },
    location: { description: String },
  },
  relationshipType: {
    type: String,
  },
  synthesis: {
    harmonies: [String],
    frictions: [String],
    combinedTheme: String,
  },
}, { timestamps: true });

const ConnectionBlueprint = mongoose.model('ConnectionBlueprint', connectionBlueprintSchema);
export default ConnectionBlueprint;
