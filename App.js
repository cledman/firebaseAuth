import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
import * as firebase from 'firebase';

export default class PrimeiroProjeto extends Component{
  constructor (props){

    super(props)
    this.state = {
      email:'',
      senha:''

    }

    this.cadastrar=this.cadastrar.bind(this)

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

  cadastrar(){

    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.senha
      ).catch( (error)=>{
        
        switch(error.code){
          case 'auth/weak-password':
            alert("senha tem que ter ao menos 6 caracteres!")
          break
          
          case 'auth/email-already-in-use':
            alert("Este email já tem conta!")
          break
          
          default:
            alert("ocorreu um erro!")
          break  
        }
    
      }  )

  }

  render(){
    return(
        <View style={styles.container}>
          <Text>Email:</Text>

          <TextInput style={styles.input} onChangeText={ (email)=> {
            let state=this.state
            state.email=email.trim()
            this.setState(state)
          } }  />



          <Text>Senha:</Text>          


          <TextInput secureTextEntry={true} style={styles.input} onChangeText={ (senha)=> {
            let state=this.state
            state.senha=senha
            this.setState(state)
          } }  />

          <Button title="cadastrar" onPress={this.cadastrar} />
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
    height:40,
    margin:10
  }
});
