
export interface Service {
  id: number;
  title: string;
  description: string;
  points: string[];
  outcome: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
  challenges: string[];
  howWeHelp: string[];
}

export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
}
