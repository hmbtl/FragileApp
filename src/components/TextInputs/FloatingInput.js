import React, { PureComponent } from 'react';
import {
  View,
  TextInput,
  Animated,
  Text,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';

import colors from '@config/colors'
import images from '@config/images'
import fonts from '@config/fonts'

export default class FloatingInput extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isFocused: false,
      textColor: colors.solidGray,
      textCanEdit: true,
      showPassword: false,
      errors: this.props.errors
    };
  }
  
  static defaultProps = {
    accentColor : colors.green,
    passwordToggle: false,
    errors: null
  }

  _animatedIsFocused = new Animated.Value(0);


  handleFocus = () => this.setState({ isFocused: true, textColor:this.props.accentColor});
  handleBlur = () => this.setState({ isFocused: false, textColor:colors.solidGray});

  _onClick = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.isFocused !== prevState.isFocused){
      console.log(this.props.label, 'PrevState:',prevState.isFocused,'ThisState:', this.state.isFocused);
      Animated.timing(this._animatedIsFocused, {
        toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
        duration: 100,
      }).start();
    }
  }
  render() {
    const { label, ...props } = this.props;

    let textFontSize = Platform.OS === 'ios' ? 16 : 20
    let labelFontsSize = Platform.OS === 'ios' ? 9 : 12
    let textHintPosition = Platform.OS === 'ios' ? 18 : 20

   

    const labelStyle = {
      position: 'absolute',
      fontFamily: fonts.avenirBook,
      left: 10,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [textHintPosition, 8],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [textFontSize, labelFontsSize],
      }),
      color: colors.solidGray,
    };
    const containerStyle = {
      paddingTop: 10, 
      backgroundColor:'#f0f0f0',
      margin:0,
      borderRadius:4,
      borderBottomWidth: 2,
      borderBottomColor:  this.state.textColor
    };

    const textStyle = { 
      paddingLeft:10,
      paddingBottom:5,
      paddingTop:15,
      fontFamily:fonts.avenirMedium,
      fontSize:textFontSize, 
      color: this.state.textColor
    };

    if (this.props.passwordToggle){
      return (
        <View>
          <Animated.View style={containerStyle}>
              <Animated.Text style={labelStyle}>
               {label}
               </Animated.Text>
  
                    <TextInput
                      {...props}
                      secureTextEntry={!this.state.showPassword}
                      style={textStyle}
                      editable={true}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      blurOnSubmit
                    />
                    <TouchableOpacity
                        onPress={this._onClick}
                        style={{position:'absolute', right:0, top:'50%', paddingRight:10}}>
                        <Image
                          resizeMode='contain'
                          source={(this.state.showPassword) ? images.eyeActive: images.eyeInactive }
                        />
                    </TouchableOpacity>
         
         </Animated.View>
          <Text style={{marginLeft:20, marginTop:3, marginRight:20, marginBottom:3, fontSize:16, color:colors.red}}>{this.state.errors}</Text>
        </View>
       
      );
    } else {
      return (
        <View>
          <Animated.View style={containerStyle}>
              <Animated.Text style={labelStyle}>
               {label}
               </Animated.Text>
  
                    <TextInput
                      {...props}
                      style={textStyle}
                      editable={true}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      blurOnSubmit
                    />
         
         </Animated.View>
         <Text style={{marginLeft:20, marginTop:5, marginRight:20, marginBottom:8, fontSize:16, color:colors.red}}>{this.state.errors}</Text>
        </View>
       
      );
    }

   
  }
}
