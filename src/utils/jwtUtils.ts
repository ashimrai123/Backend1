import jwt from 'jsonwebtoken';

const JWT_SECRET = 'theKey'; 
const jwtUtils = {
  generateToken: (userId: string) => {
    // Create a JWT with the user's unique identifier (userID) as the payload
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
  },
};

export default jwtUtils;
