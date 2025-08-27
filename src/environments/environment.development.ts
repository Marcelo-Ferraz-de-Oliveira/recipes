declare global {
    interface Window {
        env?: {
            production?: boolean;
            apiBaseUrl?: string;
        };
    }
}

export const environment = {
    production: window.env?.production || false,
    apiBaseUrl: window.env?.apiBaseUrl || 'https://66f863922a683ce9730f60fc.mockapi.io',
};
