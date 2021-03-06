import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import theme from '../../../styles/theme' 
import OrderHistoryStatus from './OrderHistoryStatus'
import FormatTime from '../../../helper/FormatTime'

const OrderHitoryItem = props => {
  const { item, navigation } = props
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    proccessData()
  }, [])

  const proccessData = () => {
    let _total = 0
    let _totalQuantity = 0

    item.items.map( (foodItem) => {
      _totalQuantity += foodItem.qty
      _total += foodItem.qty * foodItem.food.price
    })
    _total += item.shipping_fee
    setTotal(_total)
    setTotalQuantity(_totalQuantity)

  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => navigation.navigate('OrderDetail', {orderDetail: item})}>
      <View style={styles.textWrapper}>
        <Text style={styles.doctorName}>{item.user.firstName} {item.user.lastName}</Text>
        <Text numberOfLines={1} style={styles.clinicName}>{item.delivery_address}</Text>
        <Text style={styles.date}>{FormatTime.FormatTimeFromMili(parseInt(item.createdAt))}</Text>
        <Text style={styles.date}>{total}d, {totalQuantity} item(s)</Text>
      </View>
      <View style={styles.timeStatusWrapper}>
        <OrderHistoryStatus type={item.status} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: theme.colors.lightGray,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10
  },
  image: {
    justifyContent: 'center',
    marginRight: 5,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: 'SF-Pro-Display-Semibold',
    lineHeight: 20
  },
  clinicName: {
    fontSize: 13,
    fontFamily: 'SF-Pro-Text-Regular',
    lineHeight: 20,
  },
  date: {
    fontSize: 13,
    fontFamily: 'SF-Pro-Text-Regular',
    color: theme.colors.darkGray,
    lineHeight: 20
  },
  timeStatusWrapper: {
    width: 90,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timeBeforeNow: {
    fontSize: 13,
    fontFamily: 'SF-Pro-Text-Regular',
    color: theme.colors.darkGray,
    marginBottom: 15
  }
});

export default OrderHitoryItem;
