export enum taskState{
  Unassigned,
  Backlog,
  InProgress,
  Review,
  Test,
  Done,
  Blocked,
}

export interface task{
  title: string;
  description: string;
  id?: number;
  status: taskState;
}
