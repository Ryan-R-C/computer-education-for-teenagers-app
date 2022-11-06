import * as S from './styled'
import { StepProps } from '../../../types';

export default function Step({ current, onClick }: StepProps) {

    return (
        <>
           <S.StepDisabled current={current} onClick={onClick}/>  
        </>
    )
}