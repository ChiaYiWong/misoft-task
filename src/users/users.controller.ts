import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userservice:UsersService) {}

//   @Get()
//   getUsers() {
//     return 'Hello';
//   }

  @Post()
  insertUser(
    @Body('username') username:string,
    @Body('fullname') fullname:string,
    @Body('salary') salary:number,
   

  ){
    const userId = this.userservice.insertUser(username,fullname,salary);
    return{
        id : userId,
    };
  }
  @Get()
  getAllUsers(){
    return this.userservice.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string){
    return this.userservice.getUser(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId:string,
    @Param('username') username:string,
    @Param('fullname') fullname:string,
    @Param('salary') salary:number,
  ){

    return this.userservice.updateUser(userId,username,fullname,salary);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId:string){
    this.userservice.deleteUser(userId);
    return "deleted";
  }


}
