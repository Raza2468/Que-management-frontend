import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignIn from './src/SignIn/SignIn';
import SignUP from './src/SignUP/SignUP';
import List from './src/List/List';
import UserHome from './src/UserHome/UserHome';

// import Header from './src/Header/Header';

function App() {
  return (
    <>
    <UserHome />
    {/* <SignIn /> */}
    {/* <SignUP /> */}
    {/* <List /> */}
    
    </>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
