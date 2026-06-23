import { productos } from './productos'

export class Home {
  indice = 1
  otroIndice = 2

  get cantidadProductos() {
    return this.productos.length
  }

  get productos() {
    return productos
  }
}
