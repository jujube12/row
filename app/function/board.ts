// 글 작성 시간
export function writeDate(date: number) {
    if (date == undefined) {
        return '오래 전';
    } else {
        let now = new Date();
        let ago = new Date(date);
        if (now.getFullYear() == ago.getFullYear() && now.getMonth() == ago.getMonth() && now.getDate() == ago.getDate()) {
            let len = ago.getMinutes().toString().length == 1 ? '0' : ''
            return ago.getHours() + ":" + len + ago.getMinutes();
        } else {
            return ago.getMonth() + 1 + "/" + ago.getDate();
        }
    }
}
// 글 수정 여부
export function unixDate(date: number | undefined, editDate: number | undefined) {
    if (date == undefined) {
        return ''
    } else {
        let writeDate = new Date(date);
        let edit = editDate ? ' (수정됨)' : '';
        return writeDate.toLocaleDateString() + ' ' + writeDate.getHours() + ':' + writeDate.getMinutes() + edit;
    }
}