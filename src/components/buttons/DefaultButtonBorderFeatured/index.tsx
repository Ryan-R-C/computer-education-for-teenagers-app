import { FeaturedButtonProps } from '../../../types'
import * as S from './styled'

export default function DefaultButtonBorderFeatured({ children, variant }: FeaturedButtonProps) {
  return (
    <S.Button theme={variant || ''} onClick={() => {}}>
      {children}
    </S.Button>
  )
}
