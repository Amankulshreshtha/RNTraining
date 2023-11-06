import {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default function Register({navigation}) {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [mobile_num, setMobile_num] = useState(' ');
  const [gender, setGender] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.Text}> REGISTERTION PAGE</Text>

      <TextInput
        style={styles.Name}
        placeholder="Enter Your name"
        value={name}
        onChangeText={name => setName(name)}
      />
      <TextInput
        style={styles.EMAIL}
        placeholder="Enter Your name"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.Mobile}
        placeholder="Enter Your name"
        value={mobile_num}
        onChangeText={mobile_num => setMobile_num(mobile_num)}
      />

      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            paramkey1: name,
            paramkey2: email,
            paramkey3: mobile_num,
          })
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    alignContent: 'center',
    fontSize: 30,
  },
  Name: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderColor: 'yellow',
    margin: 10,
    padding: 10,
  },
  EMAIL: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderColor: 'yellow',
    margin: 10,
    padding: 10,
  },
  Mobile: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderColor: 'yellow',
    margin: 10,
    padding: 10,
  },
});
