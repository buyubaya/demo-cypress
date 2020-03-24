export class UserInfo {
  constructor(){
    this.idToken = "";

    if(!UserInfo.instance){
      UserInfo.instance = this;
    }

    return UserInfo.instance;
  }

  updateIdToken(newIdToken) {
    this.idToken = newIdToken;
  }

  getIdToken() {
    return this.idToken;
  }
}

const currentUserInfo = new UserInfo();


export default currentUserInfo;