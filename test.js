
const fs = require('fs').promises;
const path = require('path');

async function dummy() {
  const folderPath = 'extensions';
  const files = await fs.readdir(folderPath);
  files.forEach(async (file, ind = 10) => {
    const filePath = path.join(folderPath, file);
    const baseName = path.basename(filePath, '.md');
    const newData = `---\ntitle: '${baseName}' \nweight: ${ind + 11}\n---\n\n`;
    const existingFileData = await fs.readFile(filePath, 'utf8');
    const updatedContent = newData + existingFileData;
    await fs.writeFile(filePath, updatedContent);
  });
}
dummy();