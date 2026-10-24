/*1. zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View} from 'react-native';


/*2. zona de main*/ 
export default function SafeScreen() {
  return (

    <View style={styles.container}>

      <Text>Aqui va la presentacion de uriel o aroon</Text>

      
      <StatusBar style="auto" />
    </View>
  );
}

/*3. zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
