export function writeDate(date: number) {
    if (date == undefined) {
        return '오래 전';
    } else {
        let now = new Date();
        let ago = new Date(date);
        if (now.getFullYear() == ago.getFullYear() && now.getDate() == ago.getDate()) {
            return ago.getHours() + ":" + ago.getMinutes();
        } else {
            return ago.getMonth() + ":" + ago.getDate();
        }
    }
}

export function unixDate(date: number | undefined, editDate: number | undefined) {
    if (date == undefined) {
        return ''
    } else {
        let writeDate = new Date(date);
        let edit = editDate && ' (수정됨)'
        return writeDate.toLocaleDateString() + ' ' + writeDate.getHours() + ':' + writeDate.getMinutes() + edit;
    }
}