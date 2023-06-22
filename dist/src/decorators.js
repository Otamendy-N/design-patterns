export function chuchu(target, _context) {
    function replacementMethod(...args) {
        console.log("[Info] Train ready to go! ChuChuu!!");
        const result = target.call(this, ...args);
        return result;
    }
    return replacementMethod;
}
