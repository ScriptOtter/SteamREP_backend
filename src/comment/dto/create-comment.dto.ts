import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString({ message: 'Content must be string!' })
  @IsNotEmpty({ message: 'Content is empty!' })
  content: string;

  @IsString({ message: 'Author must be string!' })
  @IsNotEmpty({ message: 'Author is empty!' })
  author_id: string;

  @IsString({ message: 'Recipient must be string!' })
  @IsNotEmpty({ message: 'Recipient is empty!' })
  recipient_id: string;
}
