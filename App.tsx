// App.js
import React, {createContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CallbackExample from './src/callbackExample';
import ContextExample from './src/contextExample';
import EffectExample from './src/effectExample';
import MemoExample from './src/memoExample';
import ReducerExample from './src/reducerExample';
import RefExample from './src/refExample';
import StateExample from './src/stateExample';


export const MyContext = createContext<any>(null);

const App = () => {
  const [appName, setAppName] = useState('hooksExample');

  return (
    <MyContext.Provider value={appName}>
      <ScrollView>
        <Text>useState Example</Text>
        <StateExample />

        <Text>useEffect Example</Text>
        <EffectExample />

        <Text>UseRef Example</Text>
        <RefExample />

        <Text>useContext Example</Text>
        <ContextExample />

        <Text>useReducer Example</Text>
        <ReducerExample />

        <Text>useCallback Example</Text>
        <CallbackExample />

        <Text>useMemo Example</Text>
        <MemoExample />
      </ScrollView>
    </MyContext.Provider>
  );
};

export default App;
