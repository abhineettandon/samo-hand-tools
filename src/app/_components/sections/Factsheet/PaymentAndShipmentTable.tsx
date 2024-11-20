import Table, { TableData } from "../../Table"

export default function PaymentAndShipmentTable() {
    const data: TableData[] = [
        {
            label: "Customized Packing",
            value: "No"
        },
        {
            label: "Payment Mode",
            value: "Cash, Cheque, Wire Transfer"
        },
        {
            label: "Shipment Mode",
            value: "By Road and Cargo"
        }
    ]

    return <Table heading="Packaging/Payment and Shipment Details" data={data} />
}