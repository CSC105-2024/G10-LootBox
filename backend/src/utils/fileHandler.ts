import { randomUUID } from 'crypto';
import { writeFile } from 'fs/promises';
import path from 'path';

export const saveFile = async (file: File, type: 'profilePic' | 'backgroundImage') => {
  const buffer = await file.arrayBuffer();
  const extension = file.name.split('.').pop() ?? 'png';
  const fileName = `${type}_${randomUUID()}.${extension}`;
  const filePath = path.join('public/uploads', fileName);

  await writeFile(filePath, Buffer.from(buffer));
  return `/uploads/${fileName}`;
};
