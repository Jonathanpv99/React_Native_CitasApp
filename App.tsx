import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InfoPaciente from './src/components/InfoPaciente';

function App(): React.JSX.Element {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditar, setPacienteEditar] = useState({})
  const [pacienteVer, setPacienteVer] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false);


  const handleViewModalCita = () => {
    setModalVisible(!modalVisible);
  };

  const handleEditarPaciente = (id) => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    if(pacienteEditar[0]){
      setPacienteEditar(pacienteEditar[0]);
      handleViewModalCita();
    }
  }

  const handleEliminarPaciente = (id) => {
    console.log('eliminando', id);
    Alert.alert(
      'Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar', style:'cancel'},
        {text: 'Si, Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(
            p => p.id !== id
          );

          setPacientes(pacientesActualizados);
        }}
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Text style={styles.tituloBold}>Veterinaria "El DogTor"</Text>

      <Pressable
        onPress={handleViewModalCita}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.textoNuevaCita}>Nueva cita</Text>
      </Pressable>
      {pacientes.length === 0 ? 
        (<Text style={styles.noRegistros}>No se encontraron Pacientes</Text>) :
        (<FlatList
        style={styles.lista}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                data={item}
                editarPaciente={handleEditarPaciente}
                eliminarPaciente={handleEliminarPaciente}
                setPaciente={setPacienteVer}
                pacienteView={setModalPaciente}
              />
            )
          }}
        />)
      }
      {modalVisible && (
        <Formulario
        isVisible={modalVisible}
        changeVisible={handleViewModalCita}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={pacienteEditar}
        RecetearPaciente={setPacienteEditar}
      />
      )}

      <Modal
        visible={modalPaciente}
      >
        
        <InfoPaciente
          data={pacienteVer}
          pacienteView={setModalPaciente}
          setPaciente={setPacienteVer}
        />
      </Modal>
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
  noRegistros: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    fontSize: 15,
  },
  lista: {
    marginTop: 50,
    marginHorizontal: 30,
  }
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
