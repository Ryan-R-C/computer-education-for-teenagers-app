import React from 'react';
import { Profile } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types';

const ProfileIcon = ({size, color, variant}: ButtonProps) => {
  return(
    <Profile
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

export default ProfileIcon