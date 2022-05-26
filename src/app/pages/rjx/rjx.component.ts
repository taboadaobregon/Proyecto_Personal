import { rendererTypeName } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rjx',
  templateUrl: './rjx.component.html',
  styleUrls: ['./rjx.component.css']
})
export class RjxComponent implements OnDestroy {

  public intervalSubs:Subscription;

  constructor() { 
   

    /* this.retornarObservables().pipe(
      retry(2)
    )
    .subscribe(
      valor => console.log(valor),
      (error) => console.warn(error),
      () => console.info('obs terminador')
    ) */
      
     this.intervalSubs =  this.retornaIntervalo().subscribe(console.log);
  }
  
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.intervalSubs.unsubscribe(); 
   
  }

  //todo este codigo reducido
  retornaIntervalo(){
    return interval(100).pipe(
      /* take(4), */
      map(valor => valor +1),
      filter(valor => (valor % 2 == 0 ? true: false))
    );
  }
  

  //este codigo es casi lo mismo pero el anterior es mas limpio y facil de entender
  retornarObservables():Observable<number>
  {
    let i = -1
     return new Observable<number>(obser=>{
      const setinterval = setInterval(() => {
        i++;
        obser.next(i);

        if(i === 4){
          clearInterval(setinterval);
          obser.complete();
        }

        if(i === 2){
          obser.error('llego al valor de 2');
        }

      }, 1000);

    });
  }


  

}
