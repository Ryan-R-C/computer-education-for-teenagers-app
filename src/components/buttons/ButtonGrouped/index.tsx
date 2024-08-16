import { FeaturedButtonProps } from '../../../types'
import * as S from './styled'

export default function DefaultButtonGrouped({ children, variant, onClick }: FeaturedButtonProps) {
  return (
    <S.Button theme={variant || ''} onClick={onClick}>
      {children}
    </S.Button>
  )
}
