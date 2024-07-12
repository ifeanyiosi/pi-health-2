"use client";

import * as z from "zod";

export const joinCommunitySchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().min(2).max(50),
});
