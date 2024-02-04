import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/v1/';
const API_KEY = '659d663b3089b3d68c223c8d';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments when the component mounts
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}post/${postId}/comment`, {
        headers: {
          'app-id': API_KEY,
        },
      });

      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  return (
    <View style={styles.tabContent}>
      {/* Render comments using FlatList */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text>{item.comment}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
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
});

export default Comments;
