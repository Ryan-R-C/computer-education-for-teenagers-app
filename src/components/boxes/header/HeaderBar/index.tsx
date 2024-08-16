import { useNavigate } from 'react-router-dom'
import { ReactProps } from '../../../../types'
import ArrowBackIcon from '../../../icons/ArrowBackIcon'
import * as S from './styled'

export default function HeaderBar({ children }: ReactProps) {
  const navigate = useNavigate()

  function goBackOnePage() {
    navigate(-1)
  }

  return (
    <S.HeaderBar>
      <div className="icon-container" onClick={() => goBackOnePage()}>
        <ArrowBackIcon size={'45px'} />
      </div>
      <S.FlexContainer>{children}</S.FlexContainer>
    </S.HeaderBar>
  )
}
