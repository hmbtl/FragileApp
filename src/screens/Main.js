import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Platform, ImageBackground} from 'react-native'
import {moderateScale } from 'react-native-size-matters';

import {images, colors, constants, fonts} from '@config';
import {ImageButton, TextButton} from '@components/Buttons';


export default class Main extends Component {

    static navigationOptions = {
        header: null
    }

  constructor(props){
    super(props);
    this.state = {
      buttonDisabled: true
    }
  }

  _onPressButton(){
  }

  _onPressSendPackage(){
   
  }

  render() {
    return (
      <View>
         <StatusBar
            backgroundColor='transparent'
            barStyle="light-content"
            translucent={true}
          />
          <ImageBackground
            source={images.backgroundLogin}
            style={{width: '100%', height: '100%'}}
          > 
          <View style = {styles.container}>
          <View style={{flex:1, flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-end'}}>
            <TextButton style={[styles.textFormat,styles.topButton]} text='Discover' onPress={() => this.props.navigation.navigate('DiscoverScreen')}/>
          </View>
          <View style={styles.buttonContainer}>
          <ImageButton 
            style={{marginBottom:moderateScale(10)}}
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
              <TextButton style={styles.textFormat} text='Login with email' onPress={() => this.props.navigation.navigate('CitySelectModal')}/>
              <Text style={styles.textFormat} >/</Text>
              <TextButton style={styles.textFormat} text='Create an account' onPress={() => this.props.navigation.navigate('RegisterScreen')}/>
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
  topButton:{
    padding:moderateScale(20),
    ...Platform.select({
      ios:{
        marginTop:moderateScale(20)
      },
      android:{
        marginTop:moderateScale(20)
      }
    })
  },
  textFormat:{
    color:'white',
    fontSize:constants.fontSize.medium,
    padding:moderateScale(10),
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
    margin:moderateScale(50),
    width:moderateScale(200)
  }
})
