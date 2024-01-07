import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routers/taskRoutes';
import userRouter from './routers/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(taskRoutes);
app.use(userRouter);

app.listen(PORT,() => {
    console.log(`Server is running on PORT ${PORT}`);
})
