import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

function Formulario({isVisible, changeVisible,pacientes, setPacientes}): React.JSX.Element {

  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  const handleNuevaCita = () => {
    if([paciente, propietario, email, telefono, sintomas].includes('')){
      Alert.alert(
        'Error',
        'Llena los campos son obligatorios',
        [{text: 'Ok'}]
      );
    
      return
    }

    const nuevoPaciente = {
      paciente, 
      propietario, 
      email, 
      telefono,
      fecha,
      sintomas,
    }

    setPacientes([...pacientes, nuevoPaciente]);
    changeVisible();

    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setFecha(new Date());
    setSintomas('');
  }

  return (
    <Modal animationType="slide" visible={isVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable 
            style={styles.btnCancelar}
            onLongPress={() => changeVisible()}
          >
            <Text style={styles.textCancelar}>Cancelar X</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Milanezo"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              placeholder="Solobino@gmail.com"
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholder="Telefono Propietario"
              placeholderTextColor={'#666'}
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Cita</Text>
            <View
              style={styles.contenedorFecha}
            >
              <DatePicker
                date={fecha}
                onDateChange={(date) => setFecha(date)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Sintomas Paciente"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable 
          onPress={handleNuevaCita}
            style={styles.btnAgregar}
          >
            <Text 
              style={styles.textAgregar}
            >Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  btnCancelar:{
    marginTop: 20,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textCancelar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 5,
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 10,
    borderRadius: 10,
  },
  contenedorFecha: {
    borderRadius: 10,
  },
  btnAgregar: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal:30,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textAgregar:{
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 15,
  }
});

export default Formulario;
