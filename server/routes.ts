import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./services/email";

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);

      // Send email notification
      try {
        await sendContactEmail(contact.name, contact.email, contact.message);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails, just log it
      }

      res.json(result);
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  return createServer(app);
}