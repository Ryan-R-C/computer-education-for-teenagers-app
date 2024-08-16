import { StepProps } from '../../../types'
import * as S from './styled'

export default function Step({ current, onClick }: StepProps) {
  return (
    <>
      <S.StepDisabled current={current} onClick={onClick} />
    </>
  )
}
