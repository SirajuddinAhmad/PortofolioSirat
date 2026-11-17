# Portofolio — Sirajuddin Ahmad Kurniawan

Landing page portofolio satu halaman untuk Sirajuddin Ahmad Kurniawan, dibangun dengan React, Vite, dan Framer Motion. Desainnya minimal, responsif, mendukung mode terang/gelap, dan seluruh konten utama dapat diubah dari satu file data.

## Fitur

- Navbar lengket dengan penanda bagian aktif dan menu hamburger di layar kecil.
- Mode terang/gelap yang mengikuti preferensi sistem pada kunjungan pertama, lalu disimpan di `localStorage`.
- Animasi masuk yang halus dan menghormati `prefers-reduced-motion`.
- Bagian Hero, Tentang, Keahlian, Proyek, Perjalanan, Kontak, dan Footer.
- Kartu proyek dengan tangkapan layar dalam bingkai browser, teknologi, serta tautan GitHub/live demo.
- Form kontak dengan validasi di sisi klien, tombol salin email, dan tautan WhatsApp.
- Tombol unduh CV, tautan sosial, scroll progress, dan kembali ke atas.
- Skip link, fokus keyboard yang terlihat, dan struktur landmark yang aksesibel.

## Teknologi

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- JavaScript (JSX) dan CSS3 modular per area
- [Framer Motion](https://motion.dev/) untuk animasi
- [Lucide React](https://lucide.dev/) untuk ikon
- Google Fonts: Poppins

## Menjalankan Proyek

Prasyarat: Node.js versi LTS terbaru dan npm.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Perintah lain:

```bash
npm run build    # build produksi ke folder dist/
npm run preview  # menjalankan hasil build secara lokal
```

## Struktur Folder

```
.
├── index.html                  # metadata, font, dan skrip tema sebelum render
├── vite.config.js
├── public/
│   ├── cv/                     # berkas CV untuk diunduh
│   ├── projects/               # gambar proyek
│   └── favicon.svg
└── src/
    ├── App.jsx                 # susunan section halaman
    ├── main.jsx
    ├── data/portfolio.js       # semua konten yang dapat diedit
    ├── hooks/                  # useTheme, useScrolled, useActiveSection
    ├── components/             # Navbar, Hero, About, Skills, Projects, dll.
    └── styles/
        ├── tokens.css          # warna, radius, bayangan, token desain
        ├── base.css            # reset, tipografi, tombol, komponen bersama
        ├── layout.css          # navbar, menu mobile, footer, back-to-top
        ├── sections.css        # gaya tiap section dan aturan responsif
        └── index.css           # urutan impor stylesheet
```

## Kustomisasi

### 1. Profil dan konten

Hampir semua teks berada di `src/data/portfolio.js`:

| Data | Export |
| --- | --- |
| Nama, peran, email, WhatsApp, GitHub, CV, status ketersediaan | `profile` |
| Menu navigasi | `navLinks` |
| Statistik singkat di Hero | `stats` |
| Tautan sosial | `socials` |
| Kartu fakta di bagian Tentang | `facts` |
| Kelompok keahlian | `skillGroups` |
| Daftar proyek | `projects` |
| Pengalaman kerja/magang | `experiences` |
| Pendidikan | `education` |
| Sertifikasi | `certifications` |

Jika mengubah email, WhatsApp, atau URL GitHub, cukup perbarui `profile`; tautan sosial dan tombol kontak akan mengikuti.

### 2. Gambar proyek

1. Letakkan gambar baru di `public/projects/`.
2. Perbarui `image` dan `imageAlt` pada proyek terkait.
3. Gunakan `imagePosition` (nilai `object-position`, misalnya `"left top"`) untuk mengatur bagian gambar yang terlihat di dalam bingkai.
4. `browserLabel` mengatur teks kecil pada bilah browser tiruan.

Rasio bingkai proyek adalah 16:10. Gambar berukuran sekitar 1200–1600 px dengan format JPG/WebP dan ukuran di bawah ±300 KB sudah cukup. Untuk kartu unggulan, potongan gambar yang penting sebaiknya berada di bagian kiri atas.

### 3. CV

Ganti `public/cv/CV_Sirajuddin_Ahmad_Kurniawan.pdf` dengan berkas baru. Jika nama berkas berubah, sesuaikan juga nilai `cv` di `profile`.

### 4. Tema dan warna

- Warna light/dark didefinisikan di `src/styles/tokens.css`.
- Tema awal mengikuti `prefers-color-scheme`. Pilihan pengguna disimpan dengan kunci `portfolio-theme`.
- Skrip kecil di `index.html` menerapkan tema sebelum halaman dirender untuk mencegah kedipan warna.
- Jika kunci penyimpanan diubah, perbarui `src/hooks/useTheme.js` dan skrip di `index.html`.

### 5. Metadata dan favicon

Judul, deskripsi, Open Graph, dan warna tema ada di `index.html`. Favicon dapat diganti melalui `public/favicon.svg`.

## Form Kontak

Form memvalidasi nama, format email, dan pesan sebelum mengirim. Karena situs ini statis, tombol **Kirim Pesan** membuka aplikasi email pengunjung melalui tautan `mailto:` dengan subjek dan isi yang sudah terisi. Tidak ada data yang dikirim ke server.

Untuk memakai backend sungguhan, ganti bagian pengiriman di `src/components/Contact.jsx` dengan permintaan `fetch` ke layanan seperti Formspree, Resend, atau API sendiri. Tampilan validasi dan status berhasil sudah tersedia dan dapat dipertahankan.

## Aksesibilitas

- Navigasi dapat digunakan dengan keyboard, termasuk skip link ke konten utama.
- Tombol ikon memiliki label aksesibel dan state `aria-expanded` pada menu mobile.
- Fokus terlihat jelas di seluruh elemen interaktif.
- Animasi dimatikan atau disederhanakan saat `prefers-reduced-motion` aktif.
- Kontras warna telah diperiksa dengan axe (WCAG 2.0/2.1 level A dan AA).

## Build dan Deploy

```bash
npm run build
```

Folder `dist/` dapat diunggah ke hosting statis seperti Vercel, Netlify, Cloudflare Pages, atau GitHub Pages. Gunakan:

- Build command: `npm run build`
- Output directory: `dist`

Jika situs dipasang di subdirektori (misalnya GitHub Pages), tambahkan `base` pada `vite.config.js`, misalnya:

```js
export default defineConfig({
  base: "/nama-repo/",
  plugins: [react()],
});
```

## Catatan

Konten, CV, dan tangkapan layar proyek merupakan milik Sirajuddin Ahmad Kurniawan. Ganti data contoh dengan informasi Anda sendiri sebelum mempublikasikan versi lain dari situs ini.
