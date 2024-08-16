import { ReactComponent as BorderSVG } from '../../../assets/featured_border.svg'
import { ContainerProps } from '../../../types'
import * as S from './styled'

export default function ContentContainer({ children, style, height }: ContainerProps) {
  if (!style) style = {}
  style!.height = height || '50vh'

  return (
    <S.Container>
      <S.BorderContainer>
        <BorderSVG />
      </S.BorderContainer>
      <S.ContentContainer style={style}>{children}</S.ContentContainer>
    </S.Container>
  )
}
