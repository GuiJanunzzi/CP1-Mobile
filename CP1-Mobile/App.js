import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';

import CalculoAumento from './components/CalculoAumento';

export default function App() {
  const [nomeProd, setNomeProd] = useState("")
  const [valorOriginal, setValorOriginal] = useState("")
  const [porcentagemAumento, setPorcentagemAumento] = useState("")
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/aumento.jpg')}
        style={styles.imagem}
      />
      
      <Text>Calculo de Aumento</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o nome do produto'
        value={nomeProd}
        onChangeText={(value)=>setNomeProd(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite o valor original'
        value={valorOriginal}
        onChangeText={(value)=>setValorOriginal(value)}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a porcentagem de aumento'
        value={porcentagemAumento}
        onChangeText={(value)=>setPorcentagemAumento(value)}
        keyboardType='numeric'
      />

      <Button title='enviar' onPress={()=> <CalculoAumento VlOriginal={parseFloat(valorOriginal)} porcentAumento={parseFloat(porcentagemAumento)}/>}/>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:3
  },
  imagem:{
    resizeMode:'center',
    width:200
  },
  input:{
    backgroundColor:'white',
    width:300,
    borderRadius:5,
    paddingLeft:10,
    borderWidth:2,
    borderColor:'#a069cc',
  }
});
