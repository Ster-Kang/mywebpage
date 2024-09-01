import './fadeInButton.css';
import {useNavigate} from 'react-router-dom';

type FadeInButtonProps = {
    text: string;
    href?: string;
    compStyle?: string;
    fadeIn?: boolean;
    focused?: boolean;
}

const FadeInButton = ({
    text, href, compStyle, fadeIn, focused
    }:FadeInButtonProps):JSX.Element => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(href? href:'/');
    }

    return (
        <button className={`${compStyle ? compStyle : ''} ${fadeIn ? 'visible':''} ${focused ? 'focused' : ''}`} onClick={handleClick}>{text}</button>
    );
};

export default FadeInButton;