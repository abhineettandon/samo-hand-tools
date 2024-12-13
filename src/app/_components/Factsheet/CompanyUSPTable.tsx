import Table, { TableData } from "../Table"

export default function CompanyUSPTable() {
    const data: TableData[] = [
        {
            label: "Quality Measures / Testing Facilities",
            value: "Yes"
        }
    ]

    return <Table heading="Company USP" data={data} />
}