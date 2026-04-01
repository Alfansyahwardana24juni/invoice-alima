# Invoice Generator - PT ALIMA AMANAH LOGISTIC

Generator invoice profesional yang dapat disesuaikan untuk PT ALIMA AMANAH LOGISTIC dengan fitur lengkap dan mudah digunakan.

## 🚀 Fitur Utama

### ✅ Yang Sudah Diperbaiki dan Ditambahkan:

1. **Nama Perusahaan Diubah**
   - Dari "SLIP.ID" menjadi "PT ALIMA AMANAH LOGISTIC"
   - Update di semua bagian: header, signature, dan bank account

2. **Panel Kontrol Lengkap**
   - Data Customer (nama, alamat)
   - Data Perusahaan (nama, alamat, telepon, email)
   - Data Bank (2 rekening bank dengan nama pemegang)
   - Pengaturan PPN dan Down Payment

3. **Tabel Item yang Fleksibel** ⭐ **BARU!**
   - **Multi-line Input**: Description dan Condition bisa enter ke baris baru
   - **Textarea**: Input yang lebih nyaman untuk teks panjang
   - Tambah/hapus item dengan mudah
   - Kolom: Deskripsi, Kondisi, Unit, Harga
   - Perhitungan otomatis total dan grand total

4. **Logo dan Tanda Tangan Statis** ⭐ **DIPERBAIKI!**
   - Tidak perlu upload logo lagi
   - Cukup ganti file `company-logo.png` dan `signature.png`
   - Ukuran logo diperbesar agar tidak terlalu kecil
   - Lihat `LOGO-SETUP.md` untuk panduan lengkap

5. **Fitur Pajak dan Pembayaran**
   - PPN dapat diaktifkan/nonaktifkan
   - Persentase PPN dapat disesuaikan
   - Down Payment dapat diatur
   - Perhitungan Grand Total otomatis

6. **Template System**
   - Simpan template perusahaan dalam format JSON
   - Load template yang sudah disimpan
   - Memudahkan penggunaan berulang

7. **Export dan Print**
   - Export ke JPG dengan resolusi tinggi (1080x1050)
   - Print ke PDF
   - Nama file otomatis sesuai nomor invoice

## 📁 Struktur File

```
├── index.html              # File utama HTML
├── invoice-styles.css      # Styling CSS terpisah
├── invoice-functions.js    # JavaScript functions
├── template-example.json   # Contoh template perusahaan
├── company-logo.png       # Logo perusahaan (Anda harus sediakan)
├── signature.png          # Tanda tangan (Anda harus sediakan)
├── LOGO-SETUP.md          # Panduan setup logo dan tanda tangan
└── README.md              # Dokumentasi ini
```

## 🎯 Cara Penggunaan

### 1. Setup Logo dan Tanda Tangan
- **PENTING**: Baca file `LOGO-SETUP.md` terlebih dahulu
- Siapkan file `company-logo.png` (logo perusahaan)
- Siapkan file `signature.png` (tanda tangan)
- Letakkan kedua file di folder yang sama dengan `index.html`

### 2. Buka File
- Buka `index.html` di browser
- Semua fitur akan langsung tersedia

### 3. Atur Data Perusahaan
- **Nama Perusahaan**: Sudah diset ke "PT ALIMA AMANAH LOGISTIC"
- **Alamat**: Masukkan alamat lengkap (pisahkan dengan koma untuk 2 baris)
- **Telepon & Email**: Sesuaikan dengan data perusahaan

### 4. Atur Data Bank
- **Bank 1**: Nama bank, nomor rekening, nama pemegang
- **Bank 2**: Bank kedua (opsional)
- Data akan muncul di bagian "Pembayaran via transfer bank"

### 5. Input Data Customer
- Nama customer
- Alamat customer
- Nomor invoice
- Destination dan PIC

