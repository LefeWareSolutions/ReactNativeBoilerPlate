import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import {IconButton} from 'react-native-paper';
import LefeWareSolutionsWebview from '../TabScreens/webview/lefeWareSolutions';

type Props = {
  navigation: any;
};
const Stack = createStackNavigator();

const StackNavigation = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <IconButton
            icon="arrow-left"
            onPress={() => props.navigation.goBack()}
          />
        ),
      }}>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LefeWareSolutions"
        component={LefeWareSolutionsWebview}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
