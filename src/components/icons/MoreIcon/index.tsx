import React from 'react';
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';
import { AiOutlineMore } from 'react-icons/ai';


const MoreIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <AiOutlineMore
    size={size || "32px"}
    style={
      {
        cursor: "pointer"
      }
    }
    color={color || colors.main}
    />
  )
};

export default MoreIcon
