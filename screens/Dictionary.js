import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Image, Button, StatusBar, FlatList, TextInput } from 'react-native'
import { auth } from '../firebase'
import { Linking } from 'react-native';

const ChatScreen = () => {
    const navigation = useNavigation()
     // set the useful state variables
    const [refinedData, setrefinedData] = useState([]);
    const [primeData, setprimeData] = useState([]);
    const [search, setsearch] = useState('');

    // initialise the useEffect hook below
    useEffect(() => {
    fetchWords();
    return () => {       
    }
    }, [])

    //Network request to fetch wordslist api
    const fetchWords = () => {
        const apiPATH = 'file:///Users/borancek/Desktop/Diabeticare[FINAL]/diabeticareV1.2/screens/wordsList.json';
        fetch(apiPATH)
        .then((response) => response.json())
        .then((responseJson) => {
        // refined data = sorted data
        // prime data = the data needed which the user asks for
        setrefinedData(responseJson);
        setprimeData(responseJson);
        })
    }

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

    const _MoveToEPrescriptionScreen = () => {
        navigation.replace("EPrescription")
    }

    const _MoveToChatScreen = () => {
        navigation.replace("Chat")
    }

    const _MoveToBMICalculatorScreen = () => {
        navigation.replace("BMICalculator")
    }
    
    const searchFilter = (user_input) => {
        // note: each time a letter is inputted, compare the database and output matching results
        if (user_input) {
            const newData = primeData.filter((item) => {
            // ensure all words are uppercased to make search easier
            const itemData = item.id ? item.id.toUpperCase() : ''.toUpperCase();
            const textData = user_input.toUpperCase();
            return itemData.indexOf(textData) > -1;
            });
            setrefinedData(newData);
            setsearch(user_input);
        } else {
            setrefinedData(primeData);
            setsearch(user_input);
        }
    }


    const ItemView = ({item}) => {
        return (
            <Text style={styles.itemStyle4}>
            {item.id}{':\n'}{item.title.toString()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View
            style = {{height: 10, width: '100%'}}
            />
        )
    } 


    return (
        <View style={styles.container}>
            {/* flatList = easier to manage large data in a scrollable list */}
           <FlatList style={styles.itemStyle5}
           data = {refinedData}
           ItemSeparatorComponent={ItemSeparatorView}
           keyExtractor={(item, index) => index.toString()}
           renderItem={ItemView}
           />
            <Image source={require('./media/bgWhite.png')}
            style={{width: 430, height: 120, top: 120, left: -10, position: 'absolute'}}
             />

           
           <TouchableOpacity>
            <Text style={styles.infoText}>Dictionary</Text> 
            </TouchableOpacity>


            <TextInput 
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Here"
            onChangeText={(text) => searchFilter(text)}
            />

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
            style={{width: 46, height: 51, top: -840, left: 85, position: 'absolute'}}
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
            <Text style={styles.buttonText11} onPress={_MoveToEPrescriptionScreen}></Text>
            <Text style={styles.buttonText12} onPress={_MoveToChatScreen}></Text>
            <Text style={styles.buttonText13} onPress={_MoveToBMICalculatorScreen}></Text>

            </TouchableOpacity>

        </View> 
    )
}

export default ChatScreen

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
        top: 50,
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
        top: -670,
        left: -100,
        justifyContent: 'center',
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
        top: 790,
        left: -205,
        padding: 120,
        width: '125%',
        height: '40%',
        padding: 30,
        },

    buttonText12: {
        fontWeight: '700',
        fontSize: 16,
        top: 730,
        left: -305,
        padding: 10,
        width: '30%',
        height: '20%',
        padding: 30,
        },

    buttonText13: {
        fontWeight: '700',
        fontSize: 16,
        top: 670,
        left: -90,
        padding: 10,
        width: '30%',
        height: '20%',
        padding: 30,
        },

    itemStyle4: {
        top: 250,
        padding: 10,
        left: -20
        },

    itemStyle5: {
        top: -20,
        padding: 10,
        left: 10
        },

    textInputStyle: {
        height: 40,
        width: 390,
        borderWidth: 1,
        paddingLeft: 5,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white',
        top: -665
        }
})
