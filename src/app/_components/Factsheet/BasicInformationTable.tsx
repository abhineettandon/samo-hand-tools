import Table, { TableData } from "../Table";

export default function BasicInformationTable() {
  const data: TableData[] = [
    {
      label: "Nature of Business",
      value: "Manufacturer",
    },
    {
      label: "Additional Business",
      value: "Factory / Manufacturing",
    },
    {
      label: "Registered Address",
      value:
        "SAMO Hand Tools, B-6, New Gobind Nagar, Gujja Peer, Jalandhar - 144008, Punjab, India",
    },
    {
      label: "Industry",
      value:
        "Manufacturing and Trading of Precision Engineered Hand Tools, Garden Tools, Plumbing Tools, Antique Carpentry Tools, Automotive Tools",
    },
    {
      label: "Total number of employees",
      value: "11 to 25 People",
    },
  ];

  return <Table heading="Basic Information" data={data} />;
}
