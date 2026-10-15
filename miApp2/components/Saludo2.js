import {Text,Image, Button,View} from 'react-native';

export const Saludo2=()=>{

  return(
    <View>
  
  <Text>Hola RN: Soy un coponente propio </Text> 
  <Image source={require('../assets/wavev.png')}></Image>
  <Button title='Presiona para saludar'></Button>
  </View>

  )
  
}