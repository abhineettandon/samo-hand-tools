import Table, { TableData } from "../Table";

export default function StatutoryTable() {
  const data: TableData[] = [
    {
      label: "GST Number",
      value: "03AFKFS4323M1ZT",
    },
    {
      label: "Registration Date",
      value: "18/10/2024",
    },
    {
      label: "Constitution of Business",
      value: "Partnership",
    },
  ];

  return <Table heading="Statutory" data={data} />;
}
