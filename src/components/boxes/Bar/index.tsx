import { PercentageProps } from '../../../types'
import * as S from './styled'

export default function Bar({ percentage }: PercentageProps) {
  return (
    <S.Bar data-percentage={percentage || 0}>
      <S.Percentage
        style={{
          width: percentage ?`${percentage}%` : 0,
        }}
      />
    </S.Bar>
  )
}
