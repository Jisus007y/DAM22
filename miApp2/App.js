/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';


/*2. zona de main*/ 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <Image source={require('./assets/wavev.png')}></Image>
      <Text>-------------------------------------------</Text>
      

      <Saludo></Saludo>
      <Saludo/>

       <Text>-------------------------------------------</Text>

       <Saludo2></Saludo2>
      <Saludo2/>


      <StatusBar style="auto" />
    </View>
  );
}

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
