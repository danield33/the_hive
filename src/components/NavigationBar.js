import '../index.css'
import {Nav} from 'react-bootstrap';

export function NavigationBar({items}) {
    return (
        <di className={'navBar'}>

            {items.map((i, j) => (
                <Nav.Link href={i.linkTo} className={'navBar'}>
                    <button>
                        {i.text}
                    </button>
                </Nav.Link>
            )
            )}

        </di>
    );
};
