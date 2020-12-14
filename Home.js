import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Home() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const capitalize = (inputString) => {
    const inputStringAsciiCode = [];
    inputString = inputString.split('');

    inputString.map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        inputStringAsciiCode.push(code - 32);
      } else {
        inputStringAsciiCode.push(code);
      }
    });

    setResult(String.fromCharCode(...inputStringAsciiCode));
  };

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Capitalize</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setWord(text)}
            placeholder="Enter a word to capitalize"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
          <Button title="Enter" onPress={() => capitalize(word)} />
        </View>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
  },
  title: {
    color: '#9657e7',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: '#9657e7',
    borderWidth: 3,
    height: 50,
    width: '80%',
    borderRadius: 30,
    marginTop: 30,
  },
  input: {
    marginLeft: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  result: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  resultText: {
    fontSize: 35,
    color: 'red',
  },
});
