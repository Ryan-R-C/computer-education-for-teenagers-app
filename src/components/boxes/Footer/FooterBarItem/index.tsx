
import * as S from './styled'
import { ReactProps } from '../../../../types';

export default function FooterBarItem({ children }: ReactProps) {

    return (
        <S.FooterBarItem
            
        >
            {
                children
            }
        </S.FooterBarItem>
    )
}