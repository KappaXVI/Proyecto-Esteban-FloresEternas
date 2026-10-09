const sharp = require('sharp');

async function extractWineColor() {
  try {
    const image = sharp('public/images/Logotipo Flores Eternas con Monograma LP.png');
    const { dominant } = await image.stats();
    console.log('Dominant color (RGB):', dominant);
    
    const r = dominant.r.toString(16).padStart(2, '0');
    const g = dominant.g.toString(16).padStart(2, '0');
    const b = dominant.b.toString(16).padStart(2, '0');
    const hex = `#${r}${g}${b}`.toUpperCase();
    console.log('Hex:', hex);
    
    const pixels = await image.raw().toBuffer({ resolveWithObject: true });
    const { data, info } = pixels;
    
    let winePixels = 0;
    let rSum = 0, gSum = 0, bSum = 0;
    const total = info.width * info.height;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      
      if (a > 128) {
        const isWine = r > 80 && r < 180 && g < 60 && b < 60 && r > g && r > b;
        if (isWine) {
          winePixels++;
          rSum += r;
          gSum += g;
          bSum += b;
        }
      }
    }
    
    if (winePixels > 0) {
      const avgR = Math.round(rSum / winePixels);
      const avgG = Math.round(gSum / winePixels);
      const avgB = Math.round(bSum / winePixels);
      const wineHex = `#${avgR.toString(16).padStart(2, '0')}${avgG.toString(16).padStart(2, '0')}${avgB.toString(16).padStart(2, '0')}`.toUpperCase();
      console.log('Wine color (filtered):', wineHex);
      console.log('RGB:', avgR, avgG, avgB);
      console.log('Wine pixels found:', winePixels, '/', total);
      return wineHex;
    }
    
    console.log('No wine pixels found, using dominant');
    return hex;
  } catch (error) {
    console.error('Error:', error.message);
    return '#6B0A0F';
  }
}

extractWineColor().then(color => {
  console.log('\nFINAL WINE COLOR:', color);
});