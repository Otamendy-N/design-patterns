export function chuchu<T, A extends any[], R>(
    target: (this: T, ...args: A) => R,
    _context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
) {
    function replacementMethod(this: T, ...args: A): R {
        console.log("[Info] Train ready to go! ChuChuu!!");
        const result = target.call(this, ...args);
        return result;
    }
    return replacementMethod;
}
