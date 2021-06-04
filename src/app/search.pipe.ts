import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cupcakes: any[], searchTerm:string): any[] {

   
    if(!cupcakes || !searchTerm){
      return cupcakes;
    }
    else{
      return cupcakes.filter(cupcakeObj=>cupcakeObj.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1 )
    }
  }

}
