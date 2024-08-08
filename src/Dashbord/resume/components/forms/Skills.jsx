import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import { Button } from "@/components/ui/button";

import "@smastrom/react-rating/style.css";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContex";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";

function Skills() {
  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();
  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();
    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  useEffect(() => {
    resumeInfo && setSkillsList(resumeInfo?.skills);
  }, []);
  const AddNewSkill = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkill = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };
  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: skillsList.map(({ id, ...rest }) => rest),
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (resp) => {
        console.log(resp);
        setLoading(false);
        toast("Skills updated successfully");
      },
      (error) => {
        setLoading(false);
        console.error(error);
        toast("Error updating resume,Please Try again!");
      }
    );
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Compétences</h2>
      <p>Ajoutez vos principales compétences professionnelles</p>
      <div>
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border my-5 rounded-lg p-3"
          >
            <div>
              <label className="text-xs">Nom</label>
              <Input
                className="w-full"
                onChange={(e) => handleChange(index, "name", e.target.value)}
                defaultValue={item.name}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="text-primary"
            onClick={AddNewSkill}
          >
            + Ajouter plus de compétences
          </Button>
          {skillsList.length > 1 ? (
            <Button
              variant="outline"
              className="text-primary"
              onClick={RemoveSkill}
            >
              - Retirer
            </Button>
          ) : null}
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Sauvegarder"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
