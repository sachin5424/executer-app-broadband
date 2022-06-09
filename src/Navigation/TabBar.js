import {View, Text, Animated, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Styles from '../Style/Styles';
import {COLORS} from '../constant';
import {CustomStatusBar} from '../partials';
import {FONT_BACK_LABEL, width} from '../constant/COLORS';

export default function TabBar({state, descriptors, navigation, position}) {
  // console.log({index: state?.index});

  return (
    <View style={{flexDirection: 'row', paddingTop: 10}}>
      {/* <CustomStatusBar bgColor={COLORS?.purple} content="light-content" /> */}
      <ScrollView horizontal={true} style={{flex: 1}}>
        {state.routes.map((route, index) => {
          // console.log({key : route.key});

          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          //   console.log("dvd",opacity, position,label);

          return (
            // <TouchableOpacity
            //   accessibilityRole="button"
            //   accessibilityState={isFocused ? { selected: true } : {}}
            //   accessibilityLabel={options.tabBarAccessibilityLabel}
            //   testID={options.tabBarTestID}
            //   onPress={onPress}
            //   onLongPress={onLongPress}
            //   style={{ flex: 1 }}
            // >
            //   <Animated.Text style={{ opacity: 1 }}>
            //     {label}
            //   </Animated.Text>
            // </TouchableOpacity>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={onPress}
              key={index}
              onLongPress={onLongPress}
              style={[
                Styles.card,
                Styles.elevation,
                {
                //   width: width / 3.5,
                  borderBottomWidth: 0,
                  marginHorizontal: 10,
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    state?.index == index ? COLORS.pink : 'white',
                  borderRadius: 50,
                  borderColor: 'black',
                  // opacity: 1
                },
              ]}>
              <Text
                style={{
                  color: state?.index == index ? COLORS.white : 'black',
                  fontSize: FONT_BACK_LABEL - 5,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
    // </ScrollView>
  );
}
