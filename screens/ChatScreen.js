import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity, Image, StatusBar } from 'react-native'
import { auth } from '../firebase'
import { Linking } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation()

  // define function to add new messages to already existing message list to create a chat history
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
  return (
    // render send button
    <Send {...props}>
      <View style={{top: 0}}>
        <MaterialCommunityIcons
          // send button customisation
          name="send-circle"
          style={{marginBottom: 5, marginRight: 5 }}
          size={32}
          color="#2e64e5"
        />
      <Image source={require('./media/diabeticare-blue.png')}
      style={{width: 430, height: 120, top: -860, left: -390, position: 'absolute'}}
      /> 

      <Image source={require('./media/diabeticare-logo2.png')}
      style={{width: 140, height: 80, left: -249.5, top: -835, position: 'absolute'}}
      /> 

      <Image source={require('./media/logOffButton.png')}
      style={{width: 45, height: 50, left: -20, top: -800, position: 'absolute'}}
      />

      <Image source={require('./media/homeIcon.png')}
      style={{width: 50, height: 55, top: -800, left: -360, position: 'absolute'}}
      />

      <TouchableOpacity
      onPress={() => Linking.openURL('https://www.nhs.uk/contact-us/')} > 
      <Image source={require('./media/helpIcon2.png')}
      style={{width: 46, height: 51, top: -837.5, left: -75, position: 'absolute'}}
       />
      </TouchableOpacity>

      <Text style={styles.buttonText3} onPress={_MoveToHome}></Text>
      <Text style={styles.buttonText33} onPress={_SignOut}></Text>
      </View>
    </Send>
    );
  };


  const renderBubble = (props) => {
    // render sent messages design
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          //background of the already sent chat
          // blue and white = best visually
          right: {
            backgroundColor: '#2e64e5',  
          },
        }}
        // render already sent chat
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

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

const _MoveToNotesScreen = () => {
    navigation.replace("Notes")
}

const _MoveToBMICalculatorScreen = () => {
    navigation.replace("BMICalculator")
}

const _MoveToDictionary = () => {
    navigation.replace("Dictionary")
}

  return (
    //render whole chat on screen - wont work without it
    //give user default id of 1 - distinguishes patient and gp
    <GiftedChat
      style={{marginBottom: 0, marginRight: 0}}
      alwaysShowSend
      renderBubble={renderBubble}
      user={{
        _id: 1,
      }}
      renderSend={renderSend}
      messages={messages}
      onSend={(messages) => onSend(messages)}
    />   
  )
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonText3: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: -353.9,
        top: -800,
        position: 'absolute',
        },

    buttonText33: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        padding: 15,
        width: '100%',
        height: '120%',
        left: -15,
        top: -800,
        position: 'absolute',
        },
});
