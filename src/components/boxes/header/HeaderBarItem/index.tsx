
import * as S from './styled'
import { ReactProps } from '../../../../types';

export default function HeaderBarItem({ children }: ReactProps) {

    return (
        <S.HeaderBarItem
            
        >
            {
                children
            }
        </S.HeaderBarItem>
    )
}