import { View, Text } from 'react-native';
import { FooterStyle } from './FooterStyle'; 

export const Footer = () => {
  return (
    <View style={FooterStyle.footerbox}>
      <Text style={FooterStyle.footertext}>
        2026, React List - Todos os direitos reservados
      </Text>
    </View>
  );
};
