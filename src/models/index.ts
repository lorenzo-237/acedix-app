export type Project = {
  id: number;
  name: string;
  description: string;
  versions?: Version[];
  createdById: number;
  createdAt: Date;
  updatedById: number;
  updatedAt: Date;
  lastDate?: Date;
  isFavorite: boolean;
  users?: {
    id: number;
    username: string;
    email: string;
  }[];
};

export type Version = {
  id: number;
  name: string;
  description: string;
  project_id: number;
  project?: Project;
  createdById: number;
  createdAt: Date;
  updatedById: number;
  updatedAt: Date;
};
