export async function retryRequest<T>(operation: (...args: any[]) => Promise<T>, args: any[], attempts: number = 3): Promise<T> {
    for (let i = 0; i < attempts; i++) {
        try {
            return await operation(...args);
        } catch (error) {
            if (i === attempts - 1) 
                throw error
        }
    }
    throw new Error('All retry attempts failed');
}