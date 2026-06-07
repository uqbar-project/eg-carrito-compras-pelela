import { format } from 'date-fns'
import type { Producto } from './productos'

const showCurrency = (value: number) =>
  Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(value)

export class ProductoRow {
  producto!: Producto
  indiceActual!: number
  indice!: number

  get entrega() {
    return `Llega el ${format(this.producto.fechaEntrega(), 'dd/MM/yyyy')}`
  }

  get precio() {
    return showCurrency(this.producto.valor)
  }

  get seleccionado() {
    return this.indiceActual + 1 === this.indice
  }

  get claseSeleccion() {
    return this.seleccionado ? 'elegido' : 'normal'
  }
}
