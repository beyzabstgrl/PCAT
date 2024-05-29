const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

const indexPath = path.join(__dirname, 'public', 'temp', 'index.html');

// Dosya yolunu konsolda yazdırın
console.log('indexPath:', indexPath);

// Dosya var mı diye kontrol edin
if (!fs.existsSync(indexPath)) {
  console.error('Hata: index.html dosyası bulunamadı:', indexPath);
}

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
