import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.intefaces';
import { Observable, timeout } from 'rxjs';
import { ProductoItem } from '../interfaces/producto-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'https://angular-html-39a0c-default-rtdb.europe-west1.firebasedatabase.app/';
  productos: any[]= [];
  cargando = true;
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) =>{

      this.http.get<Observable<Producto[]>>(this.url + 'productos_idx.json')
            .subscribe( ( resp:  any )  => {
            this.productos = resp;

            setTimeout(() => {
              this.cargando = false;
            }, 2000)
       })
    })
  };

  productoById(id: string): Observable<ProductoItem>{
    return this.http.get<ProductoItem>(this.url + `productos/${id}.json`);
  }

  buscarProducto( termino: string){
    if ( this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then( ()=>{
        //ejecutar despúes de tener los productos
        this.filtrarProductos( termino );
      });

    } else{
      //aplicar el filtro
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos(termino: string){
    this.productosFiltrado = []; // limpiar al volver a llamar
    termino = termino.toLowerCase();

    this.productos.forEach( prod =>{
      const tituloLower = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 ||tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }

}
