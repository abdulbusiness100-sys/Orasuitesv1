import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { randomUUID } from "crypto";

const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  service: z.string().optional().nullable(),
  message: z.string().min(1),
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = {
        ...validatedData,
        id: randomUUID(),
        createdAt: new Date(),
      };
      return res.status(201).json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(400)
          .json({ error: "Invalid form data", details: error.errors });
      }
      return res.status(500).json({ error: "Failed to submit form" });
    }
  }

  if (req.method === "GET") {
    return res.json([]);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
