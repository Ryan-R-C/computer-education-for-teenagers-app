
import * as S from './styled'
import { ReactProps } from '../../../../types';
import ArrowBackIcon from '../../../icons/ArrowBackIcon';


export default function FooterBar({ children }: ReactProps) {

    return (
        <S.FooterBar>
            {
                children
            }
        </S.FooterBar>
    )
}