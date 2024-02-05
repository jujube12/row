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