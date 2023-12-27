import * as z from 'zod';

export const createProjectSchema = z.object({
  name: z.string().min(5, {
    message: 'Name must be at least 5 characters.',
  }),
  description: z.string(),
});

export type TCreateProjectSchema = z.infer<typeof createProjectSchema>;
