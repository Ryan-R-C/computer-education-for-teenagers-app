import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { PlayCircle } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const PlayIcon = ({size, color, variant}: ButtonProps) => {
  // then use it as a normal React Component
  return(
    <PlayCircle
    size={size || "32"}
    style={
      {
        cursor: "pointer"
      }
    }
    color={color || colors.main}
      variant={variant || "Bold"}
    />
  )
};

export default PlayIcon