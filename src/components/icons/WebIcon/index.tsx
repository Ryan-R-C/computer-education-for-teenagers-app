import { CloudConnection } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const WebIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <CloudConnection
      size={size || '32'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
      variant={variant || 'Bold'}
    />
  )
}

export default WebIcon
