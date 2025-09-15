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
      endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'), // Если используется кастомный endpoint
      s3ForcePathStyle: true, // Убедитесь, что это установлено в true для некоторых кастомных S3
    });
  }
  async uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    const uploadedFileUrls: string[] = []; // Убедитесь, что тип указан

    for (const file of files) {
      // Конвертация изображения в WebP
      const webpBuffer = await sharp(file.buffer, { animated: true })
        .webp() // Настройте качество по вашему усмотрению
        .toBuffer();

      const uniqueFileName = `${uuidv4()}.webp`;
      const params: S3.PutObjectRequest = {
        Bucket: this.configService.getOrThrow<string>('S3_BUCKET_NAME'),
        Key: uniqueFileName,
        Body: webpBuffer,
        ContentType: 'image/webp',
      };

      // Здесь мы явно указываем тип результата
      await this.s3.upload(params).promise();
      uploadedFileUrls.push(uniqueFileName); // Здесь мы используем uploadResult.Location
    }

    return uploadedFileUrls;
  }

  async deleteImageFromS3(key) {
    const params = {
      Bucket: this.configService.getOrThrow<string>('S3_BUCKET_NAME'),
      Key: key,
    };

    try {
      const data = await this.s3.deleteObject(params).promise();
      console.log('Image deleted successfully:', data);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }
}
