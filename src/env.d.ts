export {};

declare global {
    const __VERSION__: string;

    namespace NodeJS {
        interface ProcessEnv {
            HOME?: string;
        }
    }

    interface Window {
        siyuan: any;
        require: any;
        Lute: any;
    }
}
