export interface Product {
    name: string
    slug: string
    img: string
    varients: ProductVariant[]
}

interface ProductVariant {
    name: string
    img: string
    description: string
    specs: ProductSpec[]
}

interface ProductSpec {
    key: string
    value: string
}