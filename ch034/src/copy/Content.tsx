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
import {randomAvatarUrl} from '../data/faker';

const title = 'Content';
const avatars = D.makeArray(200).map(notUsed => D.randomAvatarUrl());

export default function Content() {
  const children = avatars.map((avatarUrl, index) => (
    <View key={index.toString()} style={styles.avatarView}>
      <Image style={styles.avatar} source={{uri: avatarUrl}}></Image>
    </View>
  ));

  return <View style={[styles.view]}>{children}</View>;
}

// export default function Content() {
//   return (
//     <View style={[styles.view]}>
//       <Text style={[styles.text]}>{title}</Text>
//       <View style={[{flex: 0, backgroundColor: 'red'}]}>
//         <Text>flex: 0</Text>
//       </View>
//       <View style={[{flex: 1, backgroundColor: 'yellow'}]}>
//         <Text>flex: 1</Text>
//       </View>
//       <View style={[{flex: 2, backgroundColor: 'purple'}]}>
//         <Text>flex: 2</Text>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    // overflow: 'hidden',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  avatarView: {padding: 3},
  avatar: {width: 50, height: 50, borderRadius: 25},
});
