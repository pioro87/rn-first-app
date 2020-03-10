import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change Text" onPress={() => setOutputText('The text changed!')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff000',
=======
    backgroundColor: '#fff',
>>>>>>> cd3b316a9eb37e7887e03376b23f051bb5a37e89
    alignItems: 'center',
    justifyContent: 'center',
  },
});
<<<<<<< HEAD
//commit
=======
>>>>>>> cd3b316a9eb37e7887e03376b23f051bb5a37e89
