import { createStackNavigator } from 'react-navigation-stack';

import { MainMenu } from './MainMenu';
import { SensorsList } from './SensorsList';
import { Gyroscope } from './Gyroscope';
import { createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: MainMenu,
      navigationOptions: () => ({
        title: 'Options',
      }),
    },
    SensorsList: {
      screen: SensorsList,
      navigationOptions: () => ({
        title: 'Sensors',
      }),
    },
    Gyroscope: {
      screen: Gyroscope,
      navigationOptions: () => ({
        title: 'Gyroscope',
      }),
    },
  },
  {
    initialRouteName: 'Gyroscope',
  },
);

export let AppContainer = createAppContainer(MainNavigator);
