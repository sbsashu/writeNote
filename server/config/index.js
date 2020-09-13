require('dotenv').config();

export const config = {
        PORT: process.env.PORT,
        DBURL: process.env.DBURL || 'mongodb://localhost:27017/notes'
}