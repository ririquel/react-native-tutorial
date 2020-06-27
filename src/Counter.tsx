import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.layout}>
      <Text>{count}</Text>

      <Button title="Reset" onPress={() => setCount(0)} />

      <View style={styles.row}>
        <Button
          color="green"
          title="Aumentar"
          onPress={() => setCount(count + 1)}
        />
        <Button title="Disminuir" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  row: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 5,
    marginTop: '15%',
  },
  button: {},
});
