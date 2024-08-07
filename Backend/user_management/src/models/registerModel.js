import db from './db.js';

export const create = async (user) => {
    const { email, user_name, password } = user;
    const query = 'INSERT INTO user_credintial (email, user_name, password) VALUES (?, ?, ?)';
    const values = [email, user_name, password];

    try {
        const result = await db.execute(query, values);
        return result;
    } catch (error) {
        console.error('Database insertion error:', error.message);
        
    }
};

