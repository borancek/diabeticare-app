import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, StatusBar, TouchableHighlight } from 'react-native'
import { auth } from '../firebase'
import { Linking } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react'

const HomeScreen = () => {
    // ensure user is authenticated before moving to home page, extra layer of security
    auth
    const navigation = useNavigation()
    
    // handle all the page navigations
    const _SignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
    }

    const _MoveToChatScreen = () => {
            navigation.replace("Chat")
    }

    const _MoveToEPrescriptionScreen = () => {
        navigation.replace("EPrescription")
    }

    const _MoveToBMICalculatorScreen = () => {
        navigation.replace("BMICalculator")
    }

    const _MoveToDictionary = () => {
        navigation.replace("Dictionary")
    }

    // state variables for challenges of the day
    const [isChecked_1, setChecked_1] = useState(Boolean)
    const [isChecked_2, setChecked_2] = useState(Boolean)
    const [isChecked_3, setChecked_3] = useState(Boolean)

    return (
    <View style={styles.container}>
    <Text style = {styles.latestNewsText}>Latest News</Text>


    <Text style = {styles.pageDivider}>___________________________</Text>
    <Text style = {styles.challengesText}>Challenges of the day:</Text>
    <Text style = {styles.challenge_1}>• Include at least 2 of broccoli, carrots, greens, {'\n'} peppers, 
    and tomatoes in your main meal today</Text>
    <Text style = {styles.challenge_2}>• Have at least 3 fruits today out of oranges, {'\n'}
    melon, berries, apples, 
    bannanas, and grapes </Text>
    <Text style = {styles.challenge_3}>• Challenge yourself to walk 10,000 steps today. {'\n'}
    Get creative with ways to add more steps to your{'\n'} day, like taking the stairs instead of the elevator</Text>
           
    {/* value starts off with 'not checked' by default, once pressed, 'setChecked' should = true */}       
    <Checkbox value = {isChecked_1} onValueChange={setChecked_1} style={styles.checkbox_1}  />
    <Checkbox value = {isChecked_2} onValueChange={setChecked_2} style={styles.checkbox_2} />
    <Checkbox value = {isChecked_3} onValueChange={setChecked_3} style={styles.checkbox_3} />
 
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
    style={{width: 40, height: 55, top: -286, left: 85, position: 'absolute'}}
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

    <TouchableHighlight 
    onPress={() => Linking.openURL('https://www.bbc.co.uk/news/uk-england-cambridgeshire-64318194')}>

    <Image 
    source={{uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/221D/production/_128333780_artificalpancreascambsuni.jpg.webp'}} 
    style={styles.newsImage1} />
    </TouchableHighlight>

    <Text style = {styles.newsText_1}>Cambridge University researchers {'\n'}trial artificial pancreas in {'\n'}type 2 diabetics</Text>

    <TouchableHighlight 
    onPress={() => Linking.openURL('https://www.bbc.co.uk/news/uk-england-hampshire-61864181')}>
    <Image 
    source={{uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D16E/production/_125541635_mediaitem125541634.jpg.webp'}} 
    style={styles.newsImage2} />    
    </TouchableHighlight>

    <Text style = {styles.newsText_2}>Portsmouth Uni trial to help {'\n'}diabetics lose weight in their sleep</Text>

    <TouchableHighlight 
    onPress={() => Linking.openURL('https://www.bbc.co.uk/news/health-60133358')}>
    <Image 
    source={{uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/1434F/production/_123576728_capture.png.webp'}} 
    style={styles.newsImage3} />    
    </TouchableHighlight>

    <Text style = {styles.newsText_3}>Artificial pancreas to revolutionise{'\n'}diabetes care in England</Text>
    
    {/* Configure the navigation below */}
    <Text style={styles.buttonText3} onPress={_MoveToChatScreen}></Text>
    <Text style={styles.buttonText4} onPress={_MoveToEPrescriptionScreen}></Text>
    <Text style={styles.buttonText5} onPress={_MoveToBMICalculatorScreen}></Text>
    <Text style={styles.buttonText6} onPress={_MoveToDictionary}></Text>
            

    <TouchableOpacity
    onPress={_SignOut}
    style={styles.button}
    >
    <Text style={styles.buttonText}></Text>
    </TouchableOpacity>

    <TouchableOpacity>
    <Text style={styles.infoText}>Home</Text> 
    <Text style={styles.infoText2}>Email: </Text>
    <Text style={styles.infoText3}> {auth.currentUser?.email} </Text> 
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
        height: 75,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        marginTop: -485,
        top: 525,
        left: 340,
    }, 

    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    
    buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    width: '70%'
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
    top: 480,
    left: -160,
    padding: 20,
    width: '15%',
    height: '8%',

    
    },
    buttonText4: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        top: 409,
        left: -50,
        padding: 10,
        width: '20%',
        height: '8%',
        padding: 20,
       
    },

    buttonText5: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        top: 340,
        left: 60,
        padding: 10,
        width: '20%',
        height: '8%',
        padding: 20,
        
    },

    buttonText6: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        top: 815,
        left: 330,
        padding: 10,
        width: '20%',
        height: '8%',
        padding: 20,
        position: 'absolute'
    },

    infoText: {
    fontSize: 40,
    fontWeight: 'bold',
    top: -420,
    left: -195,
    justifyContent: 'center',
    position: 'absolute',
    },

    infoText2: {
        fontSize: 25,
        fontWeight: 'bold',
        top: -370,
        left: -193.5,
        justifyContent: 'center',
        position: 'absolute',
        },

        infoText3: {
            fontSize: 25,
            top: -370,
            left: -120,
            justifyContent: 'center',
            position: 'absolute',
            },

    latestNewsText: {
        position: 'absolute',
        fontSize: 35,
        fontWeight: 'bold',
        top: 235,
        
    },

    pageDivider: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 15,
        top: 560,
    },

    challengesText: {
        position: 'absolute',
        fontSize: 25,
        top: 590,
        left: 10,
    },

    challenge_1: {
        position: 'absolute',
        top: 635,
        left: 10
    },

    challenge_2: {
        position: 'absolute',
        top: 685,
        left: 10
    },

    challenge_3: {
        position: 'absolute',
        top: 735,
        left: 10
    },

    checkbox_1: {
        top: 640.5,
        left: 350,
        position: 'absolute'
    },

    checkbox_2: {
        top: 695.5,
        left: 350,
        position: 'absolute'
    },

    checkbox_3: {
        top: 750.5,
        left: 350,
        position: 'absolute'
    },

    newsImage1: {
        position: 'absolute',
        top: -55,
        left: -180,
        height: 80,
        width: 140,
        borderWidth: 1,
        borderColor: 'black'
    }, 
    newsText_1: {
        position: 'absolute',
        top: 285,
        left: 167,
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 15,
        backgroundColor: '#D8CFC4'
    },

    newsImage2: {
        position: 'absolute',
        top: 40,
        left: -180,
        height: 80,
        width: 140,
        borderWidth: 1,
        borderColor: 'black'
    }, 

    newsText_2: {
        position: 'absolute',
        top: 380,
        left: 167,
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 2,
        paddingBottom: 22,
        backgroundColor: '#D8CFC4'
    },

    newsImage3: {
        position: 'absolute',
        top: 135,
        left: -180,
        height: 80,
        width: 140,
        borderWidth: 1,
        borderColor: 'black'
    }, 

    newsText_3: {
        position: 'absolute',
        top: 475,
        left: 167,
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 5,
        paddingBottom: 22,
        backgroundColor: '#D8CFC4'
    },

})
