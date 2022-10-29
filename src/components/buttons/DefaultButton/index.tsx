
import * as S from './styled'
import { ButtonProps } from '../../../types';


export default function DefaultButton({ children }: ButtonProps) {

    return (
        <S.Button
            onClick={() => {}}
        >
            {
                children
            }   
        </S.Button>
    )
}