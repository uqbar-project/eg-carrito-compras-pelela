import { addDays, format } from 'date-fns'

const formatearPrecio = (valor: number) =>
  Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(valor)

export class Producto {
  constructor(
    public id: number,
    public descripcion: string,
    public valor: number,
    public cantidadDisponible: number,
    public diasEntrega: number,
    public imagen: string,
    public esOferta: boolean,
    public calificacion: number,
  ) {}

  fechaEntrega() {
    return addDays(new Date(), this.diasEntrega)
  }

  get precioFormateado() {
    return formatearPrecio(this.valor)
  }

  get fechaEntregaFormateada() {
    return format(this.fechaEntrega(), 'dd/MM/yyyy')
  }

  get disponible() {
    return this.cantidadDisponible > 0
  }
}
