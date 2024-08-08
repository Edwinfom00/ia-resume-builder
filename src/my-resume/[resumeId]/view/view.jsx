import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContex";
import ResumePreview from "@/Dashbord/resume/components/ResumePreview";
import React, { useState, useEffect } from "react";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Félicitations ! Votre CV généré par l&apos;IA ultime est prêt !
          </h2>
          <p className="text-center text-gray-400">
            Vous êtes maintenant prêt à télécharger votre CV et vous pouvez
            partager l&apos;URL unique de votre CV avec vos amis et votre
            famille
          </p>
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Télécharger</Button>
            <RWebShare
              data={{
                text: "Bonjour tout le monde, voici mon CV, veuillez ouvrir l'URL pour le voir",
                url:
                  import.meta.env.VITE_VIEW_URL +
                  "/my-resume/" +
                  resumeId +
                  "/view",
                title:
                  resumeInfo?.firstName + " " + resumeInfo?.lastName + " CV",
              }}
              onClick={() => console.log("partagé avec succès !")}
            >
              <Button>Partager</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
