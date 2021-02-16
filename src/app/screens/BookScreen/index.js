import React from 'react';
import {connect} from 'react-redux';
import BookList from '../../components/BookList';

const BookScreen = (props) => {
  const {books, navigation} = props;

  const handlePress = (book) => {
    navigation.navigate('Book Detail', {book});
  };

  return <BookList books={books} handlePress={handlePress} />;
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookScreen);
