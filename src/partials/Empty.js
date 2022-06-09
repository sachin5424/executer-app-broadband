import {View, Text, Image} from 'react-native';
import React from 'react';
import { Images } from '../constant';
import { width, height } from '../constant/COLORS';

const Empty = () => {
  return (
    <View style={{width, height, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Image
        source={Images?.emptbox}
        style={{width: width * 0.9, height: height * 0.7}}
        resizeMode= "contain"
      />
    </View>
  );
};

export default Empty;
