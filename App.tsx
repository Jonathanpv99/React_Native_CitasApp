import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import Formulario from './src/components/Formulario';

function App(): React.JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);

  const handleViewModalCita = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>

      <Pressable
        onPress={handleViewModalCita}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.textoNuevaCita}>Nuevo Evento</Text>
      </Pressable>
      <Formulario
        isVisible={modalVisible}
        changeVisible={handleViewModalCita}
      />
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
    marginTop: 30,
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#6D28D9',
    marginTop: 10,
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
