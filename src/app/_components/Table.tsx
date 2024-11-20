export type TableData = {
    label: string,
    value: string
}

type TableProps = {
    heading: string,
    data: TableData[]
}

export default function Table({ heading, data }: TableProps) {
    return (
        <table className="w-full text-left border-secondary border-2">
            <thead className="bg-secondary text-white font-bold text-lg">
                <tr>
                    <th colSpan={2} className="px-4 py-2">{heading}</th>
                </tr>
            </thead>

            <tbody>
                { data.map((d, i) => (
                    <tr key={i}>
                        <td className="p-2 border-2" width="30%">{ d.label }</td>
                        <td className="p-2 border-2">{ d.value }</td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}