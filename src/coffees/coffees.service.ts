import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entites/coffee.entitiy';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [{
    id: 1,
    name:'ShipwreckRoast',
    brand:'Buddy Brew',
    flavors: ['chocolate','vanilla'],
  },];
// create, read, update delete

    findAll(){
        return this.coffees;
    }

    findOne(id: number){
        const coffee =  this.coffees.find(item => item.id === +id);
        if(!coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create( createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any){
        const exsistingCoffee = this.coffees;
        if(exsistingCoffee){

        }
    }

    remove(id: string){
        const coffeeIndex =  this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1)
        }
    }

}
