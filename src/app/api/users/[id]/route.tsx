import { NextApiRequest, NextApiResponse } from 'next';
import UserModel from '@/lib/model/userModel';
import connectToDatabase from '@/lib/mongoose/mongoose';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest, content: any) {
    const { searchParams } = new URL(req.url);
    const id = content.params.id;

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

export async function PUT(req: NextRequest, content: any) {
    const { searchParams } = new URL(req.url);
    const id = content.params.id;

    await connectToDatabase();

    try {
        const body = await req.json();
        const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ status: 404, message: 'User not found' });
        }
        return NextResponse.json({ status: 200, data: updatedUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}

export async function DELETE(req: NextRequest, content: any) {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = content.params.id;

    if (!id) {
        return NextResponse.json({ status: 400, message: 'Invalid user ID' });
    }

    if (!ObjectId.isValid(id)) {
        return NextResponse.json({ status: 400, message: 'Invalid Object user ID' });
    }

    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return NextResponse.json({ status: 404, message: 'User not found' });
        }
        return NextResponse.json({ status: 200, message: 'User deleted successfully' });
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
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