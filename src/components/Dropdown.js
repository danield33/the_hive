
export function Dropdown({data, id, name, selectStyle, optionStyle}) {
    return (
        <select id={id} name={name} style={selectStyle}>{/*value={id}*/}
            {data.map((i, j) => {
                return(
                    <option className={optionStyle} value={i.val} style={{fontSize: 20}}>{i.text}</option>
                )
            })}
        </select>
    );
};