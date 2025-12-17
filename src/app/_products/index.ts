import type { Product } from "../types/Product";

import { slashers } from "./Slashers";
import { billHooks } from "./BillHooks";
import { diggingTools } from "./DiggingTools";
import { rakes } from "./Rakes";
import { hoes } from "./Hoes";
import { combinationSpanner } from "./CombinationSpanner";
import { hammers } from "./Hammers";

const products: Product[] = [
  { ...slashers },
  { ...billHooks },
  { ...diggingTools },
  { ...rakes },
  { ...hoes },
  { ...combinationSpanner },
  { ...hammers },
];

export default products;
