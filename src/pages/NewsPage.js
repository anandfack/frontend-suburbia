// import components
import BreadCrumb from "../components/Breadcrumb";
import EditorPicks from "../components/EditorPicks";
import HeadlineNews from "../components/HeadlineNews";
import HotNews from "../components/HotNews";
// import AllNews from "../components/AllNews";

const NewsPage = () => {
  return (
    <div>
      <BreadCrumb />
      <HeadlineNews />
      <EditorPicks />
      <HotNews />
    </div>
  );
};

export default NewsPage;
