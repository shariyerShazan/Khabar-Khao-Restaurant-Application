import { z } from 'zod';

export const addRoleSchema = z.object({
  role: z.enum(['RIDER', 'CUSTOMER', 'RESTAURANT']).nullable(),
});

export type addRoleDto = z.infer<typeof addRoleSchema>;