import { Producto } from '../domain/producto'

const productosRegistrados = [
  new Producto(1, 'Proyector Benq Ms560 Svga 4000l', 155990, 4, 1, '/benq.png', false, 4),
  new Producto(
    2,
    'Oferta 2 Sommier 1 Plaza Y Media Sanzio 90x190 Sueño Dorado',
    100524,
    142,
    3,
    '/sommier.png',
    true,
    3.5,
  ),
  new Producto(
    3,
    'Mountain bike Fierce FM18F29AM210 2019 18 frenos de disco mecánico color negro/celeste',
    63599,
    152,
    2,
    '/bicicleta.png',
    false,
    4.5,
  ),
  new Producto(
    4,
    'Hidrolavadora eléctrica Logus 130 Bar con 130bar de presión máxima 220V',
    68888,
    34,
    3,
    '/hidro.png',
    true,
    4.2,
  ),
]

export const productoRepository = {
  getAll: (): Producto[] => [...productosRegistrados],

  getById: (id: number): Producto | undefined =>
    productosRegistrados.find((producto) => producto.id === id),
}
