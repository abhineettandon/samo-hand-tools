import Table, { TableData } from "../../Table"

export default function TradeAndMarketTable() {
    const data: TableData[] = [
        {
            label: "Export Percentage",
            value: "100%"
        },
        {
            label: "Top Export Countries",
            value: "Nepal, Ukraine, USA, Chile, Colombia"
        }
    ]

    return <Table heading="Trade & Market" data={data} />
}