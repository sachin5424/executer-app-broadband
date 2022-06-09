import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import {width} from '../../constant/COLORS';
import {COLORS} from '../../constant';
import {useSelector} from 'react-redux';
import {
  selectAcceptComplainData,
  selectNewComplainData,
} from '../../redux/UserSlice';
import ComplaintCard from './ComplaintCard';

const AcceptComplainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const acceptcomplaintsData = useSelector(selectAcceptComplainData);

  console.log({acceptcomplaintsData: acceptcomplaintsData?.length});

  return (
    <ScrollView
      style={{
        borderWidth: 0,
        paddingHorizontal: 20,
        backgroundColor: COLORS.purple,
      }}
      contentContainerStyle={{flexGrow: 1}}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={() => {
            // RNRestart.Restart();
            setIsLoading(!isLoading);
          }}
        />
      }>
      {/* <View style={{flex: 1, backgroundColor: 'blue'}}> */}
      {acceptcomplaintsData?.map((x, n) => {
        // console.log('enter', n);
        return <ComplaintCard key={n} data={x} type={"accept"}/>;
      })}

      {/* <ComplaintScreen/> */}
      {/* </View> */}
    </ScrollView>
  );
};

export default AcceptComplainScreen;
