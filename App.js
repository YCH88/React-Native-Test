import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  getMoviesFromApiAsync();
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
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

function getMoviesFromApiAsync() {
  return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json().then((a)=>console.log(a)))
  .catch((error) => {
  console.error(error);
  });
  }