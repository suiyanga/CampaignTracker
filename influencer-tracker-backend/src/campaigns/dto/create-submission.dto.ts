// src/campaigns/dto/create-submission.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  content: string;

  // Optionally track the influencer ID if needed.
  @IsString()
  @IsOptional()
  influencerId?: string;
}
