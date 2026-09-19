// Datos
let inventario = [];
let pedidos = [];

// Producto
function Producto(nombre, precio, categoria) {
  return { nombre, precio, categoria };
}

// Pedido
function Pedido(cliente, productos) {
  let total = 0;
  productos.forEach(p => total += p.precio);
  return { cliente, productos, total };
}

// Agregar producto
function agregarProducto(nombre, precio, categoria) {
  inventario.push( Producto(nombre, precio, categoria) );
  console.log("Agregado:", nombre);
}

// Mostrar productos
function mostrarProductos() {
  console.log("Productos");
  inventario.forEach((p, i) => {
    console.log(`${i+1}. ${p.nombre} — $${p.precio} | ${p.categoria}`);
  });
}

// Editar producto
function editarProducto(posicion, nuevoNombre, nuevoPrecio, nuevaCategoria) {
  if (inventario[posicion-1]) {
    inventario[posicion-1] = Producto(nuevoNombre, nuevoPrecio, nuevaCategoria);
    console.log("Producto editado");
  } else {
    console.log("No existe esa posición");
  }
}

// Eliminar producto
function eliminarProducto(posicion) {
  if (inventario[posicion-1]) {
    inventario.splice(posicion-1, 1);
    console.log(" Producto eliminado");
  } else {
    console.log(" No existe esa posición");
  }
}

// Guardar pedido
function guardarPedido(nombreCliente, posicionesProductos) {
  let misProductos = [];
  posicionesProductos.forEach(i => {
    if (inventario[i-1]) misProductos.push(inventario[i-1]);
  });
  pedidos.push( Pedido(nombreCliente, misProductos) );
  console.log("Pedido guardado para", nombreCliente);
}

// Mostrar pedidos de un cliente
function mostrarPedidos(nombreCliente) {
  console.log(`\n--- Pedidos de ${nombreCliente} ---`);
  pedidos.forEach(p => {
    if (p.cliente === nombreCliente) {
      console.log("Cliente:", p.cliente);
      p.productos.forEach(prod => console.log("-", prod.nombre, "$"+prod.precio));
      console.log("TOTAL: $" + p.total + "\n");
    }
  });
}

agregarProducto("Hamburguesa", 85, "Comida");
agregarProducto("Refresco", 25, "Bebida");
agregarProducto("Pizza", 120, "Comida");

mostrarProductos();

editarProducto(2, "Refresco Grande", 30, "Bebida");

eliminarProducto(3);

guardarPedido("Juan", [1, 2]);
guardarPedido("María", [1]);

mostrarPedidos("Juan");
mostrarPedidos("María");