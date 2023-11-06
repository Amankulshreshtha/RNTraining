import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
export default function HomeScreen({route}) {
  return (
    <View style={styles.main}>
      <Text style={styles.name_text}>User Name</Text>
      <Text style={styles.name}> {route.params.paramkey1}</Text>
      <Text style={styles.name_Email}>User Email</Text>
      <Text style={styles.Email}> {route.params.paramkey2}</Text>
      <Text style={styles.name_mobile}>User Mobile</Text>
      <Text style={styles.mobile}> {route.params.paramkey3}</Text>
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
});
