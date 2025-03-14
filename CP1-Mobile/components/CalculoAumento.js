import { Text, View } from "react-native"

export default (props) =>{
    const aumento = props.VlOriginal * (props.porcentAumento/100)
    const resultado = props.VlOriginal + aumento
    return(
        <View>
            <Text>Teste</Text>
            <Text>O valor após o aumento é: {resultado} </Text>
        </View>
    )
}