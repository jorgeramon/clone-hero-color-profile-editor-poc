import NoteCard from "components/NoteCard";
import NoteContext from "contexts/note";
import { useState } from "react";

const NoteEditor = () => {
  const [greenMain, setGreenMain] = useState("#00FF00");
  const [greenAnimation, setGreenAnimation] = useState("#00FF00");

  const [redMain, setRedMain] = useState("#FF0000");
  const [redAnimation, setRedAnimation] = useState("#FF8B8B");

  const [yellowMain, setYellowMain] = useState("#FFFF00");
  const [yellowAnimation, setYellowAnimation] = useState("#FFFF57");

  const [blueMain, setBlueMain] = useState("#0089FF");
  const [blueAnimation, setBlueAnimation] = useState("#77D1FF");

  const [orangeMain, setOrangeMain] = useState("#FFB300");
  const [orangeAnimation, setOrangeAnimation] = useState("#FFBE28");

  return (
    <>
      <NoteContext.Provider
        value={{
          main: greenMain,
          animation: greenAnimation,
          setMain: setGreenMain,
          setAnimation: setGreenAnimation,
        }}
      >
        <NoteCard
          id="green"
          title="Green Note"
          mainLabel="NOTE_GREEN"
          animationLabel="NOTE_ANIM_GREEN"
        />
      </NoteContext.Provider>

      <NoteContext.Provider
        value={{
          main: redMain,
          animation: redAnimation,
          setMain: setRedMain,
          setAnimation: setRedAnimation,
        }}
      >
        <NoteCard
          id="red"
          title="Red Note"
          mainLabel="NOTE_RED"
          animationLabel="NOTE_ANIM_RED"
        />
      </NoteContext.Provider>

      <NoteContext.Provider
        value={{
          main: yellowMain,
          animation: yellowAnimation,
          setMain: setYellowMain,
          setAnimation: setYellowAnimation,
        }}
      >
        <NoteCard
          id="yellow"
          title="Yellow Note"
          mainLabel="NOTE_YELLOW"
          animationLabel="NOTE_ANIM_YELLOW"
        />
      </NoteContext.Provider>

      <NoteContext.Provider
        value={{
          main: blueMain,
          animation: blueAnimation,
          setMain: setBlueMain,
          setAnimation: setBlueAnimation,
        }}
      >
        <NoteCard
          id="blue"
          title="Blue Note"
          mainLabel="NOTE_BLUE"
          animationLabel="NOTE_ANIM_BLUE"
        />
      </NoteContext.Provider>

      <NoteContext.Provider
        value={{
          main: orangeMain,
          animation: orangeAnimation,
          setMain: setOrangeMain,
          setAnimation: setOrangeAnimation,
        }}
      >
        <NoteCard
          id="orange"
          title="Orange Note"
          mainLabel="NOTE_ORANGE"
          animationLabel="NOTE_ANIM_ORANGE"
        />
      </NoteContext.Provider>
    </>
  );
};

export default NoteEditor;
