import React from 'react';
import WebViewWithBackButton from '../../generalPurpose/WebViewWithBackButton';

type Props = {
  navigation: any;
};

const LefeWareSolutionsWebview = (props: Props) => {
  props.navigation.setOptions({
    title: '',
  });

  const [canGoBack, setCanGoBack] = React.useState(false);

  const onNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <WebViewWithBackButton
      canGoBack={canGoBack}
      onNavigationStateChange={onNavigationStateChange}
      source={{
        url: 'https://www.lefewaresolutions.com/',
      }}
    />
  );
};

export default LefeWareSolutionsWebview;
