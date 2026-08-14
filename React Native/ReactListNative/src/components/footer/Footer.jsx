import { Text, View } from "react-native"
import { FooterStyle } from "./FooterStyle"


export const Footer = () => {
    return(
        <View style={FooterStyle.FooterBox}>
            <Text style={FooterStyle.FooterText}>2026, React List - Todos os direitos reservados</Text>
        </View>
    )
}