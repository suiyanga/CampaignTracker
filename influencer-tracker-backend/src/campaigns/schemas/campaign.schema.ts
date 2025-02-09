import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// This type will be used to reference a Campaign document in MongoDB
export type CampaignDocument = Campaign & Document;

@Schema()
export class Campaign {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  deadline: Date;
}

// Generate the Mongoose schema based on the Campaign class
export const CampaignSchema = SchemaFactory.createForClass(Campaign);
