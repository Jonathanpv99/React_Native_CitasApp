import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { formatearFecha } from '../helpers';

function Paciente({
  data,
  editarPaciente,
  eliminarPaciente,
  setPaciente,
  pacienteView,
}): React.JSX.Element {
  const {paciente, fecha, id} = data;

  return (
    <Pressable
      onLongPress={ () => {
        pacienteView(true);
        setPaciente(data);
        
      }}
    >
      <View style={styles.contenedor}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.texto}>{paciente}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
        <View style={styles.contenedorButtons}>
          <Pressable
            style={[styles.btn, styles.btnEditar]}
            onLongPress={() => editarPaciente(id)}>
            <Text style={styles.textoBtn}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnELiminar]}
            onLongPress={() => eliminarPaciente(id)}>
            <Text style={styles.textoBtn}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    color: '#6D28D9',
    fontSize: 25,
    marginBottom: 10,
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  fecha: {
    color: '#374151',
  },
  contenedorButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: '#F59E0B',
  },
  btnELiminar: {
    backgroundColor: '#EF4444',
  },
  textoBtn: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default Paciente;
