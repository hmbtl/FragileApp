import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, AppRegistry, ImageBackground} from 'react-native'

import {images, colors, constants, fonts} from '@config';
import {ImageButton, TextButton} from '@components/Buttons';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buttonDisabled: true
    }
  }

  _onPressButton(){
    //Alert.alert('Hello my friend');
  }

  _onPressSendPackage(){
   
  }


  render() {
    return (
      <View>
          <ImageBackground
            source={images.backgroundLogin}
            style={{width: '100%', height: '100%'}}
          > 
          <StatusBar
            backgroundColor={colors.pink}
            barStyle="light-content"
          />
          <View style = {styles.container}>
          <View style={{flex:1, flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-end'}}>
            <TextButton style={[styles.textFormat,{marginTop:5 ,padding:20}]} text='Discover' onPress={this._onPressButton}/>
          </View>
          <View style={styles.buttonContainer}>
          <ImageButton 
            style={{marginBottom:10}}
            source={images.facebookButton}
            onPress={this._onPressButton}
          />
          <ImageButton 
            source={images.twitterButton}
            onPress={this._onPressButton}
          />
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.textFormat}>or</Text>
            <View style={{flex:1,marginTop:10,flexDirection:'row', alignItems:'flex-start',justifyContent:'space-around'}}>
              <TextButton style={styles.textFormat} text='Login with email' onPress={this._onPressButton}/>
              <Text style={styles.textFormat} >/</Text>
              <TextButton style={styles.textFormat} text='Create an account' onPress={this._onPressButton}/>
            </View>
          </View>
          
        </View>

        </ImageBackground>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textFormat:{
    color:'white',
    fontSize:constants.largeText,
    padding:10,
    fontFamily:fonts.avenirRoman
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  bottomTextContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  button: {
    margin:50,
    width:200
  }
})

AppRegistry.registerComponent("App",() => App);
