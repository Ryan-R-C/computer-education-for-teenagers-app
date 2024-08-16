import { Link } from 'react-router-dom'
import { footerProps } from '../../../routes'
import Icons from '../../icons'
import FooterBar from './FooterBar'
import FooterBarItem from './FooterBarItem'

export default function Footer() {
  return (
    <FooterBar>
      <>
        {footerProps.map(({ icon, path }) => {
          const Icon = Icons[icon]
          return (
            <FooterBarItem key={icon}>
              <Link to={path}>
                <Icon size={60} />
              </Link>
            </FooterBarItem>
          )
        })}
      </>
    </FooterBar>
  )
}
