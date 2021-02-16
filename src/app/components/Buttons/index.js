import React from 'react';
import {Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonOutline = ({borderColor, text, textColor}) => {
  const style = styles(borderColor, textColor);

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

const ButtonGradient = ({mainColor, secondColor, text, textColor}) => {
  const style = styles(null, textColor, mainColor, secondColor);

  return (
    <Pressable style={[style.button, style.buttonGradient]}>
      <Text style={style.textButton}>{text}</Text>
    </Pressable>
  );
};

ButtonGradient.propTypes = {
  mainColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export {ButtonOutline, ButtonGradient};
