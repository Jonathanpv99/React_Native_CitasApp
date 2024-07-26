
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Button 
        title='Nueva Cita'
        onPress={ () => {
          console.log("Presionaste en el boton");
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#6D28D9',
  },
});

export default App;
