import React, {useContext} from 'react';
import {View, Text, Button, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../utils/userContext';
import {GoogleSignin} from '@react-native-community/google-signin';

const Home = props => {
  const {userState} = useContext(UserContext);

  // const signOut = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('AuthStack');
  // };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      props.navigation.navigate('AuthStack');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}>
      <Image
        source={{uri: userState?.user?.user?.photo}}
        style={{height: 100, width: 100, borderRadius: 50}}
      />
      <View
        style={{
          borderWidth: 4,
          borderColor: '#777',
          borderRadius: 5,
          width: '90%',
          padding: 30
        }}>
        <Text>
          <Text style={{fontWeight: 'bold', textAlign: 'left'}}>id: </Text>
          {userState?.user?.user?.id}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>name: </Text>
          {userState?.user?.user?.name}
        </Text>
        <Text>
          <Text style={{fontWeight: 'bold'}}>email: </Text>
          {userState?.user?.user?.email}
        </Text>
      </View>
      {/* <Text>Krishna</Text> */}
      <Button title={'Log Out'} onPress={signOut} />
    </View>
  );
};

export default Home;
