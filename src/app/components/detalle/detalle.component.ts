import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id:string;
  pelicula: PeliculaDetalle={};
  ocultar = 150;
  actores: Cast []=[];

  slideOptActores={
    slidesPerView: 3.3,
    freMode:true,
    spacebetween: -5
  };

  constructor(private moviesService:MoviesService,
    private modalController:ModalController,
    private dataLocalService:DataLocalService) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe( resp=> {
      console.log(resp);
      this.pelicula=resp;
      
    });

    this.moviesService.getPeliculaActores(this.id)
    .subscribe( resp=> {
      console.log(resp.cast);
      this.actores=resp.cast;
    });
    
  }

  regresar(){
    this.modalController.dismiss();
  }

  favorito(){
    this.dataLocalService.guardarPelicula(this.pelicula);
  }

}
