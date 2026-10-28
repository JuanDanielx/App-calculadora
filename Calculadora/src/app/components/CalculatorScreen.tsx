import { View, StyleSheet } from 'react-native';
import Display from './Display';
import CalculatorKeypad from './CalculatorKeypad';
import useCalculator from '../hooks/useCalculator';

export default function CalculatorScreen() {
  const {
    formula,
    number,
    clean,
    positiveNegative,
    buildNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <Display formula={formula} number={number} />
      <CalculatorKeypad
        clean={clean}
        positiveNegative={positiveNegative}
        buildNumber={buildNumber}
        divideOperation={divideOperation}
        multiplyOperation={multiplyOperation}
        subtractOperation={subtractOperation}
        addOperation={addOperation}
        calculateResult={calculateResult}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4FC',
    padding: 20,
    justifyContent: 'flex-end',
  },
});