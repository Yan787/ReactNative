import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>127317</Text>
      <Text style={styles.testText}>127317</Text>
      <Text style={styles.testText}>127317</Text>
      <StatusBar style="auto" />
      <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText: {
    color: "red",
    fontSize: 100
  }
});
