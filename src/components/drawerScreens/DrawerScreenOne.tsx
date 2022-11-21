import React from 'react';
import {Text} from 'react-native-paper';
import {ApplicationState} from '../../store';
import {useAppSelector} from '../../store/hooks';

type Props = {};

const DrawerScreenOne = (props: Props) => {
  const greeting = useAppSelector(
    (state: ApplicationState) => state.initialStore.greeting.greeting,
  );

  return <Text>{greeting} From Drawer screen 1</Text>;
};

export default DrawerScreenOne;
