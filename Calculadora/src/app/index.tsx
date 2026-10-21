import { View, StyleSheet } from 'react-native';
import Display from './components/Display';
import CalculatorButton from './components/Boton'; // Ajusta la ruta si tu archivo se llama diferente

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Rectángulo del Display */}
      <Display />

      {/* Contenedor de la Botonera */}
      <View style={styles.buttonsContainer}>
        {/* Fila 1 */}
        <View style={styles.row}>
          <CalculatorButton label="C" backgroundColor="#cecaca" textColor="#000000" />
          <CalculatorButton label="+/-" backgroundColor="#A5A5A5" textColor="#000000" />
          <CalculatorButton label="%" backgroundColor="#A5A5A5" textColor="#000000" />
          <CalculatorButton label="÷" backgroundColor="#a7a7a7" />
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <CalculatorButton label="7" />
          <CalculatorButton label="8" />
          <CalculatorButton label="9" />
          <CalculatorButton label="×" backgroundColor="#a7a7a7" />
        </View>

        {/* Fila 3 */}
        <View style={styles.row}>
          <CalculatorButton label="4" />
          <CalculatorButton label="5" />
          <CalculatorButton label="6" />
          <CalculatorButton label="-" backgroundColor="#a7a7a7" />
        </View>

        {/* Fila 4 */}
        <View style={styles.row}>
          <CalculatorButton label="1" />
          <CalculatorButton label="2" />
          <CalculatorButton label="3" />
          <CalculatorButton label="+" backgroundColor="#a7a7a7" />
        </View>

        {/* Fila 5 (El botón 0 con doble ancho) */}
        <View style={styles.row}>
          <CalculatorButton label="0" doubleSize />
          <CalculatorButton label="." />
          <CalculatorButton label="=" backgroundColor="#a7a7a7" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'flex-end', // Empuja todo el contenido hacia abajo como una calculadora real
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});