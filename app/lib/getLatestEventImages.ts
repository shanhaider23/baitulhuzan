export async function getLatestEventImages(): Promise<{ id: string; url: string }[]> {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
    const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&orderBy=createdTime desc&pageSize=3&fields=files(id,name,mimeType)&key=${API_KEY}`;

    const res = await fetch(url, {
        next: { revalidate: 60 }, // auto refresh every 60 seconds
    });

    if (!res.ok) {
        throw new Error('Failed to fetch event images');
    }

    const data = (await res.json()) as unknown;

    type DriveFile = { id: string; name?: string; mimeType?: string };

    // Validate structure
    if (typeof data !== 'object' || data === null) return [];
    const files = (data as Record<string, unknown>)['files'];
    if (!Array.isArray(files)) return [];

    const isDriveFile = (f: unknown): f is DriveFile => {
        if (typeof f !== 'object' || f === null) return false;
        const r = f as Record<string, unknown>;
        return typeof r['id'] === 'string' && typeof r['mimeType'] === 'string';
    };

    return (files as unknown[])
        .filter(isDriveFile)
        .filter((f) => f.mimeType!.startsWith('image/'))
        .map((f) => ({ id: f.id, url: `https://drive.google.com/uc?id=${f.id}` }));
}
