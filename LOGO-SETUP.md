# Setup Logo dan Tanda Tangan

## File yang Diperlukan

Untuk menggunakan invoice generator ini, Anda perlu menyediakan 2 file gambar:

### 1. Logo Perusahaan (`company-logo.png`)
- **Nama file**: `company-logo.png`
- **Format**: PNG (dengan background transparan lebih baik)
- **Ukuran optimal**: 200x60 pixel atau rasio 3:1
- **Lokasi**: Letakkan di folder yang sama dengan `index.html`

### 2. Tanda Tangan (`signature.png`)
- **Nama file**: `signature.png`
- **Format**: PNG (dengan background transparan)
- **Ukuran optimal**: 300x120 pixel atau rasio 2.5:1
- **Lokasi**: Letakkan di folder yang sama dengan `index.html`

## Cara Mengganti Logo dan Tanda Tangan

1. **Siapkan file gambar** dengan nama dan format yang sesuai
2. **Copy file** ke folder yang sama dengan `index.html`
3. **Refresh halaman** di browser untuk melihat perubahan

## Tips untuk Hasil Terbaik

### Logo Perusahaan:
- Gunakan format PNG dengan background transparan
- Pastikan logo terlihat jelas pada ukuran kecil
- Hindari logo yang terlalu detail atau rumit
- Ukuran file sebaiknya di bawah 100KB

### Tanda Tangan:
- Scan tanda tangan dengan resolusi tinggi (300 DPI)
- Hapus background putih agar transparan
- Pastikan tanda tangan terlihat jelas dan profesional
- Ukuran file sebaiknya di bawah 50KB

## Contoh Struktur Folder

```
invoice-generator/
├── index.html
├── invoice-styles.css
├── invoice-functions.js
├── company-logo.png      ← Logo perusahaan Anda
├── signature.png         ← Tanda tangan Anda
└── README.md
```

## Troubleshooting

**Logo tidak muncul?**
- Pastikan nama file tepat: `company-logo.png`
- Cek apakah file ada di folder yang sama dengan `index.html`
- Refresh browser dengan Ctrl+F5

**Logo terlalu kecil/besar?**
- Edit file `invoice-styles.css`
- Cari bagian logo dan ubah ukuran `height` atau `width`

**Tanda tangan tidak muncul?**
- Pastikan nama file tepat: `signature.png`
- Pastikan background gambar transparan
- Cek ukuran file tidak terlalu besar

## Format File yang Didukung

- **PNG** (Recommended) - Mendukung transparansi
- **JPG** - Untuk foto, tapi akan ada background putih
- **GIF** - Mendukung transparansi tapi kualitas terbatas

---

**Catatan**: File logo dan tanda tangan tidak disertakan dalam template ini karena alasan privasi dan hak cipta. Anda harus menyediakan file gambar Anda sendiri.