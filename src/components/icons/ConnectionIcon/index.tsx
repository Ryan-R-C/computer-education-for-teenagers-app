import { ButtonProps } from '../../../types'
import * as S from './styled'
import { Hierarchy, Hierarchy2 } from 'iconsax-react'
import { colors } from '../../../globalStyle'

const ConnectionIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <S.FlexConnection>
      <Hierarchy
        size={typeof size === 'number' ? size / 1.3 : size || '32'}
        style={{
          cursor: 'pointer',
        }}
        color={color || colors.main}
        variant={variant || 'Bold'}
      />
      <Hierarchy2
        size={typeof size === 'number' ? size / 1.3 : size || '32'}
        style={{
          cursor: 'pointer',
        }}
        color={color || colors.main}
        variant={variant || 'Bold'}
      />
    </S.FlexConnection>
  )
}

export default ConnectionIcon
