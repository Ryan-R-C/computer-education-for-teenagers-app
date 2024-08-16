import React from 'react';
import * as S from './styled'
import { ButtonProps } from '../../../types';
//import icon. for React Native import from 'iconsax-react-native'
import { Hierarchy2, Hierarchy } from 'iconsax-react'
import { colors } from '../../../globalStyle'

const ConnectionIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <S.FlexConnection>
      <Hierarchy
        size={
          typeof size === "number" ?
            size / 1.3
            :
            size
            || "32"
        }
        style={
          {
            cursor: "pointer"
          }
        }
        color={color || colors.main}
        variant={variant || "Bold"}
      />
      <Hierarchy2
        size={
          typeof size === "number" ?
            size / 1.3
            :
            size
            || "32"
        }
        style={
          {
            cursor: "pointer"
          }
        }
        color={color || colors.main}
        variant={variant || "Bold"}
      />
    </S.FlexConnection>
  )
};

export default ConnectionIcon