import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  termino: string= '';

  constructor( private route: ActivatedRoute, public productoService: ProductosService){}

  ngOnInit(): void {
this.route.params
        .subscribe( params =>{
          this.termino = params['termino'];
          this.productoService.buscarProducto(params['termino']);
        });

      }


}
