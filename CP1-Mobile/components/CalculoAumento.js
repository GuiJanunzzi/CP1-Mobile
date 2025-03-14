import { Text, View } from "react-native"

export default (props) =>{
    const aumento = props.VlOriginal * (props.porcentAumento/100)
    const resultado = props.VlOriginal + aumento
    return(
        <View>
            <Text>Nome: {props.nomeProd}</Text>
            <Text>Valor inicial: {props.VlOriginal}</Text>
            <Text>O valor após o aumento é: {resultado} </Text>
        </View>
    )
}