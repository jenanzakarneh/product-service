import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        description: string | null;
        price: number;
        stock: number;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
