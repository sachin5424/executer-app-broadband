import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';


const CustomTextInput = ({placeholder, value,valueSetter,passwordField = false,setSecure,secure = false,haveImage = false,imageUrl,imageStyling,containerStyles,inputStyling, placeHolderColor, maxLength, keyboardType}) => {
//   const {
//     value,
//     valueSetter,
//     passwordField = false,
//     setSecure,
//     secure = false,
//     haveImage = false,
//     imageUrl,
//     imageStyling,
//     containerStyles,
//     inputStyling,
//   } = props;
  return (
    <View
      style={{
        borderWidth: 0,
        borderRadius: 40,
        backgroundColor: '#F2F2F2',
        marginTop: 20,
        width: '80%',
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        ...containerStyles,
      }}>
      {haveImage ? (
        <Image
          source={imageUrl}
          style={{width: 14, height: 14, marginRight: 10, ...imageStyling}}
          resizeMode="contain"
        />
      ) : null}
      <TextInput
        allowFontScaling={false}
        style={{
          paddingLeft: 5,
          marginRight: 10,
          color: placeHolderColor || "#B6B7B7",
          fontSize: 15,
          borderWidth: 0,
          flex: 1,
          marginRight: 25,
          ...inputStyling,
        }}
        placeholder={placeholder}
        placeholderTextColor={placeHolderColor || "#B6B7B7"}
        keyboardType={keyboardType || "default"}
        value={value}
        onChangeText={val => valueSetter(val)}
        secureTextEntry={secure}
        maxLength={maxLength || 2000}
        autoCapitalize="none"
      />
      {passwordField ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 20}}
          onPress={() => setSecure(!secure)}>
          {!secure ? (
            <Entypo
              name="eye-with-line"
              style={{fontSize: 20, color: '#ABABAB'}}
            />
          ) : (
            <Entypo name="eye" style={{fontSize: 21, color: '#ABABAB'}} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({});
