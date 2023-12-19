import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoItem } from '../../interfaces/producto-item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{
  producto: ProductoItem | undefined;
  productoId: string | undefined;

  constructor(private route: ActivatedRoute,
             public productoService: ProductosService){}

             ngOnInit() {
              this.route.params.subscribe((params) => {
                const id = params['id'];
                this.productoId = params['id'];// Obtener el 'id' de los parámetros de la ruta
                this.cargarProducto(id); // Llamar al método 'cargarProducto' con el 'id' obtenido
              });
            }

            cargarProducto(id: string) {
              this.productoService.cargarProducto(id).subscribe(
                (producto: ProductoItem) => {
                  this.producto = producto;
                  console.log('Codigo: ', this.producto.categoria);
                },
                (error) => {
                  console.error('Error al cargar el producto:', error);
                }
              );
            }

}
