import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { View } from '../Components/View';
import { Card } from './Card';

export class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          name: 'List',
          onPress: () => this.props.navigation.navigate('SensorsList'),
        },
        {
          name: 'Gyroscope',
          onPress: () => this.props.navigation.navigate('Gyroscope'),
        },
        {
          name: 'Acelerometer',
        },
      ],
    };
  }

  _renderItem = data => {
    const { item } = data;
    return <Card data={item} />;
  };
  _keyExtractor = (data, index) => data.name;

  render() {
    return (
      <View style={styles.mainView}>
        <FlatList
          style={styles.card}
          data={this.state.options}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
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
