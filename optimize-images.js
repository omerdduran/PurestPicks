const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');
const MAX_WIDTH = 800; // Maksimum genişlik
const QUALITY = 80; // WebP kalitesi

// Optimize edilecek büyük görüntüler
const imagesToOptimize = [
  'XBOOM.webp',
  'bauhaus.webp',
  'Phoenix.webp',
  'imporium .webp',
  'waldenmeditate.jpeg',
  'Walden Meditation Cushion + Mat Set  (Optimized).webp'
];

async function optimizeImages() {
  console.log('Görüntü optimizasyonu başlatılıyor...');
  
  for (const imageName of imagesToOptimize) {
    const imagePath = path.join(ASSETS_DIR, imageName);
    
    if (!fs.existsSync(imagePath)) {
      console.log(`${imageName} bulunamadı, atlanıyor.`);
      continue;
    }
    
    const outputName = imageName.includes('(Optimized)') 
      ? imageName 
      : imageName.replace(/\.(webp|jpeg|jpg|png)$/, ' (Optimized).webp');
    
    const outputPath = path.join(ASSETS_DIR, outputName);
    
    try {
      await sharp(imagePath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);
      
      console.log(`${imageName} optimize edildi: ${outputName}`);
      
      // Orijinal dosyayı sil ve optimize edilmiş dosyayı yeniden adlandır
      if (!imageName.includes('(Optimized)')) {
        fs.unlinkSync(imagePath);
        fs.renameSync(outputPath, imagePath);
        console.log(`${imageName} orijinal dosya güncellendi.`);
      }
    } catch (error) {
      console.error(`${imageName} optimize edilirken hata oluştu:`, error);
    }
  }
  
  console.log('Görüntü optimizasyonu tamamlandı.');
}

optimizeImages().catch(console.error); 