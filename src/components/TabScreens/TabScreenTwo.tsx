import React from 'react';
import {Text} from 'react-native-paper';
import {ApplicationState} from '../../store';
import {useAppSelector} from '../../store/hooks';

type Props = {};

const TabScreenTwo = (props: Props) => {
  const greeting = useAppSelector(
    (state: ApplicationState) => state.initialStore.greeting.greeting,
  );

  return <Text>{greeting} from tab screen 2</Text>;
};

export default TabScreenTwo;
