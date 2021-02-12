import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Colors from '../../../utils/colors';
import BookCell from '../BookCell';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aliceBlue,
    paddingVertical: 8,
  },
});

const BookList = () => {
  const bookStruct = {
    title: 'A Little Bird Told Me',
    author: 'Timothy Cross',
    year: '1982',
    genre: 'Novel',
    id: Math.random() * (999 - 0) + 0,
  };
  const [books, setBooks] = useState([
    bookStruct,
    bookStruct,
    bookStruct,
    bookStruct,
    bookStruct,
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => <BookCell book={item} onPress={() => {}} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BookList;
