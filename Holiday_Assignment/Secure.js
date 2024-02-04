import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

const Secure=({navigation})=> {
  const initialValues={uName:'', password:'',confirmPassword:''}

  const validationSchema=yup.object().shape({
    uName:yup
    .string()
    .required('Username is required')
    .min(3,'Username must be at least 3 characters')
    .max(15,'Username must be at least 15 characters'),
    password:yup
    .string()
    .required('Password is required')
    .min(8,'Password must be at least 8 characters long'),
    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password'),null],'Passwords does not match')
    .required('Confirm Password is required')
  });

  const handleSubmit=()=>{
    navigation.navigate('WelcomeSignUp');
    // console.log(values);
}

const handleSignIn=()=>{
  navigation.navigate('SignIn');
}

    return (
      
        <View style={styles.mainContainer}>
            <View style={styles.subContainer1}>
                <Text  style={styles.head1Text}>Select a Username</Text>
                <Text style={styles.head2Text}>Help secure your account</Text>
            </View>
            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({handleChange,handleBlur,handleSubmit,values,errors})=>(
            <View style={{flex:0.8,}}>
            <View style={styles.subContainer2}>
                <Text style={styles.inputText}>Username</Text>
                <TextInput
                    style={styles.textInput1}
                    onChangeText={handleChange('uName')}
                    onBlur={handleBlur('uName')}
                    value={values.uName}
                />
                <Text style={{color:'red',marginBottom:10}}>{errors.uName}</Text>

                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    style={styles.textInput2} 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    />
                    <Text style={{color:'red',marginBottom:10}}>{errors.password}</Text>
                
                <Text style={styles.inputText}>Confirm Password</Text>
                <TextInput 
                style={styles.textInput2}
                onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                />
                <Text style={{color:'red',marginBottom:10}}>{errors.confirmPassword}</Text>
            
            </View>

            <View style={{
               flex: 0.1,
                // alignItems:'center',
                // backgroundColor:'black'
             }}>
               <TouchableOpacity
                 style={styles.btn}
                 onPress={handleSubmit}>
                <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
               </View>
            </View>
             )}
             </Formik>
             
             <View style={{
              flex:0.1,
        alignItems: 'center',
        justifyContent:'center',
        // backgroundColor: 'green',
      }}>
        <Text style={{
          textAlign: 'center',
          fontWeight: '500',
          color: '#000000',
          fontSize: 14
        }}>
          Already have an account?
          <TouchableOpacity style={{
          // alignContent:'center', 
          // backgroundColor:'green',
        }}
        onPress={handleSignIn}> 
        <Text style={{fontWeight:'700',textDecorationLine:'underline',color:'#000000'}}>Sign In</Text>
        </TouchableOpacity>
      </Text>
      </View>
    </View>
  )
}

export default Secure;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
    },

    subContainer1: {
         flex: 0.15,
         justifyContent:'center',
        //  backgroundColor: 'green',
    },

    head1Text: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
        color:'#000000',
    },

    head2Text: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 16,
        color:'#000000',
    },

    subContainer2: {
        flex:0.9,
        // backgroundColor: 'yellow',
    },
    
    inputText: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 14,
        color: '#000000',
        marginBottom:5,
    },
    
    textInput1: {     
        width:'100%',
        // marginBottom:10,
        borderRadius: 10,
        borderColor: '#006175',
        color: '#000000',
        borderWidth:1,
    },

    textInput2: {
         width:'100%',
        // marginBottom:10,
        borderRadius: 10,
        borderColor: 'grey',
        color: '#000000',
        borderWidth:0.2,
        backgroundColor:'#F2F2F2'
    },

     btn: {
    width: "100%",
    height:'100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1C6758',
  },

  btnText: {  
    color: 'white',
    textAlign:'center',
    fontSize: 18,
    fontWeight: '600',
    // backgroundColor: '#1C6758'
  }
})