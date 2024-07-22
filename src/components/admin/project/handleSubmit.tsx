import toast from 'react-hot-toast';

export async function handleSubmit(event: any) {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData(event.target as HTMLFormElement);

    try {
        const response = await fetch('/api/projects', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            toast.success('Project successfully created!', {
                duration: 5000,
            });

            // Redirect after successful creation
            setTimeout(() => {
                window.location.href = '/projects'; // Update to the desired redirect URL
            }, 1000);
        } else {
            const errorData = await response.json();
            toast.error(`Error: ${errorData.error}`, {
                duration: 5000,
            });
        }
    } catch (error) {
        toast.error(`An unexpected error occurred. Please try again. ${error}`, { duration: 5000 });
    }
}
