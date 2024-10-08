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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import Task16 from './Tasks/task16';
//import Task18 from './Tasks/task18';
//import Task20 from './Tasks/task20';
//import Task21 from './Tasks/task21'
//import Task22 from './Tasks/task22';
//import Task23 from './Tasks/task23';
//import Task24 from './Tasks/task24'
//import Task25 from "./Tasks/task25";
//import Task26 from "./Tasks/task26";
//import Task27 from "./Tasks/task27";
//import Task from "./training/tasktrain";
//import Task36 from "./Tasks/task36"
//import Task28 from "./Tasks/task28"
//import Task29 from "./Tasks/task29";
//import Task30 from "./Tasks/task30"
//import Task31 from "./Tasks/task31";
//import Task32 from "./Tasks/task32";
//import Task33 from "./Tasks/task33";
//import Task37 from "./Tasks/task37";
//import myt1 from "./training/t1";
//import A from "./training/t3";
//import Task42 from "./Tasks/task42";
//import Task from "./training/t9";
import Task34 from './Tasks/task34';
import Task35 from "./Tasks/task35";
import Task38 from "./Tasks/task38";
import Task39 from "./Tasks/task39";
import Task40 from "./Tasks/task40";
import Task41 from "./Tasks/task41";
import Task42 from "./Tasks/task42";
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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
       // <Task16></Task16>
       // <Task17></Task17>
   // <Task18></Task18>
    //<Task19></Task19>
   //<Task20></Task20>
//  <Task21/>
//<Task22></Task22>
//<Task23></Task23>
//<Task24/>
//<Task25/>
//<Task26/>
//<Task27></Task27>
//<Task28></Task28>
//<Task29></Task29>
//<Task36></Task36>
//<Task29></Task29>
//<Task30></Task30>
//<Task29></Task29>
//<Task31></Task31>
//<Task32></Task32>
//<Task33></Task33>
//<Task42/>
//<Task34></Task34>
//<Task35></Task35>
//<Task38/>
//<Task39/>
//<Task40/>
//<Task41/>
<Task42/>
);
}

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
});

export default App;
