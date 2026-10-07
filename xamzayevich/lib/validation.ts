import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters).").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  subject: z.string().trim().min(3, "Enter a subject (at least 3 characters).").max(120),
  message: z.string().trim().min(10, "Write a message of at least 10 characters.").max(4000),
  website: z.string().max(0).optional(), // honeypot — must stay empty
  "cf-turnstile-response": z.string().optional(),
});
export type ContactInput = z.infer<typeof contactSchema>;
