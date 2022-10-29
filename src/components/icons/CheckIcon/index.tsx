import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { TickCircle } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const CheckIcon = ({size, color, variant}: ButtonProps) => {
  // then use it as a normal React Component
  return(
    <TickCircle
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

export default CheckIcon