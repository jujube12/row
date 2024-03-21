export function matchDate(unixTime: number): date {
    const time = new Date(unixTime);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();

    let obj = {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        day: time.getDate(),
        hours: time.getHours(),
        minutes: time.getMinutes(),
    }
    return obj
}
// 게임 진행 시간
export function duringTime(unixTime: number): { min: number, sec: number } {
    let time = unixTime / 60
    let minutes = Math.trunc(time)
    let second = Number((time % 1 * 60).toFixed(3))
    return { min: minutes, sec: second }
}
// 게임 일시 지난 정도
export function gameDate(unixTime: number): string {
    const now = new Date();
    const game = new Date(unixTime);
    const diff = now.getTime() - game.getTime()
    console.log(diff)
    let result: string = ''
    if (diff >= (30 * 24 * 60 * 60 * 1000)) {
        result = '오래전'  // 30일 이상
    } else if (diff >= (24 * 60 * 60 * 1000) && diff < (30 * 24 * 60 * 60 * 1000)) {  //1일 이상 30일 미만
        result = Math.floor(diff / (24 * 60 * 60 * 1000)) + '일 전'
    } else if (diff < (24 * 60 * 60 * 1000) && diff >= (60 * 60 * 1000)) { //1시간 이상 24시간 미만
        result = Math.floor(diff / (60 * 60 * 1000)) + '시간 전'
    } else if (diff < (60 * 60 * 1000)) {
        result = Math.floor(diff / (60 * 60 * 1000)) + '분 전' //1시간 미만
    }
    return result
}