import {Platform, StatusBar, StyleSheet} from 'react-native';
import { COLORS } from '../constant';
import { FONT_BACK_LABEL, height, width } from '../constant/COLORS';

export default Styles = StyleSheet.create({
  feildStyle: {
    backgroundColor: COLORS.feildBackground,
    width: width * 0.90,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 0,
    borderRadius: 30,
    height: 53
  },
  card: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    // borderWidth: 0.7,
    marginBottom: 10,
    overflow: 'hidden',
  },
  elevation: {
    elevation: 5,
  },
  loginButton: {
    backgroundColor: COLORS.pink,
    width: width * 0.90,
    borderRadius: 5,
    marginTop: height*0.03,
    alignSelf: 'center',
    borderRadius: 30,
    height: 53
  },
  otpFeilds: {
    paddingHorizontal: 5,
    // marginTop: -(height*0.03),
    // marginHorizontal: 15,
    // marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: COLORS.white
    // height: 60,
    // margin: 10,
    // padding: 10,
  },
  verifyButton: {
    backgroundColor: COLORS.purple,
    width: width * 0.80,
    borderRadius: 5,
    // marginTop: -(height*0.03),
    alignSelf: 'center',
    borderRadius: 30,
    height: height*0.06
  },

  newConnectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "space-around",
    width: width * 0.4,
    flexWrap: 'wrap'

  },
  newConnection: {
    color: '#fff',
    textAlign: 'center',
  },
});
