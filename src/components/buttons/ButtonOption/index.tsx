
import * as S from './styled'
import { OptionButtonProps } from '../../../types';

export default function ButtonOption({ children, onClick, isSelected, isUnSet }: OptionButtonProps) {
    return (
        <S.Button
            theme={[isSelected && "isSelected", isUnSet && "isUnSet"]}
            onClick={onClick}  
        >

            {
                children
            }

        </S.Button>
    )
}