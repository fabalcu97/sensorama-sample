import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export class View extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.mainView}>{this.props.children}</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
