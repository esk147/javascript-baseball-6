import GameConsole from "./GameConsole";

class User {
  async userPickNum() {
    const userNum = await GameConsole.readLineAsync("숫자를 입력해주세요 : ");

    this.checkUserNum(userNum);
    const numArr = userNum.split("");

    const userNumArr = numArr.map(function (e) {
      return Number(e);
    });

    return userNumArr;
  }

  checkUserNum(user) {
    const setUserNum = new Set(user);
    if (user.length !== 3) {
      throw new Error("[ERROR] 3자리의 숫자를 입력해주세요.");
    }
    if (parseInt(user, 10) !== Number(user)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    if (setUserNum.has("0")) {
      throw new Error("[ERROR] 1~9까지의 숫자만 입력해주세요");
    }
  }
}

export default User;
