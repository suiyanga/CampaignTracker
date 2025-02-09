import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Controller()
export class RootController {
  /**
   * GET /
   * Returns a welcome message for the API root.
   */
  @Get()
  getRootRoute() {
    return { message: "Welcome to CampaignTracker API!" };
  }
}

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  /**
   * GET /campaigns
   * Retrieves all campaigns.
   */
  @Get()
  async getAllCampaigns() {
    return this.campaignsService.findAll();
  }

  /**
   * GET /campaigns/:id
   * Retrieves a single campaign by its ID.
   * @param id - The campaign ID provided in the URL.
   */
  @Get(':id')
  async getCampaign(@Param('id') id: string) {
    return this.campaignsService.findOne(id);
  }

  /**
   * POST /campaigns/:id/submission
   * Processes a submission for a specific campaign.
   * @param id - The campaign ID from the URL.
   * @param createSubmissionDto - The submission data from the request body.
   */
  @Post(':id/submission')
  async submitCampaignContent(
    @Param('id') id: string,
    @Body() createSubmissionDto: CreateSubmissionDto,
  ) {
    return this.campaignsService.submitContent(id, createSubmissionDto);
  }
}
