import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';

const RADIUS = 40;

export class Cube extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS;
    const y = this.props.position[1] - RADIUS;
    return <View style={[styles.finger, { left: x, top: y }]} />;
  }
}

const styles = StyleSheet.create({
  finger: {
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: 'pink',
    position: 'relative',
  },
});
