import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import { getSensorList } from 'sensorama';
import { Card } from './Card';

export class SensorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: [],
    };
    getSensorList()
      .then(sensors => this.setState({ sensors }))
      .catch(err => console.log(err));
  }

  renderSensor = data => {
    const { item } = data;
    return <Card data={item} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.mainView}>
        <FlatList
          style={styles.card}
          data={this.state.sensors}
          renderItem={this.renderSensor}
          keyExtractor={(item, index) => item.stringType}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
