import {Image, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  touchHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  touchHeaderHidden: {
    height: '0%',
    width: '0%',
  },
  canGoBackStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  imageLoading: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});

type Props = {
  source: {
    html?: string;
    url?: string;
  };
  onNavigationStateChange: any;
  canGoBack: boolean;
};

const WebViewWithBackButton = (props: Props) => {
  const onBack = () => {
    WEBVIEW_REF.current?.goBack();
  };
  const WEBVIEW_REF = useRef() as React.MutableRefObject<WebView>;
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={!props.canGoBack}
          onPress={onBack}
          style={
            props.canGoBack ? styles.touchHeader : styles.touchHeaderHidden
          }>
          <Icon style={styles.canGoBackStyle} name="arrow-back-ios" size={20} />
          <Text style={styles.canGoBackStyle}>Back</Text>
        </TouchableOpacity>
      </View>
      <WebView
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        ref={WEBVIEW_REF}
        style={{flex: 1}}
        onNavigationStateChange={props.onNavigationStateChange}
        source={{
          html: props.source.html!,
          uri: props.source.url!,
        }}
      />
      {isLoading && (
        <Image
          style={styles.imageLoading}
          source={require('../../assests/react_native_logo.png')}
        />
      )}
    </>
  );
};

export default WebViewWithBackButton;
