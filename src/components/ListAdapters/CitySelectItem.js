import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {colors, fonts, constants} from '@config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  city: {
    fontSize: constants.fontSize.large,
    fontFamily:fonts.avenirHeavy,
    color:colors.dark,
    includeFontPadding:false
  },
  airport: {
    fontSize: constants.fontSize.medium,
    fontFamily:fonts.avenirLight,
    color:colors.dark,
    includeFontPadding:false
  },
});

const CitySelectItem = ({city, airport}) => (
  <View style={styles.container}>
    <Text style={styles.city}>{city}</Text>
    <Text style={styles.airport}>{airport}</Text>
  </View>
);

export default CitySelectItem;