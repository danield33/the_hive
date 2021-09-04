
import Picture from '../images/profilePicture.svg';

export function ProfilePicture({size}) {
    return (
        <img src={Picture} alt={""} style={{width: size, height: size}}/>
    );
};

ProfilePicture.defaultProps = {
    size: 50,
}