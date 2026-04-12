import { z } from 'zod';

export const UserLoginSchema = z.object({
  oauthToken: z.string()
});

export type UserLoginDto = z.infer<typeof UserLoginSchema>;
