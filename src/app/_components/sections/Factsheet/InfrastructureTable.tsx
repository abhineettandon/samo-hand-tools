import Table, { TableData } from "../../Table"

export default function InfrastructureTable() {
    const data: TableData[] = [
        {
            label: "Location Type",
            value: "Urban"
        },
        {
            label: "Building Infrastructure",
            value: "Permanent"
        },
        {
            label: "Size of Premises",
            value: "1000 square feet"
        },
        {
            label: "Space Around",
            value: "Front porch"
        }
    ]

    return <Table heading="Infrastructure" data={data} />
}