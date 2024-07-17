"use client";

import React, { useState } from 'react';
import style from '@/styles/admin.module.css';
import Image from 'next/image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ProjectDetails = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);

            // Ensure the state update happens outside the rendering phase
            setTimeout(() => {
                setSelectedImage(imageUrl);
            }, 0);
        }
    };

    const handleCancel = () => {
        setSelectedImage(null);
        setTitle('');
        setDescription('');
    };

    return (
        <form className={style.projectdetails}>
            <div className={style.imgbox}>
                {selectedImage ? (
                    <Image src={selectedImage} alt="Selected" className={style.previewImage} width={200} height={200} />
                ) : (
                    <AddPhotoAlternateIcon />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={style.fileInput}
                />
            </div>
            <input
                className={style.inputbox}
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className={`${style.inputbox} ${style.desbox}`}
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className={style.btnflex}>
                <button
                    type="button"
                    className={`${style.submitbutton} ${style.cancolor}`}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button className={`${style.submitbutton} ${style.subcolor}`}>Submit</button>
            </div>
        </form>
    );
};

export default ProjectDetails;
