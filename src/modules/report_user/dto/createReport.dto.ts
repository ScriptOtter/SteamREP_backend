import { IsArray, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  youtubeLink: string;

  @IsString()
  demoLink: string;

  @IsArray()
  @IsNotEmpty()
  reasonsReport: [string];

  @IsString()
  @IsNotEmpty()
  authorId: string;

  @IsString()
  @IsNotEmpty()
  recipientId: string;
  @IsString()
  @IsNotEmpty()
  comment: string;
}
