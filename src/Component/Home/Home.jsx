import Service from "../../Service/Service";
import DiscountDoc from "../SectionOne/DiscountDoc/DiscountDoc";
import Faq from "../SectionOne/Faq/Faq";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionOne/SectionTwo";
import TestimonialSection from "../SectionOne/TestimonialSection/TestimonialSection";

const Home = () => {
    return (
        <div>
            <SectionOne/>
            <SectionTwo/>
            <Service/>
            <TestimonialSection/>
            <Faq/>
            <DiscountDoc/>
        </div>
    );
};

export default Home;