import TopHeader from "./TopHeader";
import Header from "./Header";
import BannerSection from "./BannerSection";
import BrandSection from "./BrandSection";
import ProjectSection from "./ProjectSection";

const TemplateSectionMain = () => {
  return (
    <div className="">
      <TopHeader></TopHeader>
      <Header></Header>
      <BannerSection></BannerSection>
      <BrandSection></BrandSection>
      <ProjectSection></ProjectSection>
    </div>
  );
};

export default TemplateSectionMain;
