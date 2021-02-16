import React from 'react';
import {Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ButtonOutline = ({borderColor, text, textColor}) => {
  const style = styles(textColor, borderColor);

  return (
    <Pressable style={[style.button, style.buttonOutline]}>
      <Text style={style.textButton}>{text}</Text>
    </Pressable>
  );
};

ButtonOutline.propTypes = {
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

const ButtonGradient = ({colors, text, textColor}) => {
  const style = styles(textColor);

  return (
    <Pressable>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={style.button}>
        <Text style={style.textButton}>{text}</Text>
      </LinearGradient>
    </Pressable>
  );
};

ButtonGradient.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export {ButtonOutline, ButtonGradient};
