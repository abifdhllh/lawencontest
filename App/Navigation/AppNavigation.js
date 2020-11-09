import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../Containers/LoginScreen';
import ListScreen from '../Containers/ListScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    LoginScreen: {screen: LoginScreen},
    ListScreen: {screen: ListScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
