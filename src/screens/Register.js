import React, { Component } from 'react'
import { Text,StatusBar, View ,Image, Platform, StyleSheet} from 'react-native'
import { NavigationActions } from 'react-navigation';

import {images, colors, constants, fonts} from '@config';
import {FloatingInput} from '@components/TextInputs';
import {Button, TextButton} from '@components/Buttons';
import {moderateScale,scale, verticalScale } from 'react-native-size-matters';
import {HeaderTitle} from '@components/Views';


export default class Register extends Component {

  static navigationOptions = {
    headerTitle: <HeaderTitle 
                    textColor={colors.pink} 
                    title='Create an Account' 
                  />,
  }

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
    };

     this.emailRef = this.updateRef.bind(this, 'email');
      this.passwordRef = this.updateRef.bind(this, 'password');

    //this.handleChange = this.handleChange.bind(this);
  }

  navigateAfterFinish= (screen) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: screen })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
  
  onSubmit = () => function(){
    
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  handleChange = (text) =>{
    ['email', 'password']
        .forEach((name) => {
          let value = this[name].value();

          this.setState({[name]:value})
        });
  }

  render() {
    let { phone } = this.state;
    const barColor = Platform.OS === 'ios' ? 'dark-content' : 'dark-content';
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <StatusBar
            backgroundColor={'white'}
            barStyle={barColor}
            translucent={false}
          />

          <Image
            style={{position:'absolute', bottom: 80, left:80}}
            resizeMode='stretch'
            source = {images.zeplinImage}
          />
          <Image
            style={{position:'absolute', bottom: 0, width:'100%', height:80}}
            resizeMode='stretch'
            source = {images.cityImage}
          />
        

      <Text style={{color:colors.solidGray, fontFamily:fonts.avenirHeavy, fontSize:constants.fontSize.medium, marginLeft:27,marginRight:27, marginBottom:24, marginTop:20}}>
         Hi, welcome. Register to Fragile to <Text style={{color:colors.pink}}>send your package</Text> easily and cheap or <Text style={{color:colors.pink}}>earn money</Text> beside your travel.
      </Text>

      <View style={{marginTop:moderateScale(10), marginLeft:moderateScale(15), marginRight:moderateScale(15)}}>
      <FloatingInput
          ref={this.emailRef}
          label="EMAIL"
          autoCapitalize='none'
          accentColor={colors.pink}
          value={this.state.email}
          onChangeText = {(text) => this.setState({email:text})}
          //onChangeText = {this.handleChange}
        />
        <FloatingInput
          ref={this.passwordRef}
          label="PASSWORD"
          autoCapitalize='none'
          passwordToggle={true}
          accentColor={colors.pink}
          value={this.state.password}
          onChangeText = {(text) => this.setState({password:text})}
          //onChangeText = {this.handleChange}
        />

      </View>

        <View>

         <Button
            style={{marginLeft:scale(60),marginRight:scale(60), marginTop:verticalScale(55), marginBottom:verticalScale(30),padding:moderateScale(15)}}
            text='Register'
            radius={moderateScale(50)}
            disabled={true}
            onPress={this.onSubmit}
            textSize={constants.fontSize.medium}
            elevation={10}
          />


          <TextButton style={[styles.textFormat,{color:colors.solidGray, textAlign:'center'}]} text="I already have an account" onPress={() => this.props.navigation.navigate('LoginScreen')}/>
        </View>
      


    </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButton:{
    padding:20,
    ...Platform.select({
      ios:{
        marginTop:20
      },
      android:{
        marginTop:20
      }
    })
  },
  textFormat:{
    flexDirection:'row',
    color:colors.green,
    fontSize:constants.fontSize.medium,
    textAlign:'right',
    padding:10,
    fontFamily:fonts.avenirMedium
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