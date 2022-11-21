import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AppBarHeader from '../layout/AppBarHeader';
import TabScreenOne from '../TabScreens/TabScreen';
import TabScreenTwo from '../TabScreens/TabScreenTwo';

type Props = {};
const Tab = createMaterialTopTabNavigator();

const TabNavigation = (props: Props) => {
  return (
    <>
      <AppBarHeader navigation={props.navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            height: 3,
            marginLeft: 4,
          },
          tabBarItemStyle: {
            width: 'auto',
            marginLeft: 5,
          },
          tabBarLabelStyle: {
            textTransform: 'none',
            fontSize: 16,
          },
        }}>
        <Tab.Screen name="Tab Screen" component={TabScreenOne} />
        <Tab.Screen name="Tab Screen 2" component={TabScreenTwo} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
