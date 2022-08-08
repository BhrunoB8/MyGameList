import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {

  constructor() { }
   userInfo: any = ''
   favoriteUserGames: any[] = []

  setUserInfo(info: any) {
    this.userInfo = info
  }

  getUserInfo() {
    return this.userInfo;
  }

  setFavoriteUserGames(info: any) {
    this.favoriteUserGames = info
  }

  getFavoriteUserGames() {
    return this.favoriteUserGames;
  }

  clear(){
    this.userInfo = ''
    this.favoriteUserGames = []
  }


}
