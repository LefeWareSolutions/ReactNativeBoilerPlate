import {Appbar} from 'react-native-paper';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const AppBarHeader = ({navigation}: any) => {
  const isSignedIn = true;
  return (
    <Appbar.Header dark={false} style={styles.header}>
      {!isSignedIn && (
        <Appbar.Action
          size={45}
          icon="account-circle"
          onPress={() => navigation.openDrawer()}
        />
      )}
      {isSignedIn && (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assests/LefeWareSolutionsLogoDarkFavicon.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: 'white',
  },
  avatar: {
    marginRight: 8,
    marginLeft: '10%',
    width: 65,
    height: 45,
  },
});

export default AppBarHeader;
