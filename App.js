import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const addlista = () => {
    setLista([item, ...lista]);
    setItem('');
  }

  return (
    <View style={styles.container}>
      <Text>Ostoslista</Text>
      <TextInput
      value={item} 
      style={{width: 200, borderColor: 'orange', borderWidth: 1}}
      onChangeText= {item => setItem(item)}
      >
      </TextInput> 
      <Button title= 'Lisää listaan' onPress={addlista} ></Button>
      <FlatList 
      data={lista}
      renderItem={({item}) => <Text>{item}</Text>}></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
