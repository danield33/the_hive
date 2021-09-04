import PropTypes from "prop-types";


export function Button({color, text, onClick}) {

    const onPress = () => {
        onClick();
    }


    return (
        <div>
            <button style={{backgroundColor: color}} className={'btn'} onClick={onPress}>{text}</button>
        </div>
    );
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}