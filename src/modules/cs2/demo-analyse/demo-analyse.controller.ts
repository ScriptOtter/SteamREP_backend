import { Controller } from '@nestjs/common';
import { DemoAnalyseService } from './demo-analyse.service';

@Controller('demo-analyse')
export class DemoAnalyseController {
  constructor(private readonly demoAnalyseService: DemoAnalyseService) {}
}
