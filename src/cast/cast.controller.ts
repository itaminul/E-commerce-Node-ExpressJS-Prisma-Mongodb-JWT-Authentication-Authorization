import { Body, Controller, Post } from "@nestjs/common";
import { Role } from "src/auth/role/role.enum";
import { Roles } from "src/auth/role/roles.decorator";
import { CreateCatDto } from "./dto/create.cate.dto";
import { CastService } from "./cast.service";

@Controller("cast")
export class CastController {
    constructor(public readonly catsService: CastService) {}
  @Post()
  @Roles(Role.Admin)
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
