import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDTO {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsString()
  commentId?: string;

  @IsString()
  reportId?: string;
  @IsNotEmpty()
  @IsString()
  userComment: string;
  @IsNotEmpty()
  @IsString()
  type: string;
}
