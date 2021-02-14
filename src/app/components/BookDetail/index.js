import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import bookImage from '../../../assets/img_book1.png';

const BookCell = ({book}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Image style={styles.bookCover} source={bookImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.availability}>Available</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.author}>{book.year}</Text>
          <Text style={styles.author}>{book.genre}</Text>
        </View>
      </View>
      <View style={styles.columnContainer}>
        <Pressable style={[styles.button, styles.buttonOutline]}>
          <Text style={[styles.textButton, styles.textBlueJeans]}>
            ADD TO WISHLIST
          </Text>
        </Pressable>
        <Pressable style={[styles.button, styles.buttonWithGradient]}>
          <Text style={[styles.textButton, styles.textWhite]}>RENT</Text>
        </Pressable>
      </View>
    </View>
  );
};
BookCell.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
};
BookCell.defaultProps = {
  book: {title: '', author: ''},
};

export default BookCell;
