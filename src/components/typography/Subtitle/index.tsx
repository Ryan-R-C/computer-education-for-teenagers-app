import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import * as S from './styled';
import { ReactProps } from '../../../types'

const Subtitle = ({children}: ReactProps) => {
  return(
    <S.Subtitle>
      {
        children
      }
    </S.Subtitle>
  )
};

export default Subtitle