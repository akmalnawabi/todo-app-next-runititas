import { PrismaClient } from "@prisma/client";
import { sql } from '@vercel/postgres';

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const db = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// Helper function to execute raw SQL queries
export async function executeQuery(query: string, params: any[] = []) {
    try {
        const result = await sql.query(query, params);
        return result;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}
