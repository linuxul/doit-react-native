import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  Platform,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from './src/data';

const title = 'BottomBar';
const iconSize = 30;
const iconColor = 'white';
const icons = [
  'home',
  'table-search',
  'face-profile-woman',
  'account-settings',
];

export default function BottomBar() {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor}></Icon>
  ));

  return (
    <View style={[styles.view]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'flex-start',
    // justifyContent: 'space-evenly',
    padding: 5,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
