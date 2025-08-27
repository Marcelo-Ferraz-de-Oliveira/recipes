declare global {
    interface Window {
        env?: {
            production?: boolean;
            apiBaseUrl?: string;
        };
    }
}

export const environment = {
    production: window.env?.production,
    apiBaseUrl: window.env?.apiBaseUrl,
};