import '../stylesheets/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return (
    <div className="Footer">
      <a href='https://www.linkedin.com/in/chloesian-harrison1/'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://github.com/chloesianharrison'>
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
    </div>
  )
}
