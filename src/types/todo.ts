export type TodoData = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export type TodoCreateData = {
  todo: string;
};

export type TodoUpdateData = {
  todo: string;
  isCompleted?: boolean;
};
