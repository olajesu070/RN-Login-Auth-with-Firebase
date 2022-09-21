import React, {useState}from 'react';
import type {Node} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { authentication } from './firebase/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const App =() => { 

const [isSignedIn, setIsSignedIn] = useState(false);

//text input
const [email, setEmail] = useState('');
const [Password, setPassword] = useState('');

const signInUser =()=>{
  createUserWithEmailAndPassword(authentication,email,Password)
  .then((re)=>{
    console.log(re);
  })
  .catch((re)=>{
    console.log(re);
  })
} 

  return (
    <View style={styles.mv}>
      <TextInput placeholder='Email' value={email} onChangeText={text=>setEmail(text)}/>
      <TextInput placeholder='Password' value={Password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
      <Button title='Sign in' onPress={signInUser}/>
    </View>
  )
};

const styles = StyleSheet.create({
  mv: {
    marginTop: 170,
    padding: 30,
    
  },
});
export default App;

