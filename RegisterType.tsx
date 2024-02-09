import React from 'react';
import {useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import SplashScreen from 'react-native-splash-screen';

interface FormValues {
  name: string;
  email: string;
  mobile_num: string;
  gender: string;
}

const RegisterType: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .matches(/^[a-zA-Z\s]{2,40}$/, 'Invalid Name'),

    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .matches(
        /^[a-z A-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid email format',
      ),

    mobile_num: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Invalid Mobile Number'),

    gender: Yup.string()
      .required('Gender is required')
      .min(2, 'Gender is too short')
      .max(20, 'Gender is too long'),
  });

  const initialValues: FormValues = {
    name: '',
    email: '',
    mobile_num: '',
    gender: '',
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        // Handle form submission logic here
        console.log('Form submitted:', values);
      }}
      validationSchema={validationSchema}>
      {formik => (
        <View style={styles.main}>
          <Text style={styles.Text}>Formik-Page</Text>
          <TextInput
            style={styles.Name}
            placeholder="Enter Your name"
            value={formik.values.name}
            onChangeText={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <Text style={styles.errorText}>{formik.errors.name}</Text>
          )}
          <TextInput
            style={styles.EMAIL}
            placeholder="Enter Your email"
            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <Text style={styles.errorText}>{formik.errors.email}</Text>
          )}
          <TextInput
            style={styles.Mobile}
            placeholder="Enter Your mobile number"
            value={formik.values.mobile_num}
            onChangeText={formik.handleChange('mobile_num')}
            onBlur={formik.handleBlur('mobile_num')}
          />
          {formik.touched.mobile_num && formik.errors.mobile_num && (
            <Text style={styles.errorText}>{formik.errors.mobile_num}</Text>
          )}
          <View style={styles.Gender}>
            <Text style={styles.textGen}>Gender: </Text>
            <View style={styles.Genderr}>
              <RadioButton
                value={formik.values.gender}
                status={
                  formik.values.gender === 'Male' ? 'checked' : 'unchecked'
                }
                onPress={() => formik.handleChange('gender')('Male')}
              />
              <Text style={styles.textGn}>Male</Text>
              <View style={styles.genredio}>
                <RadioButton
                  value="Female"
                  status={
                    formik.values.gender === 'Female' ? 'checked' : 'unchecked'
                  }
                  onPress={() => formik.handleChange('gender')('Female')}
                />
                <Text style={styles.textfemail}>Female</Text>
              </View>
              <View style={styles.genredio}>
                <RadioButton
                  value="Other"
                  status={
                    formik.values.gender === 'Other' ? 'checked' : 'unchecked'
                  }
                  onPress={() => formik.handleChange('gender')('Other')}
                />
                <Text style={styles.textfemail}>Other</Text>
              </View>
            </View>
          </View>
          {formik.touched.gender && formik.errors.gender && (
            <Text style={styles.errorText}>{formik.errors.gender}</Text>
          )}

          {/* <Button title="Register" onPress ={formik.handleSubmit} />s */}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
  },
  Text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
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
  Gender: {
    flexDirection: 'row',
  },
  Genderr: {
    flexDirection: 'row',
  },
  genredio: {
    flexDirection: 'row',
  },
  textGen: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textGn: {
    fontSize: 16,
    marginVertical: 10,
  },
  textfemail: {
    fontSize: 16,
    marginVertical: 10,
  },
  errorText: {
    color: 'blue',
    fontSize: 12,
  },
});

export default RegisterType;
