import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, StatusBar, TextInput } from 'react-native'
import { auth } from '../firebase'
import { Linking } from 'react-native';
import { useState } from 'react'

const BMICalculatorScreen = () => {
    const navigation = useNavigation()

    const _SignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message)) 
    }

    const _MoveToHome = () => {
            navigation.navigate("Home")
    }

    const _MoveToChatScreen = () => {
            navigation.replace("Chat")
    }

    const _MoveToEPrescriptionScreen = () => {
        navigation.replace("EPrescription")
    }

    const _MoveToDictionary = () => {
        navigation.replace("Dictionary")
    }

    // define necessary constant variables - most important will be weight and height
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescription] = useState('')

    //implement formula for BMI 
    const calculateBMI = () => {
        const bmi = weight / ((height /100) * (height/100))
        setBmi(bmi.toFixed(1))
        // if functions - based on input from user
        if (bmi < 18.5){
            setDescription('Underweight')
        }
        else if (bmi >= 18.5 && bmi <= 24.9){
            setDescription('Normal')
        } 
        else if (bmi >=25 && bmi <= 29.9){
            setDescription('Overweight')
        }
        else if (bmi >= 30){
            setDescription('Obese')
        }
    }

    return (
        <View style={styles.container}>
           {/*<Text>Email: {auth.currentUser?.email} </Text>  */}
          {/* add images here */}
          <Image source={require('./media/diabeticare-blue.png')}
            style={{width: 430, height: 120, top: 0, left: -10, position: 'absolute'}}
             /> 

            <Image source={require('./media/diabeticare-logo2.png')}
            style={{width: 140, height: 50, top: 40, left: 130, position: 'absolute'}}
             /> 

            <Image source={require('./media/logOffButton.png')}
            style={{width: 46, height: 49, top: 58, left: 350, position: 'absolute'}}
             />

            <Image source={require('./media/diabeticare-blue.png')}
            style={{width: 430, height: 90, top: 808, left: -10, position: 'absolute'}}
             />

            <Image source={require('./media/homeIcon.png')}
            style={{width: 50, height: 55, top: 55, left: 15, position: 'absolute'}}
             />

            <TouchableOpacity
            onPress={() => Linking.openURL('https://www.nhs.uk/contact-us/')} > 
            <Image source={require('./media/helpIcon2.png')}
            style={{width: 46, height: 51, top: -313, left: 85, position: 'absolute'}}
             />
            </TouchableOpacity>

            <Image source={require('./media/navigationSeperator.png')}
            style={{width: 10, height: 70, top: 815, left: 95, position: 'absolute'}}
             />
            <Image source={require('./media/messageIcon.png')}
            style={{width: 42, height: 55, top: 822, left: 30, position: 'absolute'}}
             />
            <Image source={require('./media/navigationSeperator.png')}
            style={{width: 10, height: 70, top: 815, left: 210, position: 'absolute'}}
             />
            <Image source={require('./media/ePrescriptionIcon.png')}
            style={{width: 72, height: 55, top: 820, left: 120, position: 'absolute'}}
             />

            <Image source={require('./media/navigationSeperator.png')}
            style={{width: 10, height: 70, top: 815, left: 315, position: 'absolute'}}
             />

            <Image source={require('./media/bmiCalculatorIcon.png')}
            style={{width: 78, height: 55, top: 822, left: 230, position: 'absolute'}}
             />

            <Image source={require('./media/dictionaryIcon.png')}
            style={{width: 55, height: 55, top: 823, left: 335, position: 'absolute'}}
             />

            <Text style={styles.buttonText10} onPress = {_MoveToChatScreen}></Text> 

           <TouchableOpacity
            style={styles.button}
            >
            
            <Text style={styles.buttonText3} onPress={_MoveToHome}></Text>
            <Text style={styles.buttonText11} onPress={_MoveToEPrescriptionScreen}></Text>
            <Text style={styles.buttonText33} onPress={_SignOut}></Text>
            <Text style={styles.buttonText333} onPress={_MoveToDictionary}></Text>
            </TouchableOpacity>


            <TouchableOpacity>
            <Text style={styles.infoText}>BMI Calculator</Text> 
            </TouchableOpacity>

            <TextInput 
            style={styles.input63}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            placeholder="Weight in kg"
            keyboardType='numeric'
            />

            <TextInput 
            style={styles.input633}
            value={height}
            onChangeText={(text) => setHeight(text)}
            placeholder="Height in cm"
            keyboardType='numeric'
            />  

            <TouchableOpacity
            style={styles.button46}
            onPress={calculateBMI}
            >
            <Text style={styles.buttonText46}>Calculate</Text>
            </TouchableOpacity>

            <View style={styles.resultView}>
            <Text style={styles.result}>{bmi}</Text>
            <Text style={styles.result2}>{description}</Text>

            <Text style = {styles.newsText_1}>What is a BMI Calculator? {'\n'}{'\n'}BMI is a measurement of a person's leanness or corpulence
            {'\n'}based on their height and weight, and is intended to quantify {'\n'}
            tissue mass. It is widely used as a general indicator of {'\n'}
            whether a person has a healthy body weight for their height. {'\n'}
            Specifically, the value obtained from the calculation of BMI is {'\n'}
            used to categorise whether a person is underweight, normal {'\n'}
            weight, overweight, or obese depending on what range the {'\n'}
            value falls between. The World Health Organization's (WHO) {'\n'}recommended body weight based on BMI values for adults{'\n'}
            are as follows: {'\n'}{'\n'}
            • Below 18 = Underweight {'\n'}
            • Between 18.5 and 25 = Normal{'\n'}
            • Between 25 and 30 = Overweight{'\n'}
            • Above 30 = Obese</Text>
            </View>

        </View>
        
    )
    
}

