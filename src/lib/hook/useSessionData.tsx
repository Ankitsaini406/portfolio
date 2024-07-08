import { useState, useEffect } from 'react';
import { getSession, SessionUser } from '@/lib/cookies/actions';

const useSessionData = (): SessionUser | null => {
    const [user, setUser] = useState<SessionUser | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sessionData = await getSession();
                setUser(sessionData);
            } catch (error) {
                console.error('Error fetching session data:', error);
                setUser(null); // Reset user state on error
            }
        };

        // Invoke fetchData only if user state is null to prevent unnecessary calls
        if (!user) {
            fetchData();
        }

        // No dependencies in the array ensures this effect runs only once on mount
        // and cleans up the effect properly by resetting user state
        return () => setUser(null);
    }, []); // Empty dependency array ensures effect runs only once on mount

    return user;
};

export default useSessionData;
