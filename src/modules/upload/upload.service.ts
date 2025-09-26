import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private s3: S3;
  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY'),
      secretAccessKey: this.configService.getOrThrow<string>('S3_SECRET_KEY'),
      endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
      s3ForcePathStyle: true,
    });
  }
  async uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    const uploadedFileUrls: string[] = [];
    try {
      for (const file of files) {
        const webpBuffer = await sharp(file.buffer, { animated: true })
          .webp()
          .toBuffer();

        const uniqueFileName = `${uuidv4()}.webp`;
        const params: S3.PutObjectRequest = {
          Bucket: this.configService.getOrThrow<string>(
            'S3_IMAGES_BUCKET_NAME',
          ),
          Key: uniqueFileName,
          Body: webpBuffer,
          ContentType: 'image/webp',
        };

        await this.s3.upload(params).promise();
        uploadedFileUrls.push(uniqueFileName);
      }

      return uploadedFileUrls;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async deleteImageFromS3(key) {
    console.log(key);
    const params = {
      Bucket: this.configService.getOrThrow<string>('S3_IMAGES_BUCKET_NAME'),
      Key: key,
    };

    try {
      await this.s3.deleteObject(params).promise();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
}
