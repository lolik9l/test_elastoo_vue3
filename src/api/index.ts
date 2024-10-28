export const HOST = import.meta.env.VITE_API_URL;

export function request(callback: () => void) {
    try {
        return callback();
    } catch (err) {
        console.error(err, ' @request');
    }
}
