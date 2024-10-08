import { TickCircle } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const CheckIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <TickCircle
      size={size || '32'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
      variant={variant || 'Bold'}
    />
  )
}

export default CheckIcon
