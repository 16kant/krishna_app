import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

import FormBackground from '../components/formBackground';
import images from '../assets/images';

const GoogleLogin = props => {
  const height = Dimensions.get('window').height;
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '56813252820-t76vunbrgq1s0c2fq739t7rtfo6v9cut.apps.googleusercontent.com'
    });
    const getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();

        console.log('useEffect userInfo>>>>>', userInfo);

        setUser(userInfo);
        setLoggedIn(true);
        // this.setState({userInfo});
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          // user has not signed in yet
          console.log('SIGN_IN_REQUIRED');

          setLoggedIn(false);

          // this.setState({loggedIn: false});
        } else {
          console.log('some other error');

          // some other error
          setLoggedIn(false);
          // this.setState({loggedIn: false});
        }
      }
    };

    getCurrentUserInfo();
  }, []);

  const signIn = async () => {
    try {
      console.log('sign in');
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      setUser(userInfo);
      setLoggedIn(true);
      console.log('signIn userInfo>>>>>', userInfo);
      // this.setState({userInfo: userInfo, loggedIn: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');

        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');

        // play services not available or outdated
      } else {
        console.log('some other errror>>>>', error);
        // some other error happened
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      setLoggedIn(false);
      // this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const logIn = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    props.navigation.navigate('AppStack');
  };

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
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#fff',
            height: 46,
            width: '74%',
            borderRadius: 23,
            elevation: 5,
            borderWidth: 0.5,
            borderColor: '#888'
          }}
          activeOpacity={0.8}
          onPress={signIn}
          disabled={false}>
          <Image
            source={images.googleLogo}
            style={{height: 30, width: 42}}
            resizeMode="contain"
          />
          <Text style={{color: '#666', fontSize: 16}}>
            Sign in with <Text style={{fontWeight: 'bold'}}>Google</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoogleLogin;
