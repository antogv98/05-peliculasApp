import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle []=[];

  constructor(private storage: Storage) { }

  guardarPelicula(pelicula: PeliculaDetalle){

    this.peliculas.push(pelicula);
    this.storage.set('peliculas',this.peliculas);
    console.log(pelicula.id);
    
  }

}
