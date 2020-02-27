import React from 'react';
import {View, Dimensions} from 'react-native';

const FormBackground = () => {
  const height = Dimensions.get('window').height;

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        height: height,
        width: '100%',
        zIndex: -1,
        borderBottomWidth: 1200,
        borderLeftWidth: 100,
        borderRightWidth: 300,
        borderTopWidth: 400,
        borderStyle: 'solid',
        borderBottomColor: '#490094',
        borderLeftColor: '#490094',
        borderRightColor: '#7e00fc',
        borderTopColor: '#490094'
      }}
    />
  );
};

export default FormBackground;
