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
import * as D from '../data';

const title = 'TopBar';
const name = D.randomName();
const avatarUrl = D.randomAvatarUrl();

export default function TopBar() {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{uri: avatarUrl}}></Image>
      <View style={styles.centerView}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Icon name="menu" size={20} color="white"></Icon>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  avatar: {width: 40, height: 40, borderRadius: 24},
  centerView: {flex: 1},
});
