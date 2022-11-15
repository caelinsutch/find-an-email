import { z} from 'zod';

export type FindEmail = {
  firstName: string;
  lastName: string;
  domain: string;
}

export const findEmailSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  domain: z.string(),
});
