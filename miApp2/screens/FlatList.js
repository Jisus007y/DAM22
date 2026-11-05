/* 1. Zona de importaciones */
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

/* Datos para FlatList */
const datosFlat = [
  { id: '1', nombre: 'Juan' },
  { id: '2', nombre: 'María' },
  { id: '3', nombre: 'Pedro' },
  { id: '4', nombre: 'Emilio'}
];

/* Datos para SectionList */
const datosSection = [
  {
    titulo: 'Frutas',
    data: ['Manzana', 'Plátano'],
  },
  {
    titulo: 'Verduras',
    data: ['Zanahoria', 'Lechuga'],
  },
];

/* 2. Zona main */
export default function ListasScreen() {
    return (
      /* Contenedor principal que agrupa y organiza los elementos visuales */
      <View style={styles.container}>
        
        {/* Componente de texto para el título de la FlatList */}
        <Text style={styles.titulo}>Ejemplo FlatList</Text>
        
        {/* Componente FlatList para renderizar una lista plana de forma eficiente */}
        <FlatList
          data={datosFlat}                                    
          keyExtractor={(item) => item.id}                  
          renderItem={({ item }) => (                       
            <Text style={styles.item}>{item.nombre}</Text>  
          )}
        />
  
        {/* Componente de texto para el título de la SectionList */}
        <Text style={styles.titulo}>Ejemplo SectionList</Text>
        
        {/* Componente SectionList para renderizar listas agrupadas por secciones */}
        <SectionList
          sections={datosSection}                            
          keyExtractor={(item, index) => item + index}       
          renderItem={({ item }) => (                       
            <Text style={styles.item}>{item}</Text>         
          )}
          renderSectionHeader={({ section }) => (        
            <Text style={styles.encabezado}>{section.titulo}</Text> 
          )}
        />
  
      </View>
    );
  }

/* 3. Zona Estilos y posicionamiento */
const styles = StyleSheet.create({
  // 1. Contenedor principal de la pantalla
  container: {
    flex: 1,               
    paddingTop: 50,       
    paddingHorizontal: 20, 
    backgroundColor: '#C4F3FF',
  },

  // 2. Estilo para el título principal
  titulo: {
    fontSize: 20,       
    fontWeight: 'bold',  
    marginTop: 20,        
    marginBottom: 10,    
    textAlign: 'center',  
  },

  // 3. Estilo para encabezados de sección o subtítulos
  encabezado: {
    fontSize: 16,          
    fontWeight: 'bold',   
    backgroundColor: '#525252',
    padding: 5, 
    color: 'white'     
  },

  // 4. Estilo para los ítems o filas de una lista
  item: {
    fontSize: 14,          
    padding: 10,           
    borderBottomWidth: 1,  
    borderBottomColor: '#121212', 
  },
});
