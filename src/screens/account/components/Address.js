import React, { useState, useEffect, } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'
import theme from '../../../styles/theme'
import WithContext from '../../../components/core/WithContext'
import { AuthService } from '../../../services/AuthService'

const Address = props => {
  const { context } = props
  const { choosenRestaurant } = context

  const [ isLoading , setLooading] = useState(true)

  useEffect(() => {
    choosenRestaurant && setLooading(false)
  })

  return (
    <View style={styles.setting}>
      <Text style={styles.headerLabel}>Store Address</Text>
      <View style={styles.addressList}>
        {!isLoading && <TouchableOpacity>
          <View style={styles.addressItem}>
            <ListItem
              key={choosenRestaurant._id}
              title={choosenRestaurant.location.address}
              titleProps={{
                numberOfLines: 1
              }}
              containerStyle={styles.items}
            />
          </View>
        </TouchableOpacity>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerLabel: {
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: theme.colors.black,
    backgroundColor: theme.colors.favorite.backgroundGray,
    color: theme.colors.darkGray,
    lineHeight: 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  addressTypeText: {
    paddingLeft: 15,
    fontSize: 13,
    fontFamily: 'SF-Pro-Text-Regular',
    color: theme.colors.darkGray,
    paddingTop: 15,
  },
  setting: {
    marginHorizontal: 10,
    marginTop: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  items: {
    backgroundColor: theme.colors.lightGray,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
})

export default WithContext(Address)