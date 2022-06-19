import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import {width} from '../../constant/COLORS';
import {COLORS} from '../../constant';
import {useSelector} from 'react-redux';
import {selectNewComplainData} from '../../redux/UserSlice';
import ComplaintCard from './ComplaintCard';
import Context from '../../Context/Context';
import {Loading} from '../../partials';

const NewComplaints = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {Loder} = Context();
  const newcomplaintsData = useSelector(selectNewComplainData);

  console.log({newcomplaintsData: newcomplaintsData?.length});

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                Loder(() => {
                  setIsLoading(false);
                });
                // setIsLoading(!isLoading);
              }}
            />
          }>
          {/* <View style={{flex: 1, backgroundColor: 'blue'}}> */}
          {newcomplaintsData?.map((x, n) => {
            // console.log('enter', n);
            return <ComplaintCard key={n} data={x} type={'new'} />;
          })}

          {/* <ComplaintScreen/> */}
          {/* </View> */}
        </ScrollView>
      )}
    </>
  );
};

export default NewComplaints;
