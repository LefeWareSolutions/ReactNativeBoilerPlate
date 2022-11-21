import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, IconButton, Text} from 'react-native-paper';

type Props = {
  navigation: any;
};

const TabScreenOne = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assests/LefeWareSolutionsLogoDark.png')}
        style={styles.lefeWareLogo}
      />
      <View style={styles.welcomeMessageContainer}>
        <Text style={styles.welcomeMessage}>Welcome to React</Text>
      </View>
      <Image
        source={require('../../assests/react_native_logo.png')}
        style={styles.reactLogo}
      />
      <View style={styles.topMessageContainer}>
        <Text style={styles.title}>Who we are:</Text>
        <Text style={styles.content}>
          Our cloud company is an industry leader in helping companies within
          emerging industries leverage the cloud to scale their IT
          infrastructure in a secure, scalable and cost-effective manner. With
          our array of dedicated cloud and security specialists on staff,
          LefeWare Solutions has the sophistication to manage complex
          requirements for Fortune 500 companies and is agile and lean enough to
          efficiently deliver value-added services to small and mid-market
          businesses.
        </Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.title}>Contact Us:</Text>
        <View style={styles.iconContainer}>
          <IconButton style={styles.button} icon="home" />
          <Text style={styles.content}>
            7901 4TH ST N STE 8170, ST PETERSBURG, FL, 33702
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <IconButton style={styles.button} icon="email" />
          <Text style={styles.content}>admin@lefewaresolutions.com</Text>
        </View>
        <View style={styles.iconContainer}>
          <IconButton style={styles.button} icon="phone" />
          <Text style={styles.content}>514-702-1915</Text>
        </View>
      </View>
      <Button
        onPress={() => props.navigation.navigate('LefeWareSolutions')}
        style={styles.websiteButton}
        color="blue">
        Click here for our website
      </Button>
    </ScrollView>
  );
};

export default TabScreenOne;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 30,
  },
  lefeWareLogo: {
    alignSelf: 'center',
    width: '80%',
    maxWidth: 500,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 70,
  },
  welcomeMessageContainer: {
    marginTop: -20,
    position: 'absolute',
    top: 265,
    zIndex: 1,
    alignSelf: 'center',
  },
  welcomeMessage: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
  },
  reactLogo: {
    alignSelf: 'center',
    width: '80%',
    maxWidth: 400,
    resizeMode: 'contain',
    marginTop: -200,
  },
  topMessageContainer: {
    paddingBottom: 30,
    marginTop: -80,
  },
  messageContainer: {
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    paddingBottom: 10,
  },
  content: {
    fontSize: 15,
  },
  button: {
    marginLeft: 0,
  },
  websiteButton: {
    paddingBottom: 30,
  },
});
