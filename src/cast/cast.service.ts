import { Body, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create.cate.dto';

@Injectable()
export class CastService {
    async create(@Body() createCatDto: CreateCatDto){

    }
}
