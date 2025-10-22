import jwt from 'jsonwebtoken';
import { JWT_SECRET, NODE_ENV } from '../config/envVars.js';



const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({ userId: userId },
    JWT_SECRET, { expiresIn: '1d' });
    res.cookie('jwt-netflix', token,
       
        { maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: NODE_ENV === 'production' ? 'None' : 'Lax'
        });
  return token;
}
export default generateTokenAndCookie;