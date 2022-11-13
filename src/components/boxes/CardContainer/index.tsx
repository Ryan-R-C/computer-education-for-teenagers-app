
import * as S from './styled'
import { ButtonProps } from '../../../types';


export default function CardContainer({ children }: ButtonProps) {

    return (
        <S.CardContainer
            onClick={() => {}}
        >
            {
                children
            }
        </S.CardContainer>
    )
}