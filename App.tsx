
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
  Pressable,
} from 'react-native';

function App(): React.JSX.Element {

  const handleNuevaCita = () => {
    console.log('Presionaste un botón');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable
        onPress={handleNuevaCita}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.textoNuevaCita}>Nuevo Evento</Text>
      </Pressable>
      
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
    marginTop: 10,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  textoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

//presionables
/*<Button 
    title='Nueva Cita'
    onPress={handleNuevaCita}
  ></Button>
<Pressable
  onPressOut={handleNuevaCita}
>
  <Text style={styles.tituloBold}>Nuevo Evento</Text>
</Pressable>
<Pressable
  onPressIn={handleNuevaCita}
>
  <Text style={styles.tituloBold}>Nuevo Evento</Text>
</Pressable>
<Pressable
  onLongPress={handleNuevaCita}
>
  <Text style={styles.tituloBold}>Nuevo Evento</Text>
</Pressable>
<Pressable
  onPress={handleNuevaCita}
>
  <Text style={styles.tituloBold}>Nuevo Evento</Text>
</Pressable>*/


export default App;
