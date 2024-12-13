export interface Product {
    name: string
    slug: string
    img: string
    varients: ProductVariant[]
}

export interface ProductVariant {
    name: string
    img: string
    description: string
    specs: ProductSpec[]
}

interface ProductSpec {
    label: string
    value: string
}