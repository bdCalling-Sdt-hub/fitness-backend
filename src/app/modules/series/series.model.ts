import { Schema, model } from 'mongoose';
import { ICatagory, ISeries } from './series.interface';

const seriesSchema = new Schema<ISeries>(
  {
    program: {
      type: Schema.Types.ObjectId,
      ref: 'Program',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);
export const Series = model('Series', seriesSchema);

const catagorySchema = new Schema<ICatagory>(
  {
     name: {
      type: String,
      required: true,
    }
  },
  
);
export const Catagory = model('Catagory', catagorySchema);
