import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

export default function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch_Data();
  }, []);

  const fetch_Data = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const fetchedData = await response.json();
      console.log(fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.error('Error detected while fetching the data');
    }
  };
  return (
    <View>
      <View style={styles.Todos_Screen}>
        <Text style={styles.Todos_Text}>Api's data using Todos</Text>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.renderView}>
              <Text style={styles.renderID}> User ID = {item.id} </Text>
              <Text style={styles.rendertital}> Tital = {item.title}</Text>
              <Text style={styles.renderText}> Body = {item.body}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Todos_Screen: {
    alignSelf: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: 30,
    borderWidth: 4,
    width: '90%',
  },

  Todos_Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  renderView: {
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 30,
    margin: 5,
  },
  renderText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  renderID: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  rendertital: {
    color: 'red',

    fontSize: 20,
  },
});
