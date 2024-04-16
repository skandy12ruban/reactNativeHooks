// ReducerExample.js
import React, {useReducer} from 'react';
import {View, Text, Button} from 'react-native';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'increment'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'decrement'})} />
    </View>
  );
};

export default ReducerExample;
