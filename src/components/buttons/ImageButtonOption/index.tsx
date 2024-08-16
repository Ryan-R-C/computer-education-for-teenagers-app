import { OptionImageButtonProps } from '../../../types'
import * as S from './styled'

export default function ImageButtonOption({ children, onClick, isSelected, isUnSet, image }: OptionImageButtonProps) {
  return (
    <S.Container theme={[isSelected && 'isSelected', isUnSet && 'isUnSet']} onClick={onClick}>
      <p>{children}</p>
      <img src={image} alt="" />
    </S.Container>
  )
}
