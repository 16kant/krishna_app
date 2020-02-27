import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  State
} from 'react-native-gesture-handler';

const TapGesture = () => {
  const {event, cond, eq, Value} = Animated;
  const [state, setState] = useState(new Value(-1));
  // let state = new Value(-1);
  const doubleTapRef = useRef();
  const onSingleTap = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      alert('Single tap');
    }
  };
  const onDoubleTap = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      alert('Double tap');
    }
  };

  // const onStateChange = event([
  //   {
  //     nativeEvent: {
  //       state: state
  //     }
  //   }
  // ]);
  const onStateChange = ({nativeEvent}) => {
    setState(new Value(nativeEvent.state));
    if (nativeEvent.state === State.END) {
      alert('Long press');
    }
    if (nativeEvent.state === State.CANCELLED) {
      alert('Long press cancelled');
    }
    // console.log("nativeEvent>>>>", nativeEvent);
  };
  const _opacity = cond(eq(state, State.ACTIVE), 0.2, 1);

  return (
    <View style={styles.container}>
      <LongPressGestureHandler
        onHandlerStateChange={onStateChange}
        minDurationMs={300}
        maxDist={10}>
        <TapGestureHandler
          onHandlerStateChange={onSingleTap}
          waitFor={doubleTapRef}>
          <TapGestureHandler
            onHandlerStateChange={onDoubleTap}
            numberOfTaps={2}
            maxDelayMs={300}
            ref={doubleTapRef}>
            <Animated.View style={[styles.box, {opacity: _opacity}]} />
          </TapGestureHandler>
        </TapGestureHandler>
      </LongPressGestureHandler>
    </View>
  );
};

TapGesture.navigationOptions = {
  drawerLabel: 'TapGestureHandler'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: 'tomato',
    width: 200,
    height: 200
  }
});

export default TapGesture;
