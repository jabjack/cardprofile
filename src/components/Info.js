
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FaLinkedinIn } from 'react-icons/fa';

const link1 = "";

const Info = () => {

    return (

        <section>

            <h2 className="name">Luisa  Smith</h2>
            <h1 className="work">Junior Developer</h1>
            <h3 className="web"> luisas.website</h3>
            <button className="btn1">

                <FontAwesomeIcon className="icon1" icon={faEnvelope} />
                 Email
            </button>
            <button className="btn2">
                     <a href={link1} className='icon2'><FaLinkedinIn/></a>

            LinkedIn
            
            </button>
        </section >


    )

}

export default Info
