export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  emails: string[];
  phoneNumbers: number[];
  isActive: boolean;
  logs?: ILog[];
}

export interface ILog {
  date: Date;
  action: string;
}
