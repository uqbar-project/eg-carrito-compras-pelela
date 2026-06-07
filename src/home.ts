import { productos } from './productos'

export class Home {
  indice = 1
  otroIndice = 5

  // temporalmente necesitamos una propiedad
  desde = 1
  //

  get cantidadProductos() {
    return this.productos.length
  }

  get productos() {
    return productos
  }
}
