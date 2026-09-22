import { productos } from './cocina.js';

export let pedidos = [];
export let totalAcumulado = 0;

export const agregarPedido = (cliente, idProducto) => {
  let prod = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === idProducto) {
      prod = productos[i];
    }
  }

  if (prod) {
    pedidos.push({ cliente, producto: prod.nombre, precio: prod.precio });
    totalAcumulado += prod.precio;
    console.log("Pedido guardado con éxito.");
  } else {
    console.log("Producto no encontrado.");
  }
};


// caja.js
import { pedidos } from './cliente.js'; 
export const calcularCaja = () => {
  const subtotal = pedidos.reduce((acumulado, { precio }) => {
    return acumulado + precio;
  }, 0);

  const IVA_PORCENTAJE = 0.16;
  const iva = subtotal * IVA_PORCENTAJE;
  const total = subtotal + iva;

  return {
    subtotal,
    iva,
    total
  };
};
