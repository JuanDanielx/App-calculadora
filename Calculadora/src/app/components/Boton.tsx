import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

interface BotonProps {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    onPress?: () => void;
    doubleSize?: boolean; // Prop opcional para el botón 0
}

export default function CalculatorButton({ 
  label, 
  onPress, 
  backgroundColor = '#333333', 
  textColor = '#FFFFFF',
  doubleSize = false
}: BotonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor },
        doubleSize && styles.doubleButton // Si es true, duplica su ancho en la fila
      ]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,                    // Se distribuye equitativamente en la fila
    height: 70,                 // Altura rectangular
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,           // Esquinas redondeadas
    margin: 6,                  // Separación entre botones
  },
  doubleButton: {
    flex: 2,                    // Ocupa el doble de espacio (ideal para el 0)
  },
  text: {
    fontSize: 24,
    fontFamily: 'WorkSans-Light',
  },
});