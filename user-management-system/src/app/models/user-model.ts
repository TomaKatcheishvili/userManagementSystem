export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  isActive: boolean;
  logs: ILog[];
}

export interface ILog {
  date: Date;
  action: string;
}
