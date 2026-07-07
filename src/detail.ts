import { router } from 'pelelajs'
import type { Producto } from './domain/producto'
import { productoRepository } from './repositories/productoRepository'

export class Detail {
  producto!: Producto

  initialize() {
    const { id } = router.urlParameters()
    const producto = productoRepository.getById(Number(id))
    if (!producto) {
      throw new Error(`Producto con id ${id} no encontrado`)
    }
    this.producto = producto
  }

  get estrellas() {
    if (!this.producto) return ''
    const llenas = Math.round(this.producto.calificacion)
    return '★'.repeat(llenas) + '☆'.repeat(5 - llenas)
  }

  volver() {
    router.navigateTo('/')
  }
}
