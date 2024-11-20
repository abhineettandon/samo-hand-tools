type Params = {
    slug: string
}
export default function Page({ params }: { params: Params }) {
    return <p>product is: { params.slug }</p>
}