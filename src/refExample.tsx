// RefExample.js
import React, { useRef } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const RefExample = () => {
  const inputRef = useRef<any>(null);

  const focusInput = () => {
    inputRef?.current.focus();
  };

  return (
    <View>
      <TextInput ref={inputRef} />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default RefExample;
