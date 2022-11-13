
import * as S from './styled'
import { ReactProps } from '../../../types';
import FooterBar from './FooterBar';
import { footerProps } from '../../../routes';
import FooterBarItem from './FooterBarItem';
import Icons from "../../icons";
import { Link } from 'react-router-dom';

export default function Footer({ children }: ReactProps) {

    return (
        <FooterBar>
            <>
            {
            footerProps.map(
                ({icon, path}) => {
                    const Icon = Icons[icon]
                    return(
                        <FooterBarItem>
                            <Link to={path}>
                                <Icon size={60}/>
                            </Link>

                        </FooterBarItem>
                )
            }
            )
            }
            </>
          
        </FooterBar>
    )
}