import jwt from 'jsonwebtoken';
import { JWT_SECRET, NODE_ENV } from '../config/envVars.js';



const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({ id: userId },
    JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token,
       
        { maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: NODE_ENV !== 'development',
            sameSite: 'None'
        });
  return token;
}
export default generateTokenAndCookie;