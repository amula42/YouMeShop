// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, SafeAreaView, StatusBar, BackHandler } from 'react-native';

export default function App() {
  const [canGoBack, setCanGoBack] = useState(false);
  const onBackPressed = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
    }else{
      BackHandler.exitApp();
    }
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", onBackPressed);

    () => BackHandler.removeEventListener("hardwareBackPress", onBackPressed);
  }, [canGoBack])
  const webViewRef = useRef();
  return (
  <SafeAreaView style={styles.container}>
    <StatusBar
        animated={true}
        backgroundColor="#1957c1" />
    <WebView
    ref={webViewRef}
    source={{
      uri: 'https://demos.8bittechnologies.com/clothstore/'
    }}
    onNavigationStateChange = {(state) => {
      setCanGoBack(state.canGoBack);
    }}
   />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});