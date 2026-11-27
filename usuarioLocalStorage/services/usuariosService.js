import { guardarDato, obtenerDato } from '../storage/localStorage';

const CLAVE = 'usuarios';

export const validarUsuario = (nombre, edad) => {
  if (!nombre || nombre.trim() === '') {
    return 'El nombre es obligatorio';
  }
  const edadNum = Number(edad);
  if (!edad || isNaN(edadNum) || edadNum < 1 || edadNum > 120) {
    return 'La edad debe ser un número entre 1 y 120';
  }
  return null;
};

export const obtenerUsuarios = async () => {
  const usuarios = await obtenerDato(CLAVE);
  return usuarios || [];
};

export const agregarUsuario = async (nombre, edad) => {
  const error = validarUsuario(nombre, edad);
  if (error) return { ok: false, error };

  const usuarios = await obtenerUsuarios();
  const nuevo = { id: Date.now().toString(), nombre: nombre.trim(), edad: Number(edad) };
  await guardarDato(CLAVE, [...usuarios, nuevo]);
  return { ok: true, usuario: nuevo };
};

export const actualizarUsuario = async (id, nombre, edad) => {
  const error = validarUsuario(nombre, edad);
  if (error) return { ok: false, error };

  const usuarios = await obtenerUsuarios();
  const actualizados = usuarios.map((u) =>
    u.id === id ? { ...u, nombre: nombre.trim(), edad: Number(edad) } : u
  );
  await guardarDato(CLAVE, actualizados);
  return { ok: true };
};

export const eliminarUsuario = async (id) => {
  const usuarios = await obtenerUsuarios();
  await guardarDato(CLAVE, usuarios.filter((u) => u.id !== id));
  return { ok: true };
};