// MemoExample.js
import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const doubledCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Doubled Count: {doubledCount}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MemoExample;
