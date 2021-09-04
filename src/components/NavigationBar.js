import '../index.css'

export function NavigationBar({items}) {
    return (
        <div className={'navBar'}>

            {items.map((i, j) => <button key={j}>{i}</button>)}

        </div>
    );
};
