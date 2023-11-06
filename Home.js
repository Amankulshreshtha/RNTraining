import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({route}) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.name_text}>User Name</Text>
        <Text style={styles.name}> {route.params.paramkey1}</Text>
        <Text style={styles.name_Email}>User Email</Text>
        <Text style={styles.Email}> {route.params.paramkey2}</Text>
        <Text style={styles.name_mobile}>User Mobile</Text>
        <Text style={styles.mobile}> {route.params.paramkey3}</Text>
        <Text style={styles.Gender_text}>Gender</Text>
        <Text style={styles.Gender}> {route.params.paramkey4}</Text>
      </View>
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    padding: 10,
  },

  name_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  name: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    // borderColor: 'red'
    borderWidth: 3,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
  name_Email: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Email: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
  mobile: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
  name_mobile: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Gender_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  Gender: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
});
