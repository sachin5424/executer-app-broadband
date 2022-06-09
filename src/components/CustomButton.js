import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Loading} from '../partials';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomButton = props => {
  const {
    title,
    eventHandler,
    containerStyles,
    textStyle,
    haveImage = false,
    imageUrl,
    imageStyling,
    loading,
  } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        !loading ? eventHandler() : console.log('loading');
      }}>
      <View
        style={{
          borderWidth: 0,
          borderRadius: 40,
          backgroundColor: '#FE8FB0',
          marginTop: 30,
          width: '80%',
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          ...containerStyles,
          flexDirection: 'row',
        }}>
        {haveImage ? (
          <Image
            source={imageUrl}
            style={{width: 14, height: 14, marginRight: 10, ...imageStyling}}
            resizeMode="stretch"
          />
        ) : null}

        {loading ? (
          <Loading color={"white"} />
        ) : (
          <Text style={{color: 'white', fontSize: 14, ...textStyle}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
