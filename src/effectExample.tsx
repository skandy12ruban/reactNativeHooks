// EffectExample.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component updated");
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default EffectExample;
