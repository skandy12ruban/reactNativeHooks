// CallbackExample.js
import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const CallbackExample = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default CallbackExample;
