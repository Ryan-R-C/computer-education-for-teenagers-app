import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import { TaskSquare } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const TaskSquareIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <TaskSquare
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

export default TaskSquareIcon