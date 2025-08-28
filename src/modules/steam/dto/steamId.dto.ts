import { IsNotEmpty, IsString } from 'class-validator';

export class Steam64IdDto {
  @IsString()
  @IsNotEmpty()
  steam64Id: string;

  @IsString()
  @IsNotEmpty()
  steamParam: string;
}
