import { PlayCircle } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const PlayIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <PlayCircle
      size={size || '32'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
      variant={variant || 'Bold'}
    />
  )
}

export default PlayIcon
