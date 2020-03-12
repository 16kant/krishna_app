import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import FormBackground from '../components/formBackground';

const GoogleLogin = props => {
  const height = Dimensions.get('window').height;

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{
        height: height
      }}>
      <FormBackground />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TouchableOpacity
          style={{
            height: 46,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 0.5,
            borderColor: '#490094',
            backgroundColor: '#fff'
          }}
          onPress={async () => {
            await AsyncStorage.setItem('userToken', 'abc');
            props.navigation.navigate('AppStack');
          }}>
          <Text style={{color: '#666', fontSize: 16}}>
            Sign in with <Text style={{fontWeight: 'bold'}}>Google</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoogleLogin;
