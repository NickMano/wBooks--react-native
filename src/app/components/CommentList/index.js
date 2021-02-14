import React, {useState} from 'react';
import {View, FlatList, Button} from 'react-native';
import Comment from '../Comment';
import styles from './styles';

const CommentList = () => {
  const commentStruct = {
    userName: 'John Appleseed',
    comment:
      "It was greet to see you again earlier. Let's definitely get that coffee.",
    id: Math.random() * (99999 - 0) + 0,
  };

  const [comments, setComments] = useState([
    commentStruct,
    commentStruct,
    commentStruct,
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment userName={item.userName} comment={item.comment} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="View All" />
    </View>
  );
};

export default CommentList;
