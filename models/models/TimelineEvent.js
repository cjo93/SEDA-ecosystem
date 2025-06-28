import mongoose from 'mongoose';

const timelineEventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  eventType: {
    type: String,
    enum: ['Logbook', 'Signal', 'Dream', 'Astrological', 'Connection'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    default: Date.now,
    index: true,
  },
  metadata: {
    location: String,
    photoUrl: String,
    connectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'ConnectionBlueprint' },
  },
}, { timestamps: true });

const TimelineEvent = mongoose.model('TimelineEvent', timelineEventSchema);
export default TimelineEvent;
