type Environment = {
    PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DEMO_MESSAGE: string;
}

export const environment :Environment = {
    PORT: process.env.PORT as string,
    DB_HOST: process.env.DB_HOST as string,
    DB_PORT: process.env.DB_PORT as string,
    DB_USER: process.env.DB_USER as string,
    DB_PASSWORD: process.env.DB_PASSWORD as string,
    DB_NAME: process.env.DB_NAME as string,
    DEMO_MESSAGE : process.env.DEMO_MESSAGE as string,
}