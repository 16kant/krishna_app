import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const FormSubmitButton = props => {
  const {title = '', onPress = () => {}} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7e00fc',
    marginVertical: 18,
    height: 40,
    width: '80%',
    borderRadius: 20,
    elevation: 4
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default FormSubmitButton;