### 6. Tambah Item Invoice ⭐ **FITUR BARU!**
- Klik "+ Tambah Baris" untuk menambah item
- **Description**: Gunakan textarea, bisa enter untuk baris baru
- **Condition**: Gunakan textarea, bisa enter untuk baris baru
- **Unit & Harga**: Input angka
- Klik "HAPUS" untuk menghapus item

### 7. Atur Pajak (Opsional)
- Centang "Aktifkan PPN" jika perlu
- Atur persentase PPN (default 1.1%)
- Masukkan Down Payment jika ada

### 8. Simpan Template
- Klik "SIMPAN TEMPLATE" untuk menyimpan pengaturan
- File JSON akan didownload
- Gunakan "LOAD TEMPLATE" untuk memuat kembali

### 9. Export Invoice
- **SIMPAN JPG**: Download sebagai gambar JPG
- **CETAK PDF**: Print atau save as PDF

## 🔧 Kustomisasi Lanjutan

### Mengubah Logo dan Tanda Tangan
1. **Baca panduan lengkap** di file `LOGO-SETUP.md`
2. Ganti file `company-logo.png` dengan logo perusahaan Anda
3. Ganti file `signature.png` dengan tanda tangan Anda
4. Refresh halaman untuk melihat perubahan

### Mengubah Warna dan Style
- Edit file `invoice-styles.css`
- Sesuaikan warna, font, dan layout sesuai brand perusahaan

### Menambah Fitur Baru
- Edit file `invoice-functions.js`
- Tambahkan fungsi JavaScript sesuai kebutuhan

## 📋 Template Default

Template sudah diatur dengan data default PT ALIMA AMANAH LOGISTIC:

- **Perusahaan**: PT ALIMA AMANAH LOGISTIC
- **Alamat**: Jl. Borong Raya Baru 1 Lr.4 No.4, Makassar, Sulawesi Selatan 90233
- **Email**: info@alimaamanah.com
- **Bank 1**: Mandiri - PT ALIMA AMANAH LOGISTIC
- **Bank 2**: BCA - Erfan Indra Yayan Bakri

## 🎨 Fitur Visual

- **Ukuran Presisi**: 1080x1050 pixel untuk hasil optimal
- **Border Ganda**: Sesuai dengan format invoice profesional
- **Tabel Rapi**: Garis hitam tegas dengan spacing yang tepat
- **Multi-line Support**: Description dan Condition bisa multi-baris
- **Responsive**: Dapat digunakan di desktop dan mobile
- **Print-Ready**: Optimized untuk printing dan PDF export

## 💡 Tips Penggunaan

1. **Multi-line Text**: Tekan Enter di textarea Description/Condition untuk baris baru
2. **Simpan Template**: Buat template untuk setiap jenis layanan
3. **Backup Logo**: Simpan logo perusahaan dan tanda tangan di folder terpisah
4. **Konsistensi**: Gunakan format penulisan yang sama untuk semua invoice
5. **Preview**: Selalu cek preview sebelum export atau print

## ⚠️ Hal Penting

### File yang Harus Anda Sediakan:
- `company-logo.png` - Logo perusahaan Anda
- `signature.png` - Tanda tangan Anda

### Jika Logo/Tanda Tangan Tidak Muncul:
1. Pastikan nama file tepat (case-sensitive)
2. Pastikan file ada di folder yang sama dengan `index.html`
3. Refresh browser dengan Ctrl+F5
4. Baca panduan di `LOGO-SETUP.md`

## 🔄 Update dan Maintenance

File ini sudah dioptimalkan dan siap pakai. Untuk update:

1. Backup file template JSON Anda
2. Update file HTML/CSS/JS sesuai kebutuhan
3. Test semua fitur sebelum digunakan untuk invoice resmi

## 📞 Support

Jika ada pertanyaan atau butuh kustomisasi lebih lanjut, silakan hubungi developer atau tim IT perusahaan.

---

**PT ALIMA AMANAH LOGISTIC**  
*Professional Invoice Generator*