import * as fs from 'node:fs';
import * as path from 'node:path';

async function scanAlbums() {
  const albumsDir = path.join(process.cwd(), "public/images/albums");
  const albums = [];
  if (!fs.existsSync(albumsDir)) {
    console.warn("相册目录不存在:", albumsDir);
    return [];
  }
  const albumFolders = fs.readdirSync(albumsDir, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
  for (const folder of albumFolders) {
    const albumPath = path.join(albumsDir, folder);
    const album = await processAlbumFolder(albumPath, folder);
    if (album) {
      albums.push(album);
    }
  }
  return albums;
}
async function processAlbumFolder(folderPath, folderName) {
  const infoPath = path.join(folderPath, "info.json");
  if (!fs.existsSync(infoPath)) {
    console.warn(`相册 ${folderName} 缺少 info.json 文件`);
    return null;
  }
  const infoContent = fs.readFileSync(infoPath, "utf-8");
  let info;
  try {
    info = JSON.parse(infoContent);
  } catch (e) {
    console.error(`相册 ${folderName} 的 info.json 格式错误:`, e);
    return null;
  }
  const isExternalMode = info.mode === "external";
  let photos = [];
  let cover;
  if (isExternalMode) {
    if (!info.cover) {
      console.warn(`相册 ${folderName} 外链模式缺少 cover 字段`);
      return null;
    }
    cover = info.cover;
    photos = processExternalPhotos(info.photos || [], folderName);
  } else {
    const coverPath = path.join(folderPath, "cover.jpg");
    if (!fs.existsSync(coverPath)) {
      console.warn(`相册 ${folderName} 缺少 cover.jpg 文件`);
      return null;
    }
    cover = `/images/albums/${folderName}/cover.jpg`;
    photos = scanPhotos(folderPath, folderName);
  }
  if (info.hidden === true) {
    console.log(`相册 ${folderName} 已设置为隐藏，跳过显示`);
    return null;
  }
  return {
    id: folderName,
    title: info.title || folderName,
    description: info.description || "",
    cover,
    date: info.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    location: info.location || "",
    tags: info.tags || [],
    layout: info.layout || "grid",
    columns: info.columns || 3,
    photos
  };
}
function scanPhotos(folderPath, albumId) {
  const photos = [];
  const files = fs.readdirSync(folderPath);
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".svg",
      ".avif",
      ".bmp",
      ".tiff",
      ".tif"
    ].includes(ext) && file !== "cover.jpg";
  });
  imageFiles.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    const { baseName, tags } = parseFileName(file);
    photos.push({
      id: `${albumId}-photo-${index}`,
      src: `/images/albums/${albumId}/${file}`,
      alt: baseName,
      title: baseName,
      tags,
      date: stats.mtime.toISOString().split("T")[0]
    });
  });
  return photos;
}
function processExternalPhotos(externalPhotos, albumId) {
  const photos = [];
  externalPhotos.forEach((photo, index) => {
    if (!photo.src) {
      console.warn(`相册 ${albumId} 的第 ${index + 1} 张照片缺少 src 字段`);
      return;
    }
    photos.push({
      id: photo.id || `${albumId}-external-photo-${index}`,
      src: photo.src,
      thumbnail: photo.thumbnail,
      alt: photo.alt || photo.title || `Photo ${index + 1}`,
      title: photo.title,
      description: photo.description,
      tags: photo.tags || [],
      date: photo.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      location: photo.location,
      width: photo.width,
      height: photo.height
      // camera: photo.camera,
      // lens: photo.lens,
      // settings: photo.settings,
    });
  });
  return photos;
}
function parseFileName(fileName) {
  const parts = path.basename(fileName, path.extname(fileName)).split("_");
  if (parts.length > 1) {
    const baseName2 = parts.slice(0, -2).join("_");
    const tags = parts.slice(-2);
    return { baseName: baseName2, tags };
  }
  const baseName = path.basename(fileName, path.extname(fileName));
  return { baseName, tags: [] };
}

export { scanAlbums };
