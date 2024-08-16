import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { ArrowCircleLeft } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';


const ArrowBackIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <ArrowCircleLeft
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

export default ArrowBackIcon