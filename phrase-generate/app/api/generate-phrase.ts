// pages/api/generate-phrase.ts
import { NextApiRequest, NextApiResponse } from 'next'; // Importamos los tipos para el handler de Next.js

// Definimos los arrays de sujetos y predicados
const subjects: string[] = ["The dog", "The turtle", "My friend", "Sebastian"];
const predicates: string[] = ["runs fast", "is very wise", "loves coding", "sings poorly"];

// Función para obtener un elemento aleatorio de un array
function getRandomElement(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Función para generar una frase aplicando la lógica condicional
function generatePhrase(): string {
    const subject = getRandomElement(subjects);
    const predicate = getRandomElement(predicates);

    if (subject.length > 8) {
        return `${subject} is intelligent and ${predicate}`;
    }

    if (predicate.includes("coding")) {
        return `${subject} ${predicate}!`;
    }

    return `${subject} ${predicate}`;
}

// Handler para la API con tipado de Next.js
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const phrase = generatePhrase();
        res.status(200).json({ phrase });
    } else {
        res.setHeader('Allow', ['GET']); // Especificamos los métodos permitidos
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
