import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TextInput, Image, Platform} from 'react-native'
import {CitySelectItem} from '@components/ListAdapters'
import {colors, fonts, dummy, constants, images} from '@config/'
import {ImageButton} from '@components/Buttons'
import {moderateScale, verticalScale} from 'react-native-size-matters'

export default class CitySelect extends Component {

    constructor() { 
        super();

        this.state = {
            loading: false,
            dataSource: dummy.city,
            error: null
        };
    }



    searchFilterFunction = text => {    
        const newData = dummy.city.filter(item => {      
          const itemData = `${item.city.toUpperCase()}   
          ${item.airport.toUpperCase()}`;
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ dataSource: newData });  
      };

    render() {

        const {navigation} = this.props;

        const closeStyle = Platform.OS === 'android' ? {top:0} : {top:0}

        return (
            <View style={styles.container}>
                
                <View style={{flexDirection:"row", padding:30, justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={styles.textStyle}>
                         Where to send? 
                    </Text>
                    <ImageButton 
                        imageStyle={{paddingBottom:10}}
                        style={closeStyle}
                        source={images.closeIcon}
                        onPress={this._onPressButton}
                    />
                </View>
                <View
                style={{flexDirection:'row', backgroundColor:'green', alignItems:'center'}}>
                  
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for city..."
                    onChangeText={text => this.searchFilterFunction(text)}
                    autoCorrect={false}
                 />
                
                <Image 
                        style={{position:'absolute', right:0,margin:20, marginRight:10, width:30} }
                        resizeMode='contain'
                        source={images.arrowSearchGreen}
                    />
                    
                </View>
               

                <View
                    style={{padding:20}}
                >
                <FlatList
                    style={{height:"100%"}}
                    data={this.state.dataSource}
                    renderItem = {({item}) => <CitySelectItem city={item.city} airport ={item.airport} />}
                    keyExtractor={(item, index) => index.toString()}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:15,
        backgroundColor:'white',
    },
    textInput:{
        width:'100%',
        backgroundColor:'#f0f0f0',
        height:verticalScale(45),
        color:colors.pink,
        fontFamily:fonts.avenirHeavy,
        paddingLeft:30,
        paddingRight:30,
        fontSize:constants.fontSize.large
    },
    textStyle:{
        fontFamily:fonts.avenirHeavy,
        fontSize:constants.fontSize.large,
        includeFontPadding:false,
        color:colors.green
    }
}) 
