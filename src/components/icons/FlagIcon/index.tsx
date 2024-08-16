import React from 'react';
import { Flag } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';


const FlagIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <Flag
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

export default FlagIcon