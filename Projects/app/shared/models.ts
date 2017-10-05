export interface IUser {
    Id: number,
    Name: string,
    UserName: string,
    Password: string,
}

export interface ITaskStatus {
    Id: number,
    Name: string,
}

export interface IProject {
    Id: number,
    Name: string,
    Description: string,
    StartDate: Date,
    EndDate: Date,
    Tasks: ITask[],
    Users: ITask[],
}

export interface ITask {
    Id: number,
    Title: string,
    Description: string,
    StartDate: Date,
    EndDate: Date,
    Creator: IUser,
    AssignedUser: IUser,
    Status: ITaskStatus,
}