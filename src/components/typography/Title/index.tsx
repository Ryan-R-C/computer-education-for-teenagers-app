import React from 'react';
//import icon. for React Native import from 'iconsax-react-native'
import * as S from './styled';
import { ReactProps } from '../../../types'

const Title = ({children}: ReactProps) => {
  return(
    <S.Title>
      {
        children
      }
    </S.Title>
  )
};

export default Title