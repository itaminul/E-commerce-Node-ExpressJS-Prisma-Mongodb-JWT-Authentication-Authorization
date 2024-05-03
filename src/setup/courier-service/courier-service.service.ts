import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma-connection/primsa.service';

@Injectable()
export class CourierServiceService {
  constructor( private readonly prismaService: PrismaService) {}
  
}
