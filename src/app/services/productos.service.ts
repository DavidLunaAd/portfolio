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

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): void{
    this.http.get<Observable<Producto[]>>('https://angular-html-39a0c-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
          .subscribe( ( resp:  any )  => {
          this.productos = resp;

          setTimeout(() => {
            this.cargando = false;
          }, 2000)
    })
  };


  public cargarProducto(id: string): Observable<ProductoItem>{
    return this.http.get<ProductoItem>(`https://angular-html-39a0c-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`);
  }




}
