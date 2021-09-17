import '../index.css'
import {Nav} from 'react-bootstrap';
import logo from '../images/logo.svg'

export function NavigationBar({items}) {
    return (
        <div className={'navBar'}>
            <img src={logo} alt={""} style={{height: 80, alignSelf: 'center'}}/>
            {items.map((i, j) => (
                <Nav.Link href={i.linkTo} className={'navBar'}>
                    <button>
                        {i.text}
                    </button>
                </Nav.Link>
            )
            )}

        </div>
    );
};
