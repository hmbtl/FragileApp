import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

export default class CardView extends Component {
  render() {

    const localStyle = {
        borderRadius:this.props.cornerRadius,
        shadowRadius:this.props.cardElevation
    };

    return (

      <View style={[styles.card, localStyle, this.props.style]}
            onPress={this.props.onPress}
      >
          {this.props.children}
      </View>
    )
  }
}

CardView.propTypes = {
    cardElevation: PropTypes.number,
    cornerRadius: PropTypes.number,
    onPress: PropTypes.func
}
  
CardView.defaultProps = {
    cardElevation: 4,
    cornerRadius: 5
}

const styles = StyleSheet.create({
    container: {
      alignItems:'center'
    },
    card: {
      backgroundColor:'white',
      padding:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      elevation: 1,
      alignItems:'center',
    },
    buttonText:{
      color:'white'
    }
  })
