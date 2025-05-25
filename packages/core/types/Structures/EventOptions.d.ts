export default interface EventOptions {
    once: boolean;
    run: (...args: any[]) => void;
}
