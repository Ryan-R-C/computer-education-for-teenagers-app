
import * as S from './styled'
import { ButtonProps } from '../../../types';


export default function FlexContainer({ children }: ButtonProps) {

    return (
        <S.FlexContainer>
            {
                children
            }
        </S.FlexContainer>
    )
}