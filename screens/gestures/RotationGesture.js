import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State
} from 'react-native-gesture-handler';

import Images from '../../assets/images';

const RotationGesture = () => {
  const rotationRef = useRef();
  const pinchRef = useRef();
  const panRef = useRef();
  const rotate = new Animated.Value(0);
  const rotateStr = rotate.interpolate({
    inputRange: [-100, 100],
    outputRange: ['-100rad', '100rad']
  });

  let lastRotate = 0;
  const onRotateGestureEvent = Animated.event([
    {nativeEvent: {rotation: rotate}}
  ]);
  const onRotateHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastRotate += event.nativeEvent.rotation;
      rotate.setOffset(lastRotate);
      rotate.setValue(0);
    }
  };

  const baseScale = new Animated.Value(1);
  const pinchScale = new Animated.Value(1);
  const scale = Animated.multiply(baseScale, pinchScale);

  let lastScale = 1;
  const onPinchGestureEvent = Animated.event([
    {nativeEvent: {scale: pinchScale}}
  ]);

  const onPinchHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastScale *= event.nativeEvent.scale;
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

  const tiltX = new Animated.Value(0);
  const tiltStrX = tiltX.interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ['1rad', '0rad', '-1rad']
  });

  let lastTiltX = 0;
  const tiltY = new Animated.Value(0);
  const tiltStrY = tiltY.interpolate({
    inputRange: [-250, 0, 250],
    outputRange: ['1rad', '0rad', '-1rad']
  });

  let lastTiltY = 0;
  const onTiltGestureEvent = Animated.event([
    {nativeEvent: {translationY: tiltX, translationX: tiltY}}
  ]);

  const onTiltGestureStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastTiltX += event.nativeEvent.translationY;
      lastTiltY += event.nativeEvent.translationX;
      tiltX.setOffset(lastTiltX);
      tiltX.setValue(0);
      tiltY.setOffset(lastTiltY);
      tiltY.setValue(0);
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onTiltGestureEvent}
        onHandlerStateChange={onTiltGestureStateChange}
        simultaneousHandlers={[pinchRef, rotationRef]}
        ref={panRef}
        minDist={10}
        // minPointers={2}
        maxPointers={2}
        // avgTouches
      >
        <RotationGestureHandler
          onGestureEvent={onRotateGestureEvent}
          onHandlerStateChange={onRotateHandlerStateChange}
          ref={rotationRef}
          simultaneousHandlers={[pinchRef, panRef]}>
          <Animated.View>
            <PinchGestureHandler
              onGestureEvent={onPinchGestureEvent}
              onHandlerStateChange={onPinchHandlerStateChange}
              ref={pinchRef}
              simultaneousHandlers={[rotationRef, panRef]}>
              <Animated.Image
                style={[
                  styles.box,
                  {
                    transform: [
                      {perspective: 200},
                      {rotate: rotateStr},
                      {scale: scale},
                      {rotateX: tiltStrX},
                      {rotateY: tiltStrY}
                    ]
                  }
                ]}
                source={Images.underConstruction}
              />
            </PinchGestureHandler>
          </Animated.View>
        </RotationGestureHandler>
      </PanGestureHandler>
    </View>
  );
};

RotationGesture.navigationOptions = {
  drawerLabel: 'RotationGestureHandler'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  }
});

export default RotationGesture;
