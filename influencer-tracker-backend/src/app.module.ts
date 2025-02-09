import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
  // Use MongooseModule.forRootAsync to load the URI from environment variables.
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), 
      }),
      inject: [ConfigService],
    }),
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
