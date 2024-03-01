/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  Platform,
  Dimensions,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const {width, height} = Dimensions.get('window');

function App(): React.JSX.Element {
  const nameOS = Platform.OS;

  console.log(`os = ${nameOS}`);
  console.log(`width = ${width}, height = ${height}`);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>os: {nameOS}</Text>
      <Text style={styles.text}>
        {width} : {height}
      </Text>
      <View style={[styles.box, styles.border]}></View>
      <View style={[styles.box, styles.border, {borderRadius: 24}]}></View>
      <View
        style={[
          styles.box,
          styles.border,
          {borderTopLeftRadius: 16, borderTopRightRadius: 16},
        ]}></View>
    </SafeAreaView>
  );
}

// function App(): React.JSX.Element {
//   const {width, height} = Dimensions.get('window');
//   const nameOS = Platform.OS;

//   console.log(`os = ${nameOS}`);
//   console.log(`width = ${width}, height = ${height}`);

//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <Text style={styles.text}>Hello world!</Text>
//       <Text style={styles.text}>{nameOS}</Text>
//       <Text style={styles.text}>
//         {width}: {height}
//       </Text>
//     </SafeAreaView>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'green',
    margin: '10%',
    paddingLeft: Platform.select({ios: 0, android: 20}),
  },
  // 적용 않됨.
  // safeAreaView: {
  //   flex: 1,
  //   height: 50,
  //   backgroundColor: 'green',
  // },
  // safeAreaView: {
  //   flex: 0.5,
  //   backgroundColor: 'green',
  // },
  // safeAreaView: {
  //   flex: 1,
  //   backgroundColor: 'green',
  // },
  // safeAreaView: {
  //   height: '50%',
  //   backgroundColor: 'green',
  // },

  text: {
    backgroundColor: 'gray',
    color: 'white',
    fontSize: 20,
    padding: 10,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
  },
  // text: {
  //   color: 'white',
  //   fontSize: 20,
  // },

  box: {
    height: 100,
    backgroundColor: 'black',
    marginLeft: Platform.select({ios: 20, android: 30}),
  },
  // box: {
  //   height: 100,
  //   backgroundColor: 'black',
  //   margin: 10,
  // },
  border: {
    borderWidth: 10,
    borderColor: 'red',
    backgroundColor: 'yellow',
  },
});

export default App;
