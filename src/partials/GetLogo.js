import {View, Text, Image} from 'react-native';
import React from 'react';
import { width, height } from '../constant/COLORS';
import Images from '../constant/Images';

const GetLogo = ({marginTop}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop,
        backgroundColor: '#fff',
        width: width * 0.4,
        aspectRatio: 1,
        borderRadius: 500,
        padding: "3%"
      }}>
      <Image
        source={Images.sm_Logo}
        resizeMode="contain"
        style={{width: width * 0.3, height: width * 0.3}}
      />
    </View>
  );
};

export default GetLogo;
