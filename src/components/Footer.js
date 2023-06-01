import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitterSquare } from '@fortawesome/free-solid-svg-icons';

import { FaTwitterSquare }  from 'react-icons/fa';
import { FaFacebookSquare }  from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';


let link= '';

const Footer =  () => {

    return (

        <footer className="footer">
            
                <a href={link} className='social'><FaTwitterSquare/></a>
                <a href={link} className='social'><FaFacebookSquare/></a>
                <a href={link} className='social'><FaInstagram/></a>
                <a href={link} className='social'><FaGithub/></a>
       
        </footer>    
       

    );

}

export default Footer
