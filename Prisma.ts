// so PrismaClient is used to interact with the database.
import {PrismaClient} from "@prisma/client";

// creating a function which return an PrismaClient instance - means creating a new connection to database.
const prismaClientSinglton = ()=>{
    return new PrismaClient();
};

// just like creating an interface in TS for global object.
// see now whatever is the type of global is overwritten by unknown means global is of the type unknown
// after setting the global to unknown, am defining a variable called prisma (Type Safty)
// prisma variable contains connection to database.
// so now global object contains prisma variable.
// if not mentioned it is ok in javascript but not in TS.
const globalForPrisma = global as unknown as { 
    prisma: PrismaClient | undefined 
};

// if globalForPrisma.prisma does not contains a connection to DB, prismaClientSinglton() function will provide a connection to DB, which is defined above.
const prisma = globalForPrisma.prisma ?? prismaClientSinglton();

export default prisma;
