/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// 自定义组件
import {
  Cat,
  C1,
  ScrollImage,
  Switch1,
  FlatListBasics
} from './components/index';

// 电影列表
import {
  SampleAppMovies
} from './components/movieList/index'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}

          {/* 电影列表 */}
          {/* <SampleAppMovies /> */}

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Hello World！！！</Text>
              <Text style={styles.sectionDescription}>
                我来组成内容
                {/* <ReloadInstructions /> */}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>直接进行一个班的下！</Text>
            </View>
            <Text style={styles.customText}>直接进行一个移动端军的进！！！</Text>

            {/* cat组件 */}
            <Cat name="Cat Component!!!" />
            {/* switch开关 */}
            <Switch1 />
            {/* loading image */}
            {/* <C1 /> */}
            {/* 滚动条 */}
            {/* <ScrollImage /> */}
            {/* 长列表 */}
            <FlatListBasics />
            {/* <LearnMoreLinks /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: Colors.black,
  },
  customText: {
    marginLeft: 30,
    fontSize: 36,
    fontWeight: '800',
    color: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
