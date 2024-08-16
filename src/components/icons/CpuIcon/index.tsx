import React from 'react';
import { Cpu } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const CpuIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <Cpu
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

export default CpuIcon