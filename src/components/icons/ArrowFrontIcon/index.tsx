import { ArrowCircleRight } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const ArrowFrontIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <ArrowCircleRight
      size={size || '32'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
      variant={variant || 'Bold'}
    />
  )
}

export default ArrowFrontIcon
