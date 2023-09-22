// import components
import Header from "../components/Header";
import BreadCrumb from "../components/Breadcrumb"
import AllRoaster from "../components/AllRoaster"

const RoasterPage = () => {
  return (
    <div className="max-w-[1440px] w-full">
      <Header/>
      <BreadCrumb/>
      <AllRoaster />
    </div>
  );
};

export default RoasterPage;
