export const HOST = import.meta.env.VITE_API_URL;

// Checking for errors their catch and output.
// For a more flexible structure
export function request(callback: () => void) {
    try {
        return callback();
    } catch (err) {
        console.error(err, ' @request');
    }
}
