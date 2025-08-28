export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_NPI ?? "";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL_NPI ?? "";
export const credoPaymentBaseUrl = process.env.NEXT_PUBLIC_CREDO_PAYMENT_GATEWAY_URL ?? "https://pay.credodemo.com/v4";

export const remoteApiUrl = process.env.NEXT_PUBLIC_REMOTE_API_URL_NPI ?? "";
export const lmsLoginUrl = process.env.NEXT_PUBLIC_LMS_LOGIN_URL_NPI ?? "";

export const accessTokenSecret =
	process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET_NPI ?? "";
export const refreshTokenSecret =
	process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET_NPI ?? "";

export const sessionSecret = process.env.NEXT_PUBLIC_SESSION_SECRET_NPI ?? "";
export const sessionPassword =
	process.env.NEXT_PUBLIC_SESSION_PASSWORD_NPI ?? "";

export const clientId = process.env.NEXT_PUBLIC_CLIENT_ID_NPI ?? "";
export const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET_NPI ?? "";

const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET_NPI;
export const encodedKey = new TextEncoder().encode(secretKey);
export const SITE_NAME = "UNIZIK BUSINESS SCHOOL LMS"

export enum Roles {
	ADMIN = "ADMIN",
	STUDENT = "STUDENT",
	TEACHER = "TEACHER",
	MANAGER = "MANAGER",
}

export const APPLICATION_FEE = 37000;
export const ACCEPTANCE_FEE = 30000;
export const FULL_TUITION_FEE = 195000;
