import type { Product } from '../types/Product'

import { slashers } from './Slashers'
import { billHooks } from './BillHooks';
import { diggingTools } from './DiggingTools';
import { rakes } from './Rakes';
import { hoes } from './Hoes';
import { scrapers } from './Scrapers';

const products: Product[] = [
    {...slashers},
    {...billHooks},
    {...diggingTools},
    {...rakes},
    {...hoes},
    {...scrapers},
]

export default products;