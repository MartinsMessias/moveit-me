import { createContext, ReactNode, useState } from 'react';
import { PassThrough } from 'stream';



interface ChallengesContexData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}


interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContexData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge(){
    PassThrough
  }

  return (
    <ChallengesContext.Provider value={{ level, currentExperience, challengesCompleted,levelUp, startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  )
}