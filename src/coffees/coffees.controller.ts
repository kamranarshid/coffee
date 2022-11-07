import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffessServices: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffessServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
   return this.coffessServices.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto:CreateCoffeeDto) {
    return this.coffessServices.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto:UpdateCoffeeDto) {
    return this.coffessServices.update(id,  UpdateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffessServices.remove(id);
  }
}
