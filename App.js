import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
import * as firebase from 'firebase';

export default class PrimeiroProjeto extends Component{
  constructor (props){

    super(props)
    this.state = {

    }

    const config = {
      apiKey: "AIzaSyAg-EHPGlmqLHst0qshoESZjczit5PNN7U",
      authDomain: "projeto-teste-6171d.firebaseapp.com",
      databaseURL: "https://projeto-teste-6171d.firebaseio.com",
      projectId: "projeto-teste-6171d",
      storageBucket: "projeto-teste-6171d.appspot.com",
      messagingSenderId: "69606961474",
      appId: "1:69606961474:web:201a53b37c71c4757dd8db"
  };


  if (!firebase.apps.length)
  {
    firebase.initializeApp(config);

  }
  else
  {
      firebase.app();
  }  

  
  }

  render(){
    return(
        <View style={styles.container}>
          <Text>,,,</Text>
        </View>
    )
  }




}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    padding:20
  },
  input:{
    borderColor:"#000000",
    borderWidth:1,    
    height:40
  }
});
