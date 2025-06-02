import { IsArray, IsNotEmpty } from 'class-validator';

export class sendVerdictDto {
  @IsArray()
  @IsNotEmpty()
  verdict: [string];
}
