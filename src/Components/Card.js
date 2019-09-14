import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity onPress={data.onPress} style={styles.card}>
        <Text style={styles.text}>{data.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 40,
    margin: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 20,
  },
});
