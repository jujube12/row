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
export function duringTime(unixTime: number): { min: number, sec: number } {
    let time = unixTime / 60
    let minutes = Math.trunc(time)
    let second = Number((time % 1 * 60).toFixed(3))
    return { min: minutes, sec: second }
}

export function gameDate(unixTime: number): string {
    const now = new Date();
    const game = new Date(unixTime);
    const diff = now.getTime() - game.getTime()
    let result: string = ''
    if (diff > (30 * 24 * 60 * 60 * 1000)) {
        result = '오래전'
    } else if (diff >= (24 * 60 * 60 * 1000)) {
        result = Math.floor(diff / (24 * 60 * 60 * 1000)) + '일 전'
    } else if (diff < (24 * 60 * 60 * 1000) && diff > (60 * 60 * 1000)) {
        result = Math.floor(diff / (60 * 60 * 1000)) + '시간 전'
    } else if (diff < (60 * 60 * 1000)) {
        result = Math.floor(diff / (60 * 60 * 1000)) + '분 전'
    }
    return result
}