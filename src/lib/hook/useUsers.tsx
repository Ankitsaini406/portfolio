import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useUsers = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users/allusers');
                const result = await response.json();
                if (result.status === 200) {
                    setUsers(result.data);
                } else {
                    setError(result.message);
                }
            } catch (err) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const deleteUser = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success('User deleted successfully');
                setUsers(users.filter((user) => user._id !== id));
            } else {
                const result = await response.json();
                toast.error(result.message || 'Failed to delete user');
            }
        } catch (error) {
            console.log('This is error :', error);
            toast.error(`Failed to delete user : ${error}`);
        }
    };

    return { users, loading, error, deleteUser };
};

export default useUsers;