export default BMICalculatorScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {
        width: 60,
        height: 50,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        marginTop: -500,
        top: 505,
        left: 330,
    }, 

    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
    buttonText: {
        color: 'black',
        fontWeight: '700',
         fontSize: 16,
        top: 100,
        fontSize: 16,
        fontWeight: '900',
    },

    buttonText2: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        top: 150,
        color: 'black',

        },
        buttonText3: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: -312,
        top: 115,
        },

        buttonText33: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: 5,
        top: -5,
        },

    buttonText333: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: 0,
        top: 730,
        padding: 10,
        },

    buttonText10: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        top: 450,
        left: -150,
        padding: 20,
        width: '15%',
        height: '8%',
        },

    buttonText5: {
        color: 'white',
        justifyContent: 'center',
        paddingHorizontal: 130,
        alignItems: 'center',
        backgroundColor: '#007dff',
        width: '80%',
        padding: 15,
        borderRadius: 25,
        fontSize: 16,
        fontWeight: '900',
        overflow: 'hidden',
        },

    infoText: {
        fontSize: 40,
        fontWeight: 'bold',
        top: -309,
        left: -195,
        justifyContent: 'center',
        position: 'absolute',
        },

    infoText2: {
        fontSize: 25,
        fontWeight: 'bold',
        top: -277,
        left: -195,
        justifyContent: 'center',
        position: 'absolute',
        },

    infoText3: {
        fontSize: 25,
        top: -277,
        left: -120,
        justifyContent: 'center',
        position: 'absolute',
        },

    buttonText11: {
        fontWeight: '700',
        fontSize: 16,
        top: 850,
        left: -205,
        padding: 120,
        width: '125%',
        height: '40%',
        padding: 30,
        },


    input63: {
        height: 55,
        top: 480,
        width: 350,
        margin: 15,
        borderWidth: 1/2,
        padding:10,
        borderRadius: 5,
        backgroundColor: '#cde0c9',
        fontSize:18,
        position: 'absolute'
    },

    input633: {
        height: 55,
        top: 110,
        width: 350,
        margin: 15,
        borderWidth: 1/2,
        padding:10,
        borderRadius: 5,
        backgroundColor: '#cde0c9',
        fontSize:18,
    },

    button46: {
        height: 55,
        width: 350,
        top: 620,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#68b2a0',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    buttonText46: {
        fontSize: 20,
        color: '#fff',
        fontWeight:'bold',
        position: 'absolute'
    },

    resultView: {
        margin: 15,
        position: 'absolute',
        left: 70,
        top: 460
    },

    result: {
        fontSize: 30,
        color: '#2c6975',
        fontWeight:'bold',
        position: 'absolute',
        top: 240,
        left: -50,
    },

    result2: {
        fontSize: 30,
        color: '#2c6975',
        fontWeight:'bold',
        position: 'absolute',
        top: 270,
        left: -50
    },

    newsText_1: {
        position: 'absolute',
        top: -284,
        left: -70,
    },
})
