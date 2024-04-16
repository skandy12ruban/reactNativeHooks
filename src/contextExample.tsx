// ContextExample.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { MyContext } from '../App';

const ContextExample = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <View>
      <Text>Value from Context: {value}</Text>
      <Button title="Update Context" onPress={() => setValue(value + 1)} />
    </View>
  );
};

export default ContextExample;
