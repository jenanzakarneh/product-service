import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const existingProduct = await this.prisma.product.findFirst({
      where: { name: data.name },
    });

    if (existingProduct) {
      throw new ConflictException(
        `Product with name '${data.name}' already exists`,
      );
    }

    return this.prisma.product.create({ data });
  }
  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProductDto) {
    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
