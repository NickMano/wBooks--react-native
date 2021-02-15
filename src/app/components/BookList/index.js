import React from 'react';
import {View, FlatList} from 'react-native';
import BookCell from '../BookCell';
import styles from './styles';

const BookList = ({books, handlePress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => (
          <BookCell book={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookList;
