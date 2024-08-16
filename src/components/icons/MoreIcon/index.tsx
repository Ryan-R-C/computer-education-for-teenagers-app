import { AiOutlineMore } from 'react-icons/ai'
import { colors } from '../../../globalStyle'
import { ButtonProps } from '../../../types'

const MoreIcon = ({ size, color }: ButtonProps) => {
  return (
    <AiOutlineMore
      size={size || '32px'}
      style={{
        cursor: 'pointer',
      }}
      color={color || colors.main}
    />
  )
}

export default MoreIcon
