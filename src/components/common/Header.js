import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    //Shadow For iOS
    shadowColor: '000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    //Shadow For Android
    elevation: 5,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export {Header};