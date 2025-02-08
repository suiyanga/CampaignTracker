import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.module'; // Import your campaigns module

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the module available globally without needing to import it in every module
    }),
    // 2. Use MongooseModule.forRootAsync to load the URI from environment variables.
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule here to use ConfigService
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Gets the connection string from .env file
      }),
      inject: [ConfigService],
    }),
    CampaignsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
