import { z } from 'zod';

export const UserLoginSchema = z.object({
  code: z.string(),
});

export type UserLoginDto = z.infer<typeof UserLoginSchema>;
