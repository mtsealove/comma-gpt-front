declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_ENDPOINT: string;
    }
}

declare interface Conversation {
    question: string;
    answer?: string;
}
