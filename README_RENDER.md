# Panduan Deploy ke Render

Panduan singkat untuk menerapkan (deploy) aplikasi full-stack (frontend + server) ke Render. Proyek ini menggunakan `pnpm`, Vite untuk build client dan server (server dibundel menjadi `dist/server/node-build.mjs`).

Prasyarat
- Akun Render (https://render.com)
- Branch Git pada repository (mis. `main`)
- Node 18+ direkomendasikan

Langkah cepat (lokal)
```bash
pnpm install
pnpm build      # membangun client (dist/spa) dan server (dist/server)
pnpm start      # menjalankan server produksi di port $PORT atau 3000
```

Pengaturan Service di Render
1. Buat 'New' → 'Web Service'.
2. Pilih repository dan branch yang ingin dideploy.
3. Di bagian Build & Start:
   - Build Command: `pnpm install && pnpm build`
   - Start Command: `pnpm start`
4. Environment:
   - Pilih `Node` versi 18 atau lebih baru di bagian runtime.
   - Render akan menyediakan variabel lingkungan `PORT` otomatis; aplikasi menggunakan `process.env.PORT` sehingga sudah kompatibel.
   - Tambahkan variabel env lain jika diperlukan (mis. `PING_MESSAGE`, `DATABASE_URL`, dll.).
5. Root Directory: biarkan kosong (root repo) kecuali Anda menyimpan kode di subfolder.

Penjelasan singkat
- `pnpm build` menjalankan `vite build` untuk client (output `dist/spa`) dan build server ke `dist/server` (lihat `package.json`).
- `pnpm start` menjalankan `node dist/server/node-build.mjs` yang:
  - Menyajikan static files dari `dist/spa`
  - Menjalankan Express API di route `/api/*`
  - Menggunakan `process.env.PORT` (Render menyediakannya)

Tips & Troubleshooting
- Jika build gagal karena package manager, pastikan Render menjalankan `pnpm`. Jika tidak, gunakan `pnpm install && pnpm build` sebagai Build Command (sudah direkomendasikan di atas).
- Periksa log build dan service pada dashboard Render untuk error transpile ataupun modul eksternal yang tidak ter-bundle.
- Jika Anda ingin menggunakan Cloud Functions daripada server proses, pertimbangkan deploy frontend statis (Netlify/Vercel) dan API sebagai layanan terpisah.

Railway (alternatif)
- Langkah hampir sama: set Build Command `pnpm install && pnpm build` dan Start Command `pnpm start`. Railway juga menyuntikkan `PORT` otomatis.

Tambahan (opsional)
- Jika Anda ingin image Docker, saya bisa membuat `Dockerfile` yang melakukan build dan menjalankan server. Mau saya tambahkan?

--
Panduan dibuat otomatis. Jika ingin saya juga menambahkan `Procfile` atau `Dockerfile`, katakan "ya".
