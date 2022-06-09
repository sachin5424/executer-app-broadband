import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import { COLORS, SIZES } from '../constant';


const CustomHeader = props => {
  const {
    showBackButton = false,
    backHandler,
    cartNavigation,
    showCartButton = true,
    title,
    containerStyle,
    IconColor,
    BackIcon,
    imageStyle,
    textStyle
  } = props;

  return (
    <View
      style={{
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.margin5,
        marginBottom: SIZES.margin2,
        marginTop: 10,
        ...containerStyle,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {showBackButton ? (
          <TouchableOpacity
            onPress={backHandler}
            style={{
              padding: 5,
              paddingLeft: 0,
              borderWidth: 0,
              paddingVertical: 10,
            }}>
            <Image
              source={BackIcon}
              style={{
                height: 12,
                width: 25,
                ...imageStyle
                // tintColor: "#941677"
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}

        <Text
          style={{
            color: COLORS.primaryFontColor,
            fontSize: 18,
            marginLeft: SIZES.margin1,
            color: "#ffff",
            ...textStyle
          }}>
          {title}
        </Text>
      </View>

      {showCartButton ? (
        <TouchableOpacity
          style={{
            borderWidth: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={cartNavigation}>
          <FontAwesome5
            name="bell"
            style={{fontSize: 23, color: IconColor || "black"}}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
