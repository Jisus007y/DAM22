import { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TextInput, Pressable, ImageBackground, FlatList, ActivityIndicator, Alert,} from 'react-native';

export default function App() {
 
  const [cargando, setCargando] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 2000);
    return () => clearTimeout(timer);
  }, []);

 
  const agregarLibro = async () => {
   
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

 
    setGuardando(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));

   
    setLibros((prev) => [
      ...prev,
      { id: Date.now().toString(), titulo, autor, genero },
    ]);

   
    setTitulo('');
    setAutor('');
    setGenero('');
    setGuardando(false);

  
    Alert.alert('Éxito', 'Libro guardado correctamente.');
  };

 
  if (cargando) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTexto}>📖</Text>
        <Text>Cargando...</Text>
      </View>
    );
  }


  return (
    <ImageBackground source={require('./assets/gat.jpg')} style={styles.fondo}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={[styles.boton, guardando && styles.botonDeshabilitado]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          <Text style={styles.botonTexto}>
            {guardando ? 'Guardando...' : 'Agregar Libro'}
          </Text>
        </Pressable>

        {guardando && (
          <View style={styles.cargandoBox}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.cargandoTexto}>Guardando libro...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1,
   backgroundColor: '#fff', 
   alignItems: 'center', 
   justifyContent: 'center'
   },
  splashTexto: { fontSize: 28, 
    fontWeight: 'bold'
   },
  fondo: {
     flex: 1 },
  contenedor: {
     flex: 1, 
     paddingTop: 60, 
     paddingHorizontal: 16 
  },
  titulo: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center', 
    marginBottom: 16 
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1565c0', 
    borderRadius: 8, 
    padding: 14, 
    alignItems: 'center' 
  },
    botonDeshabilitado: {
    backgroundColor: '#888' 
  },
  botonTexto: {
    color: '#fff', 
    fontWeight: 'bold' 
  },
  cargandoBox: { 
    alignItems: 'center', 
    marginVertical: 10 
  },
  cargandoTexto: { 
    color: '#fff', 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  total: { 
    color: '#fff', 
    fontWeight: 'bold', 
    marginVertical: 10 
  },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 8,
  },
  tarjetaTitulo: { 
    fontWeight: 'bold', 
    marginBottom: 4 
  },
});