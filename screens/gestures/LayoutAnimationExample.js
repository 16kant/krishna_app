import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation
} from 'react-native';

const LayoutAnimationExample = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.container, {overflow: 'hidden'}]}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(
              400,
              LayoutAnimation.Types.easeInEaseOut,
              LayoutAnimation.Properties.scaleXY
            )
          );
          setExpanded(!expanded);
        }}>
        <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>
      </TouchableOpacity>
      {expanded && <Text>I disappear sometimes!</Text>}
    </View>
  );
};

LayoutAnimationExample.navigationOptions = {
  drawerLabel: 'LayoutAnimation'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LayoutAnimationExample;
