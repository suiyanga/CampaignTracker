// src/campaigns/schemas/campaign.schema.ts
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

  // You can add more properties here if needed, e.g., status, list of joined influencer IDs, etc.
}

// Generate the Mongoose schema based on the Campaign class
export const CampaignSchema = SchemaFactory.createForClass(Campaign);
