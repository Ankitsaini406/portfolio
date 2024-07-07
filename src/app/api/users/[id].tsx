import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '@/lib/model/userModel';
import connectToDatabase from '@/lib/mongoose/mongoose';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    await connectToDatabase();

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    await connectToDatabase();

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    await connectToDatabase();

    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

// export async function hendleById(req: NextApiRequest, res: NextApiResponse) {
//     const { id } = req.query;

//     await connectToDatabase();

//     switch (req.method) {
//         case 'GET':
//             try {
//                 const user = await UserModel.findById(id);
//                 if (!user) {
//                     return res.status(404).json({ message: 'User not found' });
//                 }
//                 return res.status(200).json(user);
//             } catch (error) {
//                 console.error(error);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }

//         case 'PUT':
//             try {
//                 const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
//                 if (!updatedUser) {
//                     return res.status(404).json({ message: 'User not found' });
//                 }
//                 return res.status(200).json(updatedUser);
//             } catch (error) {
//                 console.error(error);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }

//         case 'DELETE':
//             try {
//                 const deletedUser = await UserModel.findByIdAndDelete(id);
//                 if (!deletedUser) {
//                     return res.status(404).json({ message: 'User not found' });
//                 }
//                 return res.status(200).json({ message: 'User deleted successfully' });
//             } catch (error) {
//                 console.error(error);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }

//         default:
//             res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
//             return res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }