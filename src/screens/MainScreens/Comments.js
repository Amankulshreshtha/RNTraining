import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        'https://dummyapi.io/data/v1/comment?export=1',
        {
          headers: {
            'app-id': '659d663b3089b3d68c223c8d',
          },
        },
      );

      console.log('Response data:', response.data);

      setComments(response.data.data); // Set all comments directly
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // console.log('Comments:', comments);

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.commentContainer}>
            <Text
              styles={
                styles.nameofComentators
              }>{`${item.owner.firstName} ${item.owner.lastName}: ${item.message}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
    marginVertical: 5,
  },
  nameofComentators: {
    fontSize: 'bold',
  },
});

export default Comments;
