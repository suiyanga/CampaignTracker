import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './schemas/campaign.schema';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectModel(Campaign.name)
    private readonly campaignModel: Model<CampaignDocument>,
  ) {}

  /**
   * Fetch all campaigns.
   * For a real-world app, you might filter campaigns based on user criteria.
   */
  async findAll(): Promise<Campaign[]> {
    return this.campaignModel.find().exec();
  }

  /**
   * Fetch a single campaign by its ID.
   * Throws a NotFoundException if the campaign is not found.
   * @param id - The campaign ID
   */
  async findOne(id: string): Promise<Campaign> {
    const campaign = await this.campaignModel.findById(id).exec();
    if (!campaign) {
      throw new NotFoundException(`Campaign with id ${id} not found`);
    }
    return campaign;
  }

  /**
   * Handle a campaign content submission.
   * This method simulates processing the submission.
   * @param id - The campaign ID
   * @param createSubmissionDto - DTO containing the submission data
   */
  async submitContent(
    id: string,
    createSubmissionDto: CreateSubmissionDto,
  ): Promise<{ message: string }> {
    // Verify that the campaign exists.
    const campaign = await this.findOne(id);
    if (!campaign) {
      throw new NotFoundException(`Campaign with id ${id} not found`);
    }

    // Process the submission.
    console.log(`Received submission for campaign ${id}:`, createSubmissionDto);

    // Return a confirmation message.
    return { message: 'Submission received' };
  }
}
