
import * as S from './styled'
import { FeaturedButtonProps } from '../../../types';

export default function DefaultButtonEmphasis({ children, onClick, theme }: FeaturedButtonProps) {

    return (
        <S.Button
            theme={theme}
            onClick={onClick}
        >

            {
                children
            }

        </S.Button>
    )
}