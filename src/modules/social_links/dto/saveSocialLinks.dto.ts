import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class SaveSocialLinksDto {
  @IsNotEmpty()
  @IsString()
  site: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  link: string;
}
