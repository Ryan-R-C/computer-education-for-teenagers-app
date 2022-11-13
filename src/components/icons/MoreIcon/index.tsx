import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';
import { AiOutlineMore } from 'react-icons/ai';


const MoreIcon = ({size, color, variant}: ButtonProps) => {
  // then use it as a normal React Component
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
