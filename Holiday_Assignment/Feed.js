import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyapi.io/data/v1/post', {
          headers: {
            'Content-Type': 'application/json',
            'app-id': '659d663b3089b3d68c223c8d',
          },
        });

        const data = response.data;

        console.log('Fetched data:', data);

        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchData();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>{item.text}</Text>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.postImage} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Feed Screen</Text>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={renderPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'red',
  },
  postText: {
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    resizeMode: 'cover',
  },
  commentContainer: {
    marginVertical: 8,
    marginLeft: 16,
  },
});

export default Feed;
