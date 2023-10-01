import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image,  } from 'react-native'
import { auth } from '../firebase'
import { Linking } from 'react-native';

// Declare the useful state variables
const LoginScreen = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigation = useNavigation()

// Once user is authenticated, move to homepage
useEffect (() => {
 const terminateAuthCheck = auth.onAuthStateChanged(user => {
     if (user) {
         navigation.replace("Home")
     }
 })
 return terminateAuthCheck
 // when we leave the login screen, its going to terminate the auth check ping 
 // from this listener so that it doesn't keep pinging it when it shouldn't
}, [])

const _Login = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userAuthData => {
        const user = userAuthData.user;
     console.log('Login success with email: ', user.email); //Output seen in terminal
    })
}

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding">
        <Text>{'\n'}</Text>
            
        <View style={styles.inputContainer}>
        <TextInput
        placeholder="Email"
        value={email}
        autoCapitalize = 'none'
        autoCorrect = {false}
        autoComplete='false'
        onChangeText={text => setEmail(text)}
        style={styles.input}
        />

        <TextInput
        placeholder="Password"
        value={password}
        autoComplete='false'
        onChangeText={text => setPassword(text) }
        style={styles.input}
        secureTextEntry
        />

        </View>
            
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_Login} 
        style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
                    
        </TouchableOpacity>
               
        </View>

        {/* add images here */}
        <Image source={require('./media/diabeticare-logo2.png')}
        style={{width: 430, height: 210, top: 0, position: 'absolute'}}
        />
        <Image source={require('./media/diabeticare-blue.png')}
        style={{width: 430, height: 50, top: 200, position: 'absolute'}}
        />
        <Image source={require('./media/login-page-design.png')}
        style={{width: 450, height: 140, top: 756, position: 'absolute'}}
        />
        </KeyboardAvoidingView>
    )

    
}


export default LoginScreen

const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
        
    },
    inputContainer: {
    width: '80%',
    }, 
   
    input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 0.25,
    borderColor: 'grey'
    }, 

    input2: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: 'black'
    }, 

    buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    }, 

    button: {
    backgroundColor: '#007dff',
    width: '145%',
    padding: 15,
    borderRadius: 100,
    alignItems: 'center'
    }, 

    buttonOutline: {
    backgroundColor: 'red',
    marginTop: 55,  
    }, 

    buttonOutline2: {
    backgroundColor: 'black',
    marginTop: 10,  
    }, 

    buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    },

    buttonOutlineText : {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    }, 

})
