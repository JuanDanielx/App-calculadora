import { View, StyleSheet } from 'react-native';
import Boton from './Boton';

interface CalculatorKeypadProps {
  clean: () => void;
  positiveNegative: () => void;
  buildNumber: (textNumber: string) => void;
  divideOperation: () => void;
  multiplyOperation: () => void;
  subtractOperation: () => void;
  addOperation: () => void;
  calculateResult: () => void;
}

export default function CalculatorKeypad({
  clean,
  positiveNegative,
  buildNumber,
  divideOperation,
  multiplyOperation,
  subtractOperation,
  addOperation,
  calculateResult,
}: CalculatorKeypadProps) {
  return (
    <View style={styles.buttonsContainer}>
      {/* Fila 1 */}
      <View style={styles.row}>
        <Boton label="C" backgroundColor="#E9DFF5" textColor="#4B3563" onPress={clean} />
        <Boton label="+/-" backgroundColor="#E9DFF5" textColor="#4B3563" onPress={positiveNegative} />
        <Boton label="%" backgroundColor="#E9DFF5" textColor="#4B3563" />
        <Boton label="÷" backgroundColor="#8054C7" textColor="#FFFFFF" onPress={divideOperation} />
      </View>

      {/* Fila 2 */}
      <View style={styles.row}>
        <Boton label="7" onPress={() => buildNumber('7')} />
        <Boton label="8" onPress={() => buildNumber('8')} />
        <Boton label="9" onPress={() => buildNumber('9')} />
        <Boton label="×" backgroundColor="#8054C7" textColor="#FFFFFF" onPress={multiplyOperation} />
      </View>

      {/* Fila 3 */}
      <View style={styles.row}>
        <Boton label="4" onPress={() => buildNumber('4')} />
        <Boton label="5" onPress={() => buildNumber('5')} />
        <Boton label="6" onPress={() => buildNumber('6')} />
        <Boton label="-" backgroundColor="#8054C7" textColor="#FFFFFF" onPress={subtractOperation} />
      </View>

      {/* Fila 4 */}
      <View style={styles.row}>
        <Boton label="1" onPress={() => buildNumber('1')} />
        <Boton label="2" onPress={() => buildNumber('2')} />
        <Boton label="3" onPress={() => buildNumber('3')} />
        <Boton label="+" backgroundColor="#8054C7" textColor="#FFFFFF" onPress={addOperation} />
      </View>

      {/* Fila 5 */}
      <View style={styles.row}>
        <Boton label="0" doubleSize onPress={() => buildNumber('0')} />
        <Boton label="." onPress={() => buildNumber('.')} />
        <Boton label="=" backgroundColor="#8054C7" textColor="#FFFFFF" onPress={calculateResult} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});