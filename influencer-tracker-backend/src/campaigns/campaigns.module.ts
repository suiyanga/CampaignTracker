import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './schemas/campaign.schema';
import { CampaignsService } from './campaigns.service';
import { CampaignsController, RootController } from './campaigns.controller'; // Import RootController

@Module({
  imports: [
    // Register the Campaign schema with Mongoose
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
  ],
  controllers: [CampaignsController, RootController], // Add RootController here
  providers: [CampaignsService],
})
export class CampaignsModule {}
