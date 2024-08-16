import React from 'react';
import { CloseCircle } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const UncheckIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <CloseCircle
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

export default UncheckIcon