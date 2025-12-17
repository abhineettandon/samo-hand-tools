import { Fragment } from "react";
import BasicInformationTable from "./BasicInformationTable";
import CompanyUSPTable from "./CompanyUSPTable";
import InfrastructureTable from "./InfrastructureTable";
import PaymentAndShipmentTable from "./PaymentAndShipmentTable";
import StatutoryTable from "./StatuoryProfileTable";
import TradeAndMarketTable from "./TradeAndMarketTable";

export default function Factsheet() {
  return (
    <Fragment>
      <h4 className="text-4xl mt-8 font-bold text-secondary text-center">
        Factsheet
      </h4>
      <div className="flex flex-col gap-4 mt-4">
        <BasicInformationTable />
        <CompanyUSPTable />
        <TradeAndMarketTable />
        <InfrastructureTable />
        <PaymentAndShipmentTable />
        <StatutoryTable />
      </div>
    </Fragment>
  );
}
