import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, StatusBar, TextInput, TouchableHighlight } from 'react-native'
import { auth } from '../firebase'
import { useState } from 'react';
import { Linking } from 'react-native';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { color } from 'react-native-elements/dist/helpers';
import RenderHTML from 'react-native-render-html';

const HomeScreen = () => {
    const navigation = useNavigation()

    const _SignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
    }

    const _MoveToHome = () => {
            navigation.navigate("Home")
    }

    const _MoveToChatScreen = () => {
        navigation.replace("Chat")
    }

    const _MoveToBMICalculatorScreen = () => {
        navigation.replace("BMICalculator")
    }

    const _MoveToDictionary = () => {
        navigation.replace("Dictionary")
    }

    let [name, setName] = useState("");
    
    const html1 = `
    <html>
    <head>
        <title>Prescription</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }
    
            h1 {
                text-align: center;
                font-size: 2.5em;
                margin-bottom: 30px;
                color: #333333;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
    
            .container {
                max-width: 800px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
            }
    
            .patient-info {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 30px;
            }
    
            .patient-info p {
                margin: 0;
                width: 50%;
            }
    
            .patient-info label {
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }
    
            .medication-info {
                margin-bottom: 30px;
            }
    
            .medication-info p {
                margin: 0;
            }
    
            .doctor-info {
                display: flex;
                flex-wrap: wrap;
                margin-top: 30px;
                border-top: 1px solid #cccccc;
                padding-top: 30px;
            }
    
            .doctor-info p {
                margin: 0;
                width: 50%;
            }
    
            .doctor-info label {
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
            }
    
            .doctor-signature {
                float: right;
                margin-top: 30px;
            }
    
            .doctor-signature img {
                max-width: 200px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Prescription</h1>
    
            <div class="patient-info">
                <p>
                    <label for="patient-name">Patient Name:</label>
                    <span id="patient-name">[INSERT PATIENT NAME]</span>
                </p>
                <p>
                    <label for="date">Date:</label>
                    <span id="date">[INSERT DATE]</span>
                </p>
            </div>
    
            <div class="medication-info">
                <p>
                    <label for="medication-name">Medication:</label>
                    <span id="medication-name">[INSERT MEDICATION NAME]</span>
                </p>
                <p>
                    <label for="dosage">Dosage:</label>
                    <span id="dosage">[INSERT DOSAGE]</span>
                </p>
                <p>
                    <label for="frequency">Frequency:</label>
                    <span id="frequency">[INSERT FREQUENCY]</span>
                </p>
                <p>
                    <label for="instructions">Instructions:</label>
                    <span id="instructions">[INSERT INSTRUCTIONS]</span>
                </p>
            </div>
    
            <div class="doctor-info">
                <p>
                    <label for="doctor-name">Doctor Name:</label>
                    <span id="doctor-name">[INSERT DOCTOR NAME]</span>
                </p>
                <p>
                    <label for="clinic-name">Clinic Name
                    </label>
                    <span id="clinic-name">[INSERT CLINIC NAME]</span>
                </p>
                <p>
                    <label for="phone-number">Phone Number:</label>
                    <span id="phone-number">[INSERT PHONE NUMBER]</span>
                </p>
                <p>
                    <label for="email">Email:</label>
                    <span id="email">[INSERT EMAIL]</span>
                </p>
                </div>
</html>
    `;

    let generatePDF1 = async () => {
        const file = await printToFileAsync({
            html: html1,
            base64: false
        });
        await shareAsync(file.uri);
    };

    let generatePDF2 = async () => {
        const file = await printToFileAsync({
            html: html1,
            base64: false
        });
        await shareAsync(file.uri);
    };

    let generatePDF3 = async () => {
        const file = await printToFileAsync({
            html: html1,
            base64: false
        });
        await shareAsync(file.uri);
    };

    return (
        <View style={styles.container}>

        <Image source={require('./media/e-presc.png')}
        style={{width: 360, height: 600, top: 210, left: 25, position: 'absolute'}}
        /> 

        <TouchableHighlight
        style = {{
        position: 'absolute',
        top: 330,
        left: 180,
        height: 36,
        width:140,
        borderRadius:10,
        backgroundColor : "#ADD8E6",
        }}
        > 
        <Button title='Generate PDF' onPress={generatePDF1}/> 

        </TouchableHighlight>

        <TouchableHighlight
        style = {{
        position: 'absolute',
        top: 535,
        left: 180,
        height: 36,
        width:140,
        borderRadius:10,
        backgroundColor : "#ADD8E6",
        }}
        > 
        <Button title='Generate PDF' onPress={generatePDF2}/> 

        </TouchableHighlight>

        <TouchableHighlight
        style = {{
        position: 'absolute',
        top: 750,
        left: 180,
        height: 36,
        width:140,
        borderRadius:10,
        backgroundColor : "#ADD8E6",
        }}
        > 
        <Button title='Generate PDF' onPress={generatePDF3}/> 

        </TouchableHighlight>

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
        style={{width: 46, height: 51, top: -391.5, left: 85, position: 'absolute'}}
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

        <TouchableOpacity
        onPress={_SignOut}
        style={styles.button}
        >
            
        <Text style={styles.buttonText3} onPress={_MoveToHome}></Text>

        <Text style={styles.buttonText33} onPress={_SignOut}></Text>

        <Text style={styles.buttonText22} onPress={_MoveToChatScreen}></Text>

        <Text style={styles.buttonText12} onPress={_MoveToBMICalculatorScreen}></Text>

        <Text style={styles.buttonText122} onPress={_MoveToDictionary}></Text>
        </TouchableOpacity>


        <TouchableOpacity>
        <Text style={styles.infoText}>e-Prescription</Text> 
        </TouchableOpacity>

        </View>
        
    )
    
}

export default HomeScreen


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
        top: 535,
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
        top: 140,
    },

    buttonText33: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: 15,
        top: 55,
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
        top: -315,
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

    buttonText22: {
        fontWeight: '700',
        fontSize: 16,
        top: 785,
        left: -305,
        padding: 120,
        width: '125%',
        height: '40%',
        padding: 30,
    },

    buttonText12: {
        fontWeight: '700',
        fontSize: 16,
        top: 700,
        left: -95,
        padding: 10,
        width: '30%',
        height: '20%',
        padding: 30,
    },

    buttonText122: {
        fontWeight: '700',
        fontSize: 16,
        top: 670,
        left: -0,
        padding: 10,
        width: '30%',
        height: '20%',
        padding: 30,
    },
})
