
export function Dropdown({data, id, name, className, optionClass}) {
    return (
        <select id={id} name={name} className={className}>{/*value={id}*/}
            {data.map((i, j) => {
                return(
                    <option className={optionClass} value={i.val}>{i.text}</option>
                )
            })}
        </select>
    );
};