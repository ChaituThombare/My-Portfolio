import { contacts, projects, skills } from "@shared/schema";
import type { Contact, InsertContact, Project, InsertProject, Skill, InsertSkill } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Project methods
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;

  // Skill methods
  createSkill(skill: InsertSkill): Promise<Skill>;
  getSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
}

export class DatabaseStorage implements IStorage {
  // Contact methods
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contacts).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  // Project methods
  async createProject(project: InsertProject): Promise<Project> {
    const [result] = await db.insert(projects).values(project).returning();
    return result;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  // Skill methods
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [result] = await db.insert(skills).values(skill).returning();
    return result;
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return await db.select().from(skills).where(eq(skills.category, category));
  }
}

export const storage = new DatabaseStorage();