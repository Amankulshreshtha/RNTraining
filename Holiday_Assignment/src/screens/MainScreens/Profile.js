import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileData } from '../../redux/actions/actions';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userReducer.profile);
  const registerUserData = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(ProfileData());
  }, []);

  const renderPosts = ({ item }) => (
    <View style={styles.postContainer}>
      {item.image && <Image source={{ uri: item.image }} style={styles.box} />}
    </View>
  );

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.userContainer}>
        <Image style={styles.img} source={{ uri: userProfile?.data?.owner.picture }} />
        <Text style={styles.userName}>
          {userProfile?.data?.owner.firstName} {userProfile?.data?.owner.lastName}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => {}} style={{ marginVertical: 10 }}>
          <Text style={styles.btnTxt}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>{registerUserData?.length} Posts</Text>
      </View>

      <View style={styles.hLine}></View>

      <Text style={styles.sectionTitle}>Posts</Text>

      <FlatList
        data={registerUserData}
        keyExtractor={(post) => post.id}
        renderItem={renderPosts}
        style={styles.boxContainer}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  userContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  userName: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#000000',
  },
  btnContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#1C6758',
  },
  btnTxt: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  statsContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  statsText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#000000',
  },
  hLine: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey.+',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#000000',
  },
  boxContainer: {
    marginTop: 10,
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    height: 100,
    width: '35%',
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  logoutButton: {
    backgroundColor: '#1C6758',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
