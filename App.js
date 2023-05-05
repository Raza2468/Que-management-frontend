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
import AdminHome from './src/AdminHome/AdminHome';
import Dashboard from './src/Dashboard/Dashboard';
import ManagerHome from './src/ManagerHome/ManagerHome';
import Registration from './src/Registration/Registration';
import Franchise from './src/Franchise/Franchise';

// import Header from './src/Header/Header';

function App() {
  return (
    <>
      <SignIn />
      {/* <SignUP /> */}
      {/* <Dashboard /> */}
      {/* <ManagerHome /> */}
      {/* <AdminHome /> */}
      {/* <UserHome /> */}
      {/* <List /> */}
      {/* <Franchise /> */}
      {/* <Registration /> */}
    </>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
