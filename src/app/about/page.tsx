import { Fragment } from "react";

import Hero from "../_components/sections/Hero";
import WhyChooseUs from "../_components/sections/WhyChooseUs";

export default function About() {
    return (
        <Fragment>
            <Hero heading="About" subheading="Welcome to SAMO Hand Tools"/>

            <div className="bg-secondary text-white shadow-sm">
                <div className="container py-8 text-center">
                    <p className="mt-4 text-lg">SAMO Hand Tools, your trusted partner in high-quality hand tools, proudly based in Jalandhar, Punjab, India. With a steadfast commitment to excellence, we specialize in the 100% export of premium hand tools, catering to a global clientele with precision and reliability. Our mission is to provide tools that not only meet but exceed the expectations of our customers worldwide.</p>
                </div>
            </div>

            <WhyChooseUs />
        </Fragment>
    )
}