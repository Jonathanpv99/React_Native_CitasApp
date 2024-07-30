import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { formatearFecha } from '../helpers';

function InfoPaciente({data, pacienteView, setPaciente}): React.JSX.Element {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Text style={styles.titulo}>
          Información {''}
          <Text style={styles.tituloBold}>Paciente</Text>
        </Text>
        <Pressable 
            style={styles.btnCerrar}
            onLongPress={() => {
                setPaciente({});
                pacienteView(false);
                }
            }
        >
          <Text style={styles.textCerrar}>Cerrar X</Text>
        </Pressable>
      </View>
      
      <View
        style={styles.contenido}
      >
        <View style={styles.campo}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.valor}>{data.paciente}</Text>
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.valor}>{data.propietario}</Text>
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.valor}>{data.email}</Text>
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Telefono:</Text>
            <Text style={styles.valor}>{data.telefono}</Text>
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.valor}>{formatearFecha(data.fecha)}</Text>
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Sintomas:</Text>
            <Text style={styles.valor}>{data.sintomas}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F59E0B',
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
  btnCerrar:{
    marginTop: 20,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textCerrar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  contenido :{
    marginTop: 30,
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
  },
  campo: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontSize: 12,
    fontWeight: '600',
  },
  valor: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});
export default InfoPaciente;
