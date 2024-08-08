import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContex";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { Brain, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import IAchatSession from "../../../../../service/AIModel";

function Summary({ enabledNext }) {
  const prompt =
    "Titre du poste : {jobTitle}, dépend du titre du poste, donnez-moi une liste des niveaux d'expérience pour 3 niveaux d'expérience, niveau intermédiaire et Freasher en 4 à 5 lignes au format tableau, avec les champs summery et experience_level au format JSON";
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [iaGeneratedSummaryList, setIaGeneratedSummaryList] = useState([]);
  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        summery: summary,
      });
  }, [summary]);

  const GenerateSummeryFromIA = async () => {
    setLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    console.log(PROMPT);
    const result = await IAchatSession.sendMessage(PROMPT);
    console.log(JSON.parse(result.response.text()));
    setIaGeneratedSummaryList(JSON.parse([result.response.text()]));
    setLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      data: {
        summary: summary,
      },
    };
    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (resp) => {
        console.log(resp);
        enabledNext(true);
        setLoading(false);
        toast("Details updated successfully");
      },
      (error) => {
        console.error("Error data:", error.response.data);
        setLoading(false);
      }
    );
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Résumé</h2>
        <p>Ajoutez un résumé pour votre titre de poste</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Ajouter un résumé</label>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary flex gap-2"
              type="button"
              onClick={() => GenerateSummeryFromIA()}
            >
              <Brain className="h-4 w-4" />
              Générer à partir de l&apos;IA
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summary}
            defaultValue={summary ? summary : resumeInfo?.summary}
            onChange={(e) => {
              setSummary(e.target.value);
            }}
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Sauvegarder"
              )}
            </Button>
          </div>
        </form>
      </div>

      {iaGeneratedSummaryList && (
        <div>
          <h2 className="font-bold text-lg">Suggestions</h2>
          {iaGeneratedSummaryList.map((item, index) => (
            <div
              key={index}
              onClick={() => setSummary(item?.summary)}
              className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
            >
              <h2 className="font-bold my-1 text-primary">
                Niveau : {item?.experience_level}
              </h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;
