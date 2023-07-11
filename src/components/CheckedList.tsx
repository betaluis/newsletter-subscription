import Icon from "../assets/icon-list.svg"

export default function CheckedList ({ list }: { list: string[] }) {
    return (
        <ul className="flex flex-col gap-y-4">
            {list && list.map((item, index) => (
                <li 
                    key={index}
                    className="flex gap-4 items-start"
                >
                    <div className="">
                        <img src={Icon} alt="check mark" />
                    </div>
                    <p className="leading-5">{item}</p>
                </li>
            ))}
        </ul>
    )
}
