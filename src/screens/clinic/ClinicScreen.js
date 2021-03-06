import React, {useState} from 'react';
import WithContext from '../../components/core/WithContext';
import {StyleSheet, View, Text} from 'react-native';
import ClinicListView from './components/ClinicListView';

const ClinicScreen = props => {
  const [clinics, setClinics] = useState([
    {
      id: 1,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 5,
      ratingCount: 69,
    },
    {
      id: 2,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 3,
      ratingCount: 69,
    },
    {
      id: 3,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 4,
      ratingCount: 69,
    },
    {
      id: 4,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 2,
      ratingCount: 69,
    },
    {
      id: 5,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 4,
      ratingCount: 69,
    },
    {
      id: 6,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 5,
      ratingCount: 69,
    },
    {
      id: 7,
      name: 'Hoan My General Hospital',
      address: '200 Nguyen Van Linh',
      distance: '1.5km away',
      rating: 5,
      ratingCount: 69,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clinics</Text>
      <View style={styles.list}>
        <ClinicListView items={clinics} navigation={props.navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 34,
    fontFamily: 'SF-Pro-Display-Bold',
  },
  list: {
    marginTop: 10,
    flex: 1
  },
});

export default WithContext(ClinicScreen);
