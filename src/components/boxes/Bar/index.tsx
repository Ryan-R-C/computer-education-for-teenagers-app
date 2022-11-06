
import * as S from './styled'
import { PercentageProps } from '../../../types';


export default function Bar({ percentage }: PercentageProps) {

    return (
        <S.Bar
            data-percentage={percentage || 0}
            
        >
            <S.Percentage 
            style={
                {
                    width: `${percentage}%` || 0
                }
            }
            />
        </S.Bar>
    )
}