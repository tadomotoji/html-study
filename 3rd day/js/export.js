function fibonacci(f) {
    if (f <= 2) { return 1; }
    else {
        return fibonacci(f - 1) + fibonacci(f - 2);
    }
}
export default fibonacci;
