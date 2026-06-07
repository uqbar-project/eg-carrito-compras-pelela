import { addDays } from 'date-fns'

export class Producto {
  constructor(
    public descripcion: string,
    public valor: number,
    public cantidadDisponible: number,
    public diasEntrega: number,
    public imagen: string,
  ) {}

  fechaEntrega() {
    return addDays(new Date(), this.diasEntrega)
  }
}

export const productos = [
  new Producto('Proyector Benq Ms560 Svga 4000l', 155990, 4, 1, 'benq.png'),
  new Producto(
    'Oferta 2 Sommier 1 Plaza Y Media Sanzio 90x190 Sueño Dorado',
    100524,
    142,
    3,
    'sommier.png',
  ),
  new Producto(
    'Mountain bike Fierce FM18F29AM210 2019 18 frenos de disco mecánico color negro/celeste',
    63599,
    152,
    2,
    'bicicleta.png',
  ),
  new Producto(
    'Hidrolavadora eléctrica Logus 130 Bar con 130bar de presión máxima 220V',
    68888,
    34,
    3,
    'hidro.png',
  ),
]
