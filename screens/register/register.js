import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Base from './registerBase';
import InputField from '../../components/formInput';
import FormBackground from '../../components/formBackground';
import FormSubmitButton from '../../components/formSubmitButton';

export default class Register extends Base {
  render() {
    const height = Dimensions.get('window').height;
    const {error} = this.state;

    return (
      // <KeyboardAvoidingView behavior={"padding"}>
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
            justifyContent: 'space-between'
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'flex-end'
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 40,
                fontStyle: 'italic'
              }}>
              Krishna
            </Text>
          </View>
          <View
            style={{
              height: 440,
              marginVertical: 20,
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              backgroundColor: '#fff',
              elevation: 8
            }}>
            <InputField
              label="Email"
              value={this.state.user.email}
              onChangeText={text =>
                this.handleChange(text, 'email', 'emailError')
              }
              errorField={error.emailError}
            />
            <InputField
              label="Username"
              value={this.state.user.username}
              onChangeText={text =>
                this.handleChange(text, 'username', 'usernameError')
              }
              errorField={error.usernameError}
            />
            <InputField
              label="Full Name"
              value={this.state.user.fullname}
              onChangeText={text =>
                this.handleChange(text, 'fullname', 'fullnameError')
              }
              errorField={error.fullnameError}
            />
            <InputField
              label="Password"
              value={this.state.user.password}
              onChangeText={text =>
                this.handleChange(text, 'password', 'passwordError')
              }
              errorField={error.passwordError}
              secureTextEntry={true}
            />
            <InputField
              label="Confirm Password"
              value={this.state.user.confirmPassword}
              onChangeText={text =>
                this.handleChange(
                  text,
                  'confirmPassword',
                  'confirmPasswordError'
                )
              }
              errorField={error.confirmPasswordError}
              secureTextEntry={true}
            />
            <FormSubmitButton
              title="Sign Up"
              onPress={this.validateAllFields}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 46,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopWidth: 0.5,
              borderColor: '#490094',
              backgroundColor: '#7e00fc'
            }}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{color: '#fff'}}>
              Already have an account?{' '}
              <Text style={{fontWeight: 'bold'}}>Log In.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      // </KeyboardAvoidingView>
    );
  }
}
