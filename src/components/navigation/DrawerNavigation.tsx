import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from './DrawerContent';
import StackNavigation from './StackNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerScreenOne from '../drawerScreens/DrawerScreenOne';

type Props = {};

const Drawer = createDrawerNavigator();

const DrawerNavigation = (props: Props) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={StackNavigation}
        options={{
          headerShown: false,
          drawerActiveTintColor: 'gray',
          drawerIcon: ({size}) => <Icon name="home" size={size} />,
        }}
      />
      <Drawer.Screen
        name="Drawer Screen One"
        component={DrawerScreenOne}
        options={{
          headerShown: true,
          drawerActiveTintColor: 'gray',
          drawerIcon: ({size}) => <Icon name="person" size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
