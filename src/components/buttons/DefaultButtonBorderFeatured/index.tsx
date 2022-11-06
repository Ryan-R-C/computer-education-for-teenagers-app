
import * as S from './styled'
import { FeaturedButtonProps } from '../../../types';

export default function DefaultButtonBorderFeatured({ children, variant }: FeaturedButtonProps) {
    return (
        <S.Button
            theme={variant || ""}
            onClick={() => {}}  
        >

            {
                children
            }

        </S.Button>
    )
}