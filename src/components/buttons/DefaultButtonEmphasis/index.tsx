import { FeaturedButtonProps } from '../../../types'
import * as S from './styled'

export default function DefaultButtonEmphasis({ children, onClick, theme }: FeaturedButtonProps) {
  return (
    <S.Button theme={theme} onClick={onClick}>
      {children}
    </S.Button>
  )
}
