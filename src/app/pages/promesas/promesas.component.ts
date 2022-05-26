import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  edad:number = 16
  

  ngOnInit(): void {
    /* const promesas = new Promise((resolve,reject)=>{
      if(this.edad >= 18){
        resolve("eres mayor de edad");
      }else{
        reject('eres menor de edad');
      }
    }) */
    

    /* promesas.then((mensaje)=>{
      console.log(mensaje);
    }).catch(error =>{
      console.log("algo salio mal",error)
    }) */
    
    this.getUsuarios().then((usuarios)=>{
      console.log(usuarios);
    });

  }

  getUsuarios(){

    const promesa = new Promise( (resolve)=>{
      
      fetch("https://reqres.in/api/users")
      .then(resp=> resp.json() )
      .then(body => resolve(body.data))
    })

    return promesa;
  }

}
