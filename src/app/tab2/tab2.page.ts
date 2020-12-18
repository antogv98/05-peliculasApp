import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  buscando=false;
  peliculas:Pelicula[]=[];
  textoBuscar = '';
  ideas: string []= ['Spiderman','Avenger','El senor de los anillos','la vida es bella'];

  constructor(private moviesService: MoviesService,
    private modalController:ModalController) {}


  async verDetalle(id: string){
    const modal = await this.modalController.create({
       component: DetalleComponent,
       componentProps:{
         id
       }
     });
     modal.present();
   }

  buscar(event){

    const valor = event.detail.value;
    this.buscando=true;
    if(valor===''){
      this.peliculas=[];
      this.buscando=false;
    }else{
        this.moviesService.buscarPeliculas(valor)
      .subscribe( resp => {
        console.log(resp);;
        this.peliculas=resp['results'];
         this.buscando=false;
      });
      
    }
  }

}
