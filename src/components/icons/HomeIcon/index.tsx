import React from 'react';
import { Home } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const HomeIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <Home
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

export default HomeIcon