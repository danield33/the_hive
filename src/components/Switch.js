import './styles.css'
import React, {useState} from 'react';

export function Switch({trueColor, falseColor}) {

    const [value, setVal] = useState(false);

    const toggle = () => {
        setVal(!value)
    }

    return (
        <label className="switch" >
            <input type="checkbox" onChange={toggle}/>
                <span className="slider round" style={{
                    backgroundColor: value ? trueColor : falseColor
                }}/>
        </label>
    );
};

