import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [ProductModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
