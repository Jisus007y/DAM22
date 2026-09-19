export let productos = [
    { id: 1, nombre: "Café", precio: 30 },
    { id: 2, nombre: "Dona", precio: 20 }
  ];
  
  export const agregarProducto = (nombre, precio) => {
    productos.push({ id: productos.length + 1, nombre, precio });
  };
  
  export const editarProducto = (id, nuevoNombre, nuevoPrecio) => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        productos[i].nombre = nuevoNombre;
        productos[i].precio = nuevoPrecio;
      }
    }
  };
  
  export const eliminarProducto = (id) => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        productos.splice(i, 1);
      }
    }
  };
  
  export const listarProductos = () => {
    console.log("\n--- PRODUCTOS ---");
    for (let i = 0; i < productos.length; i++) {
      console.log(`ID: ${productos[i].id} | ${productos[i].nombre} - $${productos[i].precio}`);
    }
  };