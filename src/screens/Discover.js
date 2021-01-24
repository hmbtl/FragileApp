import React, { Component } from 'react'
import { ImageBackground, StyleSheet,Platform,Image, View ,Text,Dimensions} from 'react-native'
import {images, colors, constants, fonts} from '@config';
import {scale, verticalScale,moderateScale } from 'react-native-size-matters';

import {CardView} from '@components/Views';
import {Button} from '@components/Buttons';

export default class Discover extends Component {
    static navigationOptions = {
        header: null
    }

    render() {

        const imageHeight = (Dimensions.get('window').height * 2)/ 8 + 80;


        return (
        <View style={styles.container}>
            <Image
                source={images.homeBackImage}
                style={{ position: 'absolute', width:'100%',height:imageHeight}}
                resizeMode='stretch'
            >
            </Image> 

            <View style={{flex:2}}>
            <View style={{flex:1,justifyContent:'flex-end', paddingLeft:30,paddingRight:30, paddingBottom:10}}>
              <Text style={{fontFamily:fonts.avenirHeavy,fontSize:constants.fontSize.medium, color:'white'}}>
              Hi there, this is an app that helps people to send their packages with fastest way.
              </Text>
              <Text style={{fontFamily:fonts.avenirHeavy,textDecorationLine:'underline',fontSize:constants.fontSize.medium,color:'white',marginTop:10}}>
                You can be both :
              </Text>
            </View>
            </View>
            <View style={{flex:3}}>
              <CardView
                cornerRadius={5}
                cardElevation={1}
                style={[styles.card,{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', padding:10,marginLeft:15,marginRight:15}]}
              >
                <View style={{margin:10}}>
                  <Image source={images.backpackImage} style={{ height:50, width:40, marginTop:5}} resizeMode='contain'/>
                </View>

                <View style={{flex:1, marginLeft:15, marginRight:20, marginBottom:20}}>
                  <Text style={[styles.textTitleFormat,{color:colors.pink}]}>Traveller</Text>
                  <Text style={styles.textFormat}>
                    You have a flight ticket, and have empty place in your bag. Enter your travel or search from requests.
                  </Text>
                </View>
              </CardView>

               <CardView
                cornerRadius={5}
                cardElevation={1}
                style={[styles.card,{flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', padding:10,marginLeft:15,marginRight:15}]}
              >
                <View style={{margin:10}}>
                  <Image source={images.boxImage} style={{ height:50, width:40, marginTop:5}} resizeMode='contain'/>
                </View>

                <View style={{flex:1, marginLeft:15, marginRight:10, marginBottom:20}}>
                  <Text style={[styles.textTitleFormat,{color:colors.green}]}>Sender</Text>
                  <Text style={styles.textFormat}>
                  You have a package to send to a friend or a place to leave the package ( School registration, company,  girlfriend’s office… ) 
                  </Text>
                </View>
              </CardView>
            </View>

             <View style={{flex:2,justifyContent:'flex-end'}}>

              <Text style={{color:"#4a4a4a",textAlign:'center',marginBottom:0,fontFamily:fonts.avenirMedium,fontSize:constants.fontSize.medium, alignSelf:'center'}}>
                      What do you want to do?
                  </Text>

              <View style={{padding:20, paddingBottom:20,flexDirection:'row',alignItems:'flex-end'}}>
              <Button
                containerStyle={{flex:1, marginRight:moderateScale(10)}}
                style={{padding:moderateScale(15)}}
                textStyle={{fontFamily:fonts.avenirMedium}}
                text='Earn Money'
                allCaps={false}
                radius={50}
                buttonColor={colors.pink}
                textSize={verticalScale(15)}
                elevation={8}
              />

               <Button
                containerStyle={{flex:1, marginLeft:moderateScale(10)}}
                style={{padding:moderateScale(15)}}
                textStyle={{fontFamily:fonts.avenirMedium}}
                text='Send Package'
                allCaps={false}
                radius={50}
                buttonColor={colors.green}
                textSize={verticalScale(15)}
                elevation={8}
               />
              </View>
            
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card:{
      margin:5
    },
    textFormat:{
      color:'#666666',
      fontSize:constants.fontSize.xsmall,
      fontFamily:fonts.avenirMedium
    },
    textTitleFormat:{
      paddingTop:5,
      fontSize:constants.fontSize.medium,
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
