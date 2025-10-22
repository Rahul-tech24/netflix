
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndCookie from '../utils/generateToken.js';

const signup = async (req, res) => {
  try {
      const { username, email, password } = req.body;
      
      if (!username || !email || !password) {
          return res.status(400).json({ message: 'All fields are required.' });
      }

      if(password.length < 6) {
          return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
          return res.status(400).json({ message: 'Invalid email format.' });
      }

      const existingUserByEmail = await User.findOne({ email });
      const existingUserByUsername = await User.findOne({ username });

      if (existingUserByEmail) {
          return res.status(409).json({ message: 'User with this email already exists.' });
      }

      if (existingUserByUsername) {
          return res.status(409).json({ message: 'User with this username already exists.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      generateTokenAndCookie(newUser._id, res);

      res.status(201).json({ 
          message: 'User registered successfully.', 
          user: {
              id: newUser._id,
              username: newUser.username,
              email: newUser.email,
              image: newUser.image,
              createdAt: newUser.createdAt
          }
      });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
      
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    generateTokenAndCookie(user._id, res);
      
    res.status(200).json({ 
        message: 'User logged in successfully.', 
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            image: user.image
        }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};


const logout = async (req, res) => {
    try {
    res.clearCookie('token');   
    res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export { signup, login, logout };