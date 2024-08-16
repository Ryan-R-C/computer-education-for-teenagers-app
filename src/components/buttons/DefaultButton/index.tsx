import { ButtonProps } from '../../../types'
import * as S from './styled'

export default function DefaultButton({ children }: ButtonProps) {
  return <S.Button onClick={() => {}}>{children}</S.Button>
}
