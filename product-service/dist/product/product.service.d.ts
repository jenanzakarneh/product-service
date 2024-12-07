import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): Promise<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: UpdateProductDto): Promise<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
