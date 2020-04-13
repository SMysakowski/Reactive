import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <Text>root</Text>
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};
