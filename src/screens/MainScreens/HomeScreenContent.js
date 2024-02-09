import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreenContent = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [commentText, setCommentText] = useState('');

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

        // console.log('Fetched data:', data);

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
      <Text style={styles.ownerText}>{item.owner.firstName} {item.owner.lastName}</Text>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.postImage} />
      )}
       <TouchableOpacity style={styles.commentButton} onPress={() => handleCommentPress(item)}>
      <Icon name="comment" size={20} color="grey" /> 
    </TouchableOpacity>
    </View>
  );

  const handleCommentPress = (post) => {
    setSelectedPost(post);
    setCommentModalVisible(true);
  };

  const handlePostComment = () => {
    // Implement logic to post the comment for selectedPost
    console.log(`Posting comment for post ID: ${selectedPost.id}, Comment: ${commentText}`);
    setCommentModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={renderPost}
      />

      <Modal isVisible={commentModalVisible} animationIn="slideInUp" animationOut="slideOutDown">
        <View style={styles.commentModalContainer}>
          <Text style={styles.commentModalTitle}>Post a Comment</Text>
          <TextInput
            style={styles.commentInput}
            placeholder="Type your comment..."
            multiline
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
          />
          <Button title="Post Comment" onPress={handlePostComment} />
          <Button title="Cancel" onPress={() => setCommentModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  postText: {
    fontSize: 16,
  },
  ownerText: {
    fontSize: 20,
    marginTop: 8,
    color: 'black',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    resizeMode: 'cover',
  },
  commentButton: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  commentButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  commentModalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  commentModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 100,
    marginBottom: 10,
    padding: 10,
  },
});

export default HomeScreenContent;
