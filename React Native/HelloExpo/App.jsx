import { StatusBar } from 'expo-status-bar'; 
import { Platform, StyleSheet, Text, View } from 'react-native'; 
import Header from './components/header/header'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; 

export default function App() { 
  return ( 
    <> 
    {/* Prove o suporte pra trabalhar com a area segura visivel do dsipositivo movel */}
      <SafeAreaProvider>  {/*container para o conteudo na area segura */}
        <SafeAreaView style={styles.safeArea}> 
          <View style={styles.container}> 
            <Header /> 
            <Text style={styles.texto1}>Giulia Marzano Martiniano</Text> 
            <Text style={styles.texto2}>Abra Kadabra Alakazam</Text> 
            <StatusBar style="auto" /> 
          </View> 
        </SafeAreaView> 
      </SafeAreaProvider> 
    </> 
  ); 
} 

const styles = StyleSheet.create({ 
  safeArea:{ 
    flex: 1, 
    backgroundColor: '#ffffff',
    // paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0, 
  }, 
  container : { 
    width: "100%", 
    height: "100%", 
    borderColor:"red", 
    borderWidth: 3, 
    borderStyle: "dotted", 
    backgroundColor: '#ffffff' 
  }, 
  texto1: { 
    color: "red" 
  }, 
  texto2: { 
    color: "blue" 
  } 
}) 

// const styles = StyleSheet.create({ 
// container: { 
// // display: "flex", 
// // flexDirection: "column", 
// flex: 1, // mesmo que 100vh 
// backgroundColor: '#24679b', 
// borderWidth: 3, // borderStyle: 'solid', 
// borderColor: 'red' 
// }, 
// });
