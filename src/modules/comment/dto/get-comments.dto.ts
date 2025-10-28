import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class GetCommenttDto {
  @IsString({ message: 'Content must be string!' })
  @IsNotEmpty({ message: 'Content is empty!' })
  content: string;

  @IsString({ message: 'Author must be string!' })
  @IsNotEmpty({ message: 'Author is empty!' })
  author_id: string;

  @IsString({ message: 'Recipient must be string!' })
  @IsNotEmpty({ message: 'Recipient is empty!' })
  recipient_id: string;

  images?: Array<Partial<ImagesDto>>;
  deletedImages: string[];
  @IsString({ message: 'Recipient must be string!' })
  @IsNotEmpty({ message: 'Recipient is empty!' })
  createdAt: string;

  @IsString({ message: 'Recipient must be string!' })
  @IsNotEmpty({ message: 'Recipient is empty!' })
  updatedAt: string;
}

export class ImagesDto {
  @IsString({ message: 'Author must be string!' })
  @IsNotEmpty({ message: 'Author is empty!' })
  id: string;

  @IsArray()
  @IsNotEmpty({ message: 'Recipient is empty!' })
  url: string;

  @IsString({ message: 'Author must be string!' })
  @IsNotEmpty({ message: 'Author is empty!' })
  commentId: string;
}
