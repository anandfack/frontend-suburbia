// import components
import Header from "../components/Header";
import BreadCrumb from "../components/Breadcrumb"
import HeadlineNews from "../components/HeadlineNews";

const NewsPage = () => {
  return (
    <div className="max-w-[1440px] w-full">
      <Header/>
      <BreadCrumb />
      <HeadlineNews />
    </div>
  );
};

export default NewsPage;
