import { ResumeInfoContext } from "@/context/ResumeInfoContex";
import { useContext } from "react";
import PresonalDetailPreview from "./preview/PresonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ProfessionalExperiencePreview from "./preview/ProfessionalExperiencePreview";
import EducationalPrevieuw from "./preview/EducationalPrevieuw";
import SkillsPreview from "./preview/SkillsPreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
      }}
    >
      {/* Personal Detail */}
      <PresonalDetailPreview resumeInfo={resumeInfo} />
      {/* Summery */}
      <SummeryPreview resumeInfo={resumeInfo} />
      {/* Professional Experience */}
      <ProfessionalExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational */}
      <EducationalPrevieuw resumeInfo={resumeInfo} />
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
