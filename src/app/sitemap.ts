import { MetadataRoute } from 'next';
import { projects } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ankitsaini.vercel.app';

    const projectUrls: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${baseUrl}/projects/${p.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...projectUrls,
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/timeline`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];
}