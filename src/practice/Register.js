import {useState} from 'react';

import {View, Text, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

export default function Register({navigation}) {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [mobile_num, setMobile_num] = useState(' ');
  const [checked, setChecked] = useState('');
  // const [Gender, setGender] = useState('');

  const data = [
    {lable: 'Rudrapur', value: 1},
    {lable: 'mohali', value: 2},
    {lable: 'Delhi', value: 3},
    {lable: 'Haldwani', value: 4},
  ];
  return (
    <View style={styles.main}>
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

      <View>
        <Dropdown
          style={styles.drop}
          selectedTextStyle={{color: 'black'}}
          placeholder="DATA"
          inputSearchStyle={{color: 'black'}}
          data={data}
          labelField="label"
          valueField="value"
        />
      </View>

      <View style={styles.Gender}>
        <Text style={styles.textGen}> Gender: </Text>
        <View style={styles.Genderr}>
          <RadioButton
            value={checked}
            status={checked === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Male')}
          />
          <Text style={styles.textGn}> Male</Text>
          <View style={styles.genredio}>
            <RadioButton
              value="Female"
              status={checked === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Female')}
            />
            <Text style={styles.textfemail}>Female</Text>
          </View>
          <View style={styles.genredio}>
            <RadioButton
              value="Other"
              status={checked === 'Other' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Other')}
            />
            <Text style={styles.textfemail}>Other</Text>
          </View>
        </View>
      </View>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            paramkey1: name,
            paramkey2: email,
            paramkey3: mobile_num,
            paramkey4: checked,
          })
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  Name: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 3,
    margin: 10,
    padding: 10,
  },
  EMAIL: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 3,
    margin: 10,
    padding: 10,
  },
  Mobile: {
    backgroundColor: 'lightgrey',
    width: '97%',
    borderRadius: 20,
    borderColor: 'red',
    borderWidth: 3,
    margin: 10,
    padding: 10,
  },
  main: {
    justifyContent: 'center',
    // flex: 0.5,
  },
  Gender: {
    flexDirection: 'row',
  },
  Genderr: {
    flexDirection: 'row',
  },
  genredio: {
    flexDirection: 'row',
  },
});
