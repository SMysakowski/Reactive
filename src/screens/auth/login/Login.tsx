import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({ navigation }: any) => (
  <View style={styles.root}>
    <Text>Login Screen</Text>
    <Button title="Login" onPress={() => navigation.navigate('Home')} />
  </View>
);
