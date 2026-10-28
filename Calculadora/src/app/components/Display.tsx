import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';

interface DisplayProps {
  formula: string;
  number: string;
}

export default function Display({ formula, number }: DisplayProps) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.subResult} numberOfLines={1} adjustsFontSizeToFit>
        {formula !== '0' ? formula : ''}
      </CustomText>
      <CustomText style={styles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-end',
  },
  subResult: {
    fontSize: 35,
    color: '#9B89AC',
  },
  mainResult: {
    fontSize: 70,
    color: '#35213F',
  },
});