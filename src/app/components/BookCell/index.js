import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import bookImage from '../../../assets/img_book1.png';

const BookCell = ({onPress, book}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.bookCover} source={bookImage} />

      <View style={styles.rowContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </Pressable>
  );
};
BookCell.propTypes = {
  onPress: PropTypes.func,
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
BookCell.defaultProps = {
  onPress: () => {},
  book: {title: '', author: ''},
};

export default BookCell;
