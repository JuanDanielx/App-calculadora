import { TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import CustomText from './CustomText';

interface BotonProps {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    onPress?: () => void;
    doubleSize?: boolean;
}

// ⚠️ Asegúrate de que tenga el 'export default'
export default function Boton({ 
  label, 
  onPress, 
  backgroundColor = '#FFFFFF',
  textColor = '#35213F',
  doubleSize = false
}: BotonProps) {
  const handlePress = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor },
        doubleSize && styles.doubleButton
      ]} 
      onPress={handlePress}
    >
      <CustomText style={[styles.text, { color: textColor }]}>{label}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 6,
    shadowColor: '#4B3563',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 3,
  },
  doubleButton: {
    flex: 2,
  },
  text: {
    fontSize: 24,
  },
});