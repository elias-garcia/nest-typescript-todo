
export interface IToDo {
  id: number;
  description: string;
  completed: boolean;
};

export function isToDo(obj: any): obj is IToDo {
  return typeof obj.description === "string" && typeof obj.status === "boolean";
}
