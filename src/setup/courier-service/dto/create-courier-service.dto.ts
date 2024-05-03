import { Injectable } from "@nestjs/common";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

@Injectable()
export class CreateCourierServiceDto {
  @IsString({ message: "Courier name must be string" })
  @IsNotEmpty({ message: "Courier name field is required" })
  name: string;
  @IsString({ message: "Courier description must be string" })
  @IsOptional()
  description: string;
  @IsString({ message: "Address name must be string" })
  @IsOptional()
  address: string;
  @IsString({ message: "Phone name must be string" })
  @IsOptional()
  phone: string;
  @IsString({ message: "First mobile number must be string" })
  @IsOptional()
  mobileOne: string;
  @IsString({ message: "Second mobile number must be string" })
  @IsOptional()
  mobileTwo: string;
  @IsString({ message: "Email address must be string" })
  @IsOptional()
  email: string;
  @IsNumber({}, { message: "Courier type must be number" })
  @IsOptional()
  courierType: number;
  @IsBoolean()
  activeStatus: boolean;
}
