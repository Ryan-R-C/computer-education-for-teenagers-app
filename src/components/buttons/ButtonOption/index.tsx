import { OptionButtonProps } from '../../../types'
import * as S from './styled'

export default function ButtonOption({ children, onClick, isSelected, isUnSet }: OptionButtonProps) {
  return (
    <S.Button theme={[isSelected && 'isSelected', isUnSet && 'isUnSet']} onClick={onClick}>
      {children}
    </S.Button>
  )
}
