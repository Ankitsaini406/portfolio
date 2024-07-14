import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '@/lib/model/userModel';
import connectToDatabase from '@/lib/mongoose/mongoose';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest,) {
    const { id } = req.query;

    await connectToDatabase();

    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return NextResponse.json({ status: 404, message: 'User not found' });
        }
        return NextResponse.json({ status: 200, data: user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}

export async function PUT(req: NextApiRequest) {
    const { id } = req.query;

    await connectToDatabase();

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ status: 404, message: 'User not found' });
        }
        return NextResponse.json({ status: 200, data: updatedUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ status: 400, message: 'ID parameter is missing' });
    }

    await connectToDatabase();

    try {
        const deletedUser = await UserModel.findByIdAndDelete(id).lean();

        if (!deletedUser) {
            return res.status(404).json({ status: 404, message: 'User not found' });
        }

        return res.status(200).json({ status: 200, message: 'User deleted successfully' });
    } catch (error) {
        console.log('Error deleting user:', error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
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