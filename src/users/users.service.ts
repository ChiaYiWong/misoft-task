import { Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService{

    private users:User[] = [];

    insertUser(username:string,fullname:string,salary:number){
        const id = uuidv4()
        const newUser = new User (id,username,fullname,salary);
        this.users.push(newUser);
        return id;
    }


    getUsers(){
        return[...this.users];
    }

    getUser(id:string){
        return this.getUserById(id)[0];

    }

    updateUser(
        id:string,
        username:string,
        fullname:string,
        salary:number
    ){
        const [targetUser, index] = this.getUserById(id);

        const nup = {...targetUser,username,fullname,salary};
        const newUser = new User(id,username,fullname,salary)
        this.users[index] = newUser;
        return newUser;
    }

    deleteUser(id:string){
        const [_,index] = this.getUserById(id);
        this.users.splice(index,1);
        
    }


    private getUserById(id:string) : [User, number]{
        const index = this.users.findIndex((u) => u.id === id);
        return [this.users[index],index];
    }




}