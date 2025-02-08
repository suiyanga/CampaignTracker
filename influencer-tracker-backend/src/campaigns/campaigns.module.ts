// src/campaigns/campaigns.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Import the Campaign schema and its type
import { Campaign, CampaignSchema } from './schemas/campaign.schema';

// If you have already implemented the service and controller, import them here.
// Otherwise, you can create them later.
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';

@Module({
  imports: [
    // Register the Campaign schema with Mongoose
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
  ],
  controllers: [CampaignsController],
  providers: [CampaignsService],
})
export class CampaignsModule {}
