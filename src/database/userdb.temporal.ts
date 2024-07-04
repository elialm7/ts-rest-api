
export interface TemporalCompleteUser {
    userid:number, 
    username:string, 
    password:string, 
    email:string
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

  public  userExists(username:string, pass:string): TemporalCompleteUser | undefined {
    return this.users.find((users)=>{
       if((users.username === username) && (users.password === pass)){
        return users;
       }
    });
  }

}