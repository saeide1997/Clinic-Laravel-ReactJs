import BannerSlider from "../components/Banner";
import SpecialityMenu from "../components/speciality";

const SpecialityPage = () => {
    return (
        <div className="flex flex-col w-screen items-center justify-center ">
            <BannerSlider />
            <SpecialityMenu/>
        </div>

    );
};

export default SpecialityPage;