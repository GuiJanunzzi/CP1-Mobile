import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';

import CalculoAumento from './components/CalculoAumento';

export default function App() {
  const [nomeProd, setNomeProd] = useState("")
  const [valorOriginal, setValorOriginal] = useState("")
  const [porcentagemAumento, setPorcentagemAumento] = useState("")
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (!nomeProd) {
      alert("Preencha o campo nome!");
      return;
    };
    if (!valorOriginal) {
      alert("Preencha o campo Valor Original!");
      return;
    };
    if (!porcentagemAumento) {
      alert("Preencha o campo percentual de aumento!");
      return;
    }
    
    setResultado(CalculoAumento(nomeProd, valorOriginal, porcentagemAumento));
  };

  return (
    <View style={styles.container}>
      <Text>Calculo de Aumento</Text>

      <Image
        source={require('./assets/calculadora.png')}
        style={styles.imagem}
      />
      
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

      <Button title='calcular' onPress={calcular}/>

      {resultado && (
        <CalculoAumento 
        style={{backgroundColor:'white'}}
        nomeProd={nomeProd}
        VlOriginal={parseFloat(valorOriginal)} 
        porcentAumento={parseFloat(porcentagemAumento)}
        />
      )}      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:5
  },
  imagem:{
    resizeMode:'center',
    width:200,
    height:250
  },
  input:{
    backgroundColor:'white',
    width:300,
    borderRadius:5,
    paddingLeft:10,
    borderWidth:2,
    borderColor:'black',
    fontWeight:800
  },
  resultado:{
    
  }
});
