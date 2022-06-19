import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../constant';
import {height, width} from '../constant/COLORS';
import {CustomButton} from '../components';
import Styles from '../Style/Styles';
import Context from '../Context/Context';

const ComplainPin = ({navigation, route}) => {
  const id = route?.params?.id;
  const refpin0 = React.useRef(null);
  const refpin1 = React.useRef(null);
  const refpin2 = React.useRef(null);
  const refpin3 = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const {SolveComplaint} = Context();

  const [feilds, setFeilds] = useState({
    pin0: '',
    pin1: '',
    pin2: '',
    pin3: '',
  });

  useEffect(() => {
    if (feilds[`pin0`] === '') {
      refpin0.current.focus();
    } else if (feilds[`pin1`] === '') {
      refpin1.current.focus();
    } else if (feilds[`pin2`] === '') {
      refpin2.current.focus();
    } else if (feilds[`pin3`] === '') {
      refpin3.current.focus();
    }
  }, [feilds]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.purple}}>
      {/* <ScrollView style={{flex: 1}}> */}
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'none'}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            width,
            flex: 1,
            // backgroundColor: COLORS.blue,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          // contentContainerStyle={{
          //   ,
          // }}
        >
          <View
            style={{
              width: width * 0.96,
              height: height * 0.35,
              backgroundColor: COLORS.pink,
              alignItems: 'center',
              paddingHorizontal: width * 0.02,
              justifyContent: 'space-around',
              borderRadius: 25,
              paddingVertical: height * 0.04,
            }}>
            <Text
              style={{
                color: COLORS.purple,
                fontWeight: '800',
                fontSize: width * 0.05,
              }}>
              Please Fill Complain Pin
            </Text>
            <View
              style={{
                width: width * 0.65,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                ref={refpin0}
                style={[
                  Styles.otpFeilds,
                  {
                    width: 50,
                    aspectRatio: 1,
                    backgroundColor: COLORS.lightPurple,
                    borderRadius: 5,
                    borderWidth: 0,
                    textAlign: 'center',
                    //   borderColor: COL,
                  },
                ]}
                value={feilds['pin0']}
                onChangeText={e => {
                  setFeilds({
                    ...feilds,
                    ['pin0']: e,
                  });
                  // if (feilds.pin0 != '') {
                  //   refpin1.current.focus();
                  // }
                }}
                maxLength={1}
                minLength={1}
                // placeholder="0"
                placeholderTextColor={COLORS.white}
                keyboardType="numeric"
              />

              <TextInput
                ref={refpin1}
                style={[
                  Styles.otpFeilds,
                  {
                    width: 50,
                    aspectRatio: 1,
                    backgroundColor: COLORS.lightPurple,
                    borderRadius: 5,
                    borderWidth: 0,
                    textAlign: 'center',
                    //   borderColor: COL,
                  },
                ]}
                value={feilds['pin1']}
                onChangeText={e => {
                  setFeilds({
                    ...feilds,
                    ['pin1']: e,
                  });
                  // if (feilds.pin0 != '') {
                  //   refpin1.current.focus();
                  // }
                }}
                maxLength={1}
                minLength={1}
                // placeholder="0"
                placeholderTextColor={COLORS.white}
                keyboardType="numeric"
              />

              <TextInput
                ref={refpin2}
                style={[
                  Styles.otpFeilds,
                  {
                    width: 50,
                    aspectRatio: 1,
                    backgroundColor: COLORS.lightPurple,
                    borderRadius: 5,
                    borderWidth: 0,
                    textAlign: 'center',
                    //   borderColor: COL,
                  },
                ]}
                value={feilds['pin2']}
                onChangeText={e => {
                  setFeilds({
                    ...feilds,
                    ['pin2']: e,
                  });
                }}
                maxLength={1}
                minLength={1}
                // placeholder="0"
                placeholderTextColor={COLORS.white}
                keyboardType="numeric"
              />
              <TextInput
                ref={refpin3}
                style={[
                  Styles.otpFeilds,
                  {
                    width: 50,
                    aspectRatio: 1,
                    backgroundColor: COLORS.lightPurple,
                    borderRadius: 5,
                    borderWidth: 0,
                    textAlign: 'center',
                    //   borderColor: COL,
                  },
                ]}
                value={feilds['pin3']}
                onChangeText={e => {
                  setFeilds({
                    ...feilds,
                    ['pin3']: e,
                  });
                }}
                maxLength={1}
                minLength={1}
                // placeholder="0"
                placeholderTextColor={COLORS.white}
                keyboardType="numeric"
              />
            </View>
            <CustomButton
              title={'Verify'}
              containerStyles={Styles.verifyButton}
              eventHandler={() => {
                setLoading(true);
                SolveComplaint(
                  id,
                  Object.values(feilds),
                  () => {
                    navigation.goBack();
                    setLoading(false);
                  },
                  () => {
                    setLoading(false);
                  },
                );
              }}
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default ComplainPin;
