import { Message } from 'iconsax-react'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const MessageIcon = ({ size, color, variant }: ButtonProps) => {
  return (
    <Message
      size={size || '32'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
      variant={variant || 'Bold'}
    />
  )
}

export default MessageIcon
