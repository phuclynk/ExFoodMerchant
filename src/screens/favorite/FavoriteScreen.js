import React, {useState, Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FavoriteList from './components/FavoriteList';
import Header from '../../components/core/Header';
import Toolbar from './components/Toolbar';

const FavoriteScreen = () => {
  const [listFavorite, setListFavorite] = useState([]);

  return (
    <Fragment>
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Favorites</Text>
        <Toolbar />
        <FavoriteList />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 34,
    fontFamily: 'SF-Pro-Display-Bold',
    marginBottom: 10,
    paddingHorizontal: 16
  },
});

export default FavoriteScreen;
