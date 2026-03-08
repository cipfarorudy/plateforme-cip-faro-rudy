import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { PlacementTestsService } from './placement-tests.service';
import { CreatePlacementTestDto, UpdatePlacementTestDto } from './placement-tests.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Tests de positionnement')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('placement-tests')
export class PlacementTestsController {
  constructor(private readonly service: PlacementTestsService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les tests de positionnement' })
  findAll(@Query('candidateId') candidateId?: string) {
    return this.service.findAll(candidateId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un test de positionnement' })
  create(@Body() dto: CreatePlacementTestDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlacementTestDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
