
import * as S from './styled'
import { ReactProps } from '../../../../types';


export default function FooterBar({ children }: ReactProps) {

    return (
        <S.FooterBar>
            {
                children
            }
        </S.FooterBar>
    )
}