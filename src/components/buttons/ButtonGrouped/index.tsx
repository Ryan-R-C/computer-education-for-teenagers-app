
import * as S from './styled'
import { FeaturedButtonProps } from '../../../types';

export default function DefaultButtonGrouped({ children, variant, onClick }: FeaturedButtonProps) {
    return (
        <S.Button
            theme={variant || ""}
            onClick={onClick}  
        >

            {
                children
            }

        </S.Button>
    )
}