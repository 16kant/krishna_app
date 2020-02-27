import React, {useState, useEffect, useCallback} from 'react';
import {Animated, StyleSheet, View, Button} from 'react-native';

const First = props => {
  const {navigation} = props;
  const [count, setCount] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  const onFocus = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  }, [fadeAnim]);

  const onBlur = useCallback(() => fadeAnim.setValue(0), [fadeAnim]);

  useEffect(() => {
    const focusListener = navigation.addListener('didFocus', () => onFocus());
    const blurListener = navigation.addListener('willBlur', () => onBlur());

    return () => {
      focusListener.remove();
      blurListener.remove();
    };
  }, [navigation, onBlur, onFocus]);

  useEffect(() => {
    onFocus();
  }, [onFocus]);

  const testing1 = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  const testing = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  console.log('count>>>', count);

  return (
    <View style={styles.container}>
      <Button title={`count ${count}`} onPress={() => testing1()} />
      <Animated.View style={[styles.box, {opacity: fadeAnim}]} />
    </View>
  );
};

First.navigationOptions = {
  drawerLabel: 'First'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200
  }
});

export default First;
