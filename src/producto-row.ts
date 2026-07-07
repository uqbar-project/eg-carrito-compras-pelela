import { router } from 'pelelajs'
import type { Producto } from './domain/producto'

export class ProductoRow {
  producto!: Producto
  indiceActual!: number
  indice!: number

  get entrega() {
    return `Llega el ${this.producto.fechaEntregaFormateada}`
  }

  get precio() {
    return this.producto.precioFormateado
  }

  get seleccionado() {
    return this.indiceActual + 1 === this.indice
  }

  get claseSeleccion() {
    return this.seleccionado ? 'elegido' : 'normal'
  }

  irADetalle() {
    router.navigateTo(`/producto/${this.producto.id}`)
  }
}
