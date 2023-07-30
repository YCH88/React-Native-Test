import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg'

export default function App() {
  getAllMenu();  
  return (
    <View style={styles.container}>
      <Text>Hello Traveler!</Text>
      <StatusBar style="auto" />
      <QRCode
    value= "https://imkeskin.wixsite.com/bubble-tea"
  />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  function getAllMenu() {
    fetch(`https://reactcafetestapi.000webhostapp.com/`, {
    }).then(res => res.json()).then((res)=>console.log(res))
    .catch((error) => {console.log(error)});
  };
 