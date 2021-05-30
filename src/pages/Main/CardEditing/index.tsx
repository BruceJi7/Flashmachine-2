import { useEffect, useState } from "react";

import Editor from "./Editor";
import WordTabs from "./WordTabs";

import { DefinitionPack } from "../../../config/types";

import style from "./CardEditing.module.scss";

type Props = {
  definitions: DefinitionPack[];
};

function CardEditing({ definitions }: Props) {
  const [activeWord, setActiveWord] = useState<DefinitionPack>(definitions[0]);

  const setTab = (word: string) => {
    const a = definitions.find((def) => def.queryWord === word);
    if (a) {
      setActiveWord(a);
    }
  };

  //TESTING
  useEffect(() => {
    if (definitions) {
      console.log(definitions);
    }
  }, [definitions]);

  return (
    <>
      <WordTabs
        words={definitions?.map((w: DefinitionPack) => w.queryWord)}
        setTab={setTab}
        activeTab={activeWord.queryWord}
      />
      <Editor activeWord={activeWord} />
      <div className={style.buttons}>
        <button>
          <i className="fas fa-angle-left"></i>
        </button>
        <button>Make Cards</button>
        <button>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default CardEditing;
