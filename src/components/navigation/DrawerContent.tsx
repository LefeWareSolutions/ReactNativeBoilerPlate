import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, View} from 'react-native';

type Props = {};

const drawerImageContainerStyle = {
  width: '70%',
  height: '10%',
  marginTop: '15%',
  marginBottom: '0%',
  marginLeft: '5%',
};

const drawerImageStyle = {
  height: '100%',
  width: '100%',
  resizeMode: 'contain',
};

const DrawerContent = (props: Props) => {
  return (
    <>
      <View style={drawerImageContainerStyle}>
        <Image
          source={require('../../assests/LefeWareSolutionsLogoDark.png')}
          style={drawerImageStyle}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
};

export default DrawerContent;
