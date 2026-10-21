import { View, StyleSheet } from 'react-native';

export default function Display() {
  return (
    <View style={styles.displayRectangle} />
  );
}

const styles = StyleSheet.create({
  displayRectangle: {
    width: '100%',
    height: 130,            
    backgroundColor: '#272727', 
    borderRadius: 16,        
    marginBottom: 20,      
    
  },
});