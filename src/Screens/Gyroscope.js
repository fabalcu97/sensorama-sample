import React from 'react';
import {
  DeviceEventEmitter,
  Text,
  StyleSheet,
  View as RegularView,
  TouchableOpacity,
} from 'react-native';

import { Gyro } from 'sensorama';
import { GameLoop } from 'react-native-game-engine';

import { View } from '../Components/View';
import { Ball } from './Ball';

export class Gyroscope extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ballPosition: [100, 100],
    };
  }

  componentDidMount() {
    Gyro.setUpdateInterval(20);

    this.subscription = DeviceEventEmitter.addListener(
      'Gyroscope',
      this.onGyroData,
    );

    Gyro.getData()
      .then(data => this.setState({ data }))
      .catch(err => console.error(err));
  }

  setPosition = layout => {
    const { height, width } = layout.nativeEvent.layout;
    console.log(layout.nativeEvent.layout);
    this.setState({
      ballPosition: [width / 2, height / 2],
    });
  };

  componentWillUnmount() {
    this.subscription.remove();
  }

  onGyroData = e => {
    this.setState({ gyro: e });
    this.parsePosition();
  };

  parsePosition = () => {};

  render() {
    const { data, gyro } = this.state;
    return (
      <View style={styles.mainContainer}>
        <RegularView style={styles.container}>
          <RegularView style={styles.info}>
            <Text style={styles.title}>Gyroscope Info</Text>
            <Text>Name: {data.name || ''}</Text>
            {Object.keys(gyro || {}).map((k, idx) => (
              <Text key={idx}>
                {k}: {gyro[k] || ''}
              </Text>
            ))}
          </RegularView>
          <RegularView style={styles.control}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Gyro.startUpdates()}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Gyro.stopUpdates()}>
              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          </RegularView>
        </RegularView>
        <RegularView onLayout={this.setPosition} style={styles.canvas}>
          <Ball position={this.state.ballPosition}></Ball>
        </RegularView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '20%',
  },
  info: {
    width: '50%',
  },
  button: {
    height: 40,
    margin: 5,
    width: 180,
    backgroundColor: '#EEE',
  },
  buttonText: {
    textAlign: 'center',
    display: 'flex',
    paddingTop: 5,
  },
  canvas: {
    borderWidth: 1,
    borderColor: 'red',
    height: '77%',
  },
});
