const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImages = async () => {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) continue;
    
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
    
    const baseName = path.basename(file, ext);
    const originalSize = stat.size;
    
    console.log(`\nProcessing: ${file} (${(originalSize / 1024).toFixed(2)} KB)`);
    
    try {
      // Create optimized JPG (quality 80, max width 1200px for hero images, 400px for profile photos)
      const isProfilePhoto = ['anna', 'alicia', 'agata', 'justyna', 'magdalena', 'monika'].some(name => baseName.includes(name));
      const maxWidth = isProfilePhoto ? 400 : 1200;
      
      // Optimized JPG
      const jpgOutput = path.join(outputDir, `${baseName}.jpg`);
      await sharp(inputPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(jpgOutput);
      
      const jpgSize = fs.statSync(jpgOutput).size;
      console.log(`  → JPG: ${(jpgSize / 1024).toFixed(2)} KB (${((1 - jpgSize/originalSize) * 100).toFixed(1)}% smaller)`);
      
      // WebP version (even smaller)
      const webpOutput = path.join(outputDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(maxWidth, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpOutput);
      
      const webpSize = fs.statSync(webpOutput).size;
      console.log(`  → WebP: ${(webpSize / 1024).toFixed(2)} KB (${((1 - webpSize/originalSize) * 100).toFixed(1)}% smaller)`);
      
    } catch (err) {
      console.error(`  Error processing ${file}:`, err.message);
    }
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log(`Optimized images saved to: ${outputDir}`);
};

optimizeImages();
