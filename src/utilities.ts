export function measureExecutionTime(callback: () => void): number {
    let sum = 0;
    for (let i = 0; i < 200; i++) {
        const startTime = performance.now();
        callback();
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        sum += executionTime;
    }
    return sum / 100;
}
