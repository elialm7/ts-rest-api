
export interface TemporalCompleteUser {
    userid:number, 
    username:string, 
    password:string, 
    userInfo:String
};

export class UserInMemoryDatabase {
  private users: Array<TemporalCompleteUser> = [];

  public constructor (){

  }
  public addUser(user: TemporalCompleteUser): void {
    this.users.push(user);
  }

  public  getUserById(userid: number): TemporalCompleteUser | undefined {
    return this.users.find((user) => user.userid === userid);
  }

  public  userExists(userid: number): boolean {
    return this.users.some((user) => user.userid === userid);
  }
}