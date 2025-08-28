import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class sendVerdictDto {
  @IsString()
  @IsNotEmpty()
  comment: string;
  @IsArray()
  @IsNotEmpty()
  verdict: [string];
}
