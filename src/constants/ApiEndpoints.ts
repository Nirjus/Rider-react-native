export const BaseURl = process.env.EXPO_PUBLIC_API_URL!;

const BaseURlWithV1 = `${BaseURl}/api/v1`;

export const userRegistrationUrl = `${BaseURlWithV1}/user/registration`;
export const userVerificationUrl = `${BaseURlWithV1}/user/verify`;
export const userLoginUrl = `${BaseURlWithV1}/user/log-in`;
export const getUserUrl = `${BaseURlWithV1}/user`;
