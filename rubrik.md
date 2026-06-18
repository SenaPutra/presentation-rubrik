---
title: "RuBrik — Ruang Pabrik"
subtitle: "Mading Digital Internal Pabrik"
document_type: "Presentation Content"
source_format: "PowerPoint"
total_slides: 16
platform: "Google Workspace"
---

# RuBrik — Ruang Pabrik

> **Mading Digital Internal Pabrik**  
> Platform komunikasi, informasi, dan kolaborasi karyawan yang dibangun 100% di atas ekosistem Google Workspace.

## Executive Snapshot

| Highlight | Detail |
|---|---|
| Fitur utama | 6 fitur dalam satu platform |
| Biaya tambahan | Rp 0 |
| Teknologi utama | 100% Google Workspace |
| Database | 1 Google Spreadsheet dengan 10 sheet/tab |
| Target audiens presentasi | HR Team & Change Management |

---

## Agenda

1. **Apa itu RuBrik?** — Latar belakang dan tujuan.
2. **Fitur-fitur Utama** — Enam modul yang tersedia.
3. **Cara Kerja & Arsitektur** — Sistem, CMS, dan otomasi.
4. **Tools yang Digunakan** — Ekosistem Google Workspace.
5. **Nilai Plus & Manfaat** — Bisnis, efisiensi, dan SDM.
6. **Langkah Selanjutnya** — Roadmap dan quick wins.

---

# 01. Apa Itu RuBrik?

## Latar Belakang

### Masalah yang Ingin Diselesaikan

#### 1. Informasi tersebar

Pengumuman HR tersebar di email, WhatsApp, dan papan fisik sehingga mudah terlewat.

#### 2. Tidak ada satu sumber kebenaran

Kebijakan versi lama masih beredar karena tidak ada pusat distribusi informasi resmi.

#### 3. Karyawan baru mengalami disorientasi

Tidak tersedia portal onboarding sehingga informasi perusahaan harus dicari sendiri.

#### 4. Ide tidak memiliki saluran

Inovasi dan masukan karyawan tenggelam karena tidak tersedia saluran yang terstruktur.

> **Solusi:** RuBrik hadir sebagai satu platform terpadu—mading digital yang hidup di dalam ekosistem Google Workspace yang sudah digunakan perusahaan.

---

## Satu Platform, Enam Ruang

### 1. Pengumuman

Informasi resmi dari HR dan manajemen, dilengkapi countdown dan gambar.

### 2. Koran Harian

Berita industri terpilih yang diperbarui otomatis setiap hari melalui RSS.

### 3. Obrolan Warkop

Forum diskusi anonim dengan topik yang dimoderasi oleh admin.

### 4. Lapak Jualan

Marketplace internal untuk produk UMKM dan jasa milik karyawan.

### 5. Agenda

Kalender meeting personal yang terhubung dengan Google Calendar.

### 6. Factory Wire

Ticker berjalan untuk informasi kilat dan pengumuman cepat.

---

# 02. Fitur-fitur Utama

## Pengumuman

### Kapabilitas

- Kartu pengumuman dengan gambar, badge kategori, dan countdown hari.
- Pin pengumuman penting agar selalu berada di posisi teratas.
- Multi-image gallery untuk setiap pengumuman.
- Integrasi Gmail agar email HR otomatis diimpor sebagai draft di CMS.
- Admin dapat me-review draft, mem-publish, lalu konten langsung tampil di RuBrik.

### Alur Email ke RuBrik

```text
HR mengirim blast email biasa
        ↓
Alamat email RuBrik menerima CC
        ↓
Google Apps Script melakukan parsing setiap 6 jam
        ↓
Konten masuk ke CMS sebagai Draft
        ↓
Admin melakukan review dan Publish
        ↓
Pengumuman tampil di RuBrik
```

---

## Koran Harian

Berita industri pilihan diperbarui secara otomatis setiap hari tanpa memerlukan input manual dari admin.

### Filter Topik

- Finansial
- Banking
- Trading
- Loyalty
- Technology
- AI
- Marketing

### Sumber Berita

- Kontan.co.id
- CNBC Indonesia
- Katadata
- Tech in Asia Indonesia

### Mekanisme RSS Auto-Fetch

| Komponen | Fungsi |
|---|---|
| `RSS_Sources` sheet | Menambah atau menghapus sumber RSS tanpa mengubah kode |
| `RSS_Topics` sheet | Mengelola kata kunci per topik tanpa mengubah kode |
| Daily trigger | Menjalankan proses fetch otomatis setiap hari |
| `News` sheet | Menyimpan berita sebelum ditampilkan di RuBrik |
| Deduplication | Mencegah artikel duplikat |
| Article limit | Maksimal 5 artikel per sumber |

---

## Obrolan Warkop

### Alur Moderasi Topik

1. **Karyawan mengirim topik**  
   Siapa pun dapat mengirim topik. Status awal konten adalah `Pending`.

2. **Admin melakukan review di CMS**  
   Admin dapat menyetujui atau menolak topik.

3. **Topik dipublikasikan**  
   Setelah status berubah dari `Pending` menjadi `Published`, seluruh karyawan dapat melihat dan membalas topik.

4. **Komentar tampil langsung**  
   Komentar di-publish otomatis. Admin tetap dapat menyembunyikan komentar bila diperlukan.

### Mode Anonim Penuh

- Alias dibuat otomatis di sisi server.
- Nama asli karyawan tidak pernah ditampilkan pada halaman pengguna.
- Contoh format alias:
  - `Kuli Shift Pagi #7749`
  - `Mandor Blok A #3321`

---

## Lapak Jualan

Marketplace internal untuk karyawan yang memiliki usaha atau menawarkan jasa.

### Alur Listing

```text
Karyawan mengirim listing
        ↓
Admin melakukan review
        ↓
Listing dipublikasikan
```

### Detail Fitur

- Kategori: makanan, fashion, jasa digital, tanaman, fotografi, dan lainnya.
- Informasi yang ditampilkan:
  - Nama produk
  - Deskripsi
  - Nama penjual
  - Tombol kontak
- Gratis, tanpa biaya platform tambahan.
- Berfungsi sebagai platform UMKM internal perusahaan.

---

## Agenda Pribadi

Agenda ditarik langsung dari Google Calendar pribadi karyawan untuk periode 14 hari ke depan.

### Kapabilitas

- Real-time dari Google Calendar pribadi.
- Menggunakan:

```javascript
CalendarApp.getDefaultCalendar()
```

- Menampilkan:
  - Tanggal
  - Waktu
  - Lokasi meeting
- Rentang waktu 14 hari ke depan.
- Rentang dapat dikonfigurasi melalui `Settings`.
- Tidak membutuhkan proses sinkronisasi manual.
- Data selalu mengikuti kalender terbaru.

---

# 03. Cara Kerja dan Arsitektur

## Arsitektur Sistem RuBrik

### Layer 1 — Tampilan

- Landing Web App berbasis Google Apps Script.
- Frontend menggunakan HTML, CSS, dan JavaScript.
- Menggunakan visual dark industrial theme.
- Diakses karyawan melalui URL.

### Layer 2 — Logika

- `landing.gs` — mengambil dan menyajikan data.
- `cms.gs` — menangani operasi CRUD untuk admin.
- `rss-fetcher.gs` — mengambil berita dari RSS.
- `email-fetcher.gs` — mengambil dan memproses email.

### Layer 3 — Data

- Google Sheets — database dengan 10 sheet/tab.
- Google Drive — penyimpanan gambar dan file.
- Google Calendar API — sumber agenda personal.

### Pola Akses

```text
┌─────────────────────────────┐
│ Landing GAS Project         │
│ Akses untuk karyawan        │
└──────────────┬──────────────┘
               │
               │ Shared Spreadsheet ID
               │
┌──────────────▼──────────────┐
│ Google Spreadsheet          │
│ Single source of data       │
└──────────────┬──────────────┘
               │
               │ Shared Spreadsheet ID
               │
┌──────────────▼──────────────┐
│ CMS GAS Project             │
│ Akses untuk admin           │
└─────────────────────────────┘
```

> Dua Google Apps Script Project terpisah—Landing untuk karyawan dan CMS untuk admin—berbagi satu Spreadsheet ID. Satu titik data digunakan melalui dua jalur akses yang berbeda.

---

## Admin CMS Panel

Admin mengelola seluruh konten RuBrik melalui satu panel web tanpa perlu menyentuh kode atau Google Spreadsheet secara langsung.

### Modul CMS

| Modul | Fungsi |
|---|---|
| Dashboard | Statistik real-time: pengumuman published, berita, forum pending, dan lapak pending |
| Pengumuman CRUD | Tambah, edit, publish/unpublish, pin, upload gambar, dan set deadline |
| News Management | Review berita hasil RSS, tambah manual, publish, atau hide |
| Forum Moderation | Approve/reject topik pending dan menyembunyikan komentar |
| Marketplace | Approve atau reject listing Lapak Jualan |
| Settings & Quick Links | Mengatur site title, greeting, hero slider, dan tombol quick action |

---

## Google Sheets sebagai Database

Satu Google Spreadsheet dengan 10 sheet/tab menjadi backbone seluruh konten RuBrik.

| Sheet | Fungsi |
|---|---|
| `Settings` | Konfigurasi global, seperti judul dan greeting |
| `Announcements` | Pengumuman dan hero slider |
| `News` | Koran Harian, baik manual maupun hasil RSS auto-fetch |
| `Forum` | Topik Obrolan Warkop dengan status `Pending` hingga `Published` |
| `ForumComments` | Komentar untuk setiap topik |
| `Marketplace` | Listing Lapak Jualan |
| `Ticker` | Factory Wire atau scrolling text |
| `QuickLinks` | Tombol quick action pada hero |
| `RSS_Sources` | URL dan nama sumber RSS |
| `RSS_Topics` | Kata kunci untuk setiap topik berita |

---

# 04. Tools yang Digunakan

## 100% Google Workspace — Tanpa Biaya Tambahan

| Tool | Peran | Implementasi |
|---|---|---|
| Google Apps Script | Backend dan otomasi | Server-side logic, data fetch, scheduled trigger, integrasi Gmail dan Calendar |
| Google Sheets | Database | Spreadsheet 10 tab sebagai database CMS yang mudah dikelola admin non-teknis |
| Google Sites | Hosting/wrapper | URL akses karyawan dan wrapper untuk Web App GAS melalui iframe |
| Google Drive | File storage | Penyimpanan gambar pengumuman dari email dengan URL permanen |
| Gmail API | Email integration | Mengimpor email HR secara otomatis sebagai draft pengumuman di CMS |
| Google Calendar API | Agenda personal | Mengambil event 14 hari ke depan dari kalender karyawan yang sedang login |

---

# 05. Nilai Plus dan Manfaat

## Penghematan Nyata yang Terukur

### Highlight

| Metrik | Nilai |
|---|---|
| Biaya platform tambahan | Rp 0 |
| Perkiraan harga intranet dan email tool di pasar | Rp 90–270 juta per tahun |
| Penghematan waktu distribusi informasi HR | Sekitar 80% |
| Durasi proses sebelumnya | 45–90 menit per pengumuman |
| Durasi melalui RuBrik | Kurang dari 10 menit per pengumuman |
| Recovery productive hours | 35% |
| Estimasi waktu HR yang dihemat | Sekitar 13 jam per bulan |

### Perbandingan Biaya

| Komponen | Biaya Pasar | Biaya RuBrik |
|---|---:|---:|
| Platform intranet seperti Simpplr atau Staffbase | Rp 90–270 juta/tahun | Rp 0 |
| Email blast tool seperti Mailchimp atau Brevo | Rp 4–54 juta/tahun | Rp 0 |
| Waktu HR untuk 8 pengumuman per bulan | Rp 5–12 juta/tahun | Hemat sekitar 13 jam/bulan |

> Catatan: Klaim angka pasar, productive-hours recovery, turnover, dan biaya rekrut pada materi ini sebaiknya diverifikasi serta dilengkapi sumber primer sebelum digunakan dalam proposal formal.

---

## Nilai Strategis untuk Perusahaan

### Retensi Karyawan

Materi presentasi menyatakan bahwa perusahaan dengan komunikasi internal yang baik memiliki turnover 40–50% lebih rendah. Biaya rekrut satu karyawan disebut dapat mencapai 50–200% dari gaji tahunannya.

### Compliance Readiness

Informasi regulasi OJK dan BI dapat dipusatkan serta tercatat. Menghindari satu temuan audit dapat menghasilkan nilai yang jauh lebih besar dibandingkan biaya pembangunan RuBrik.

### Innovation Pipeline

Forum dan Lapak Jualan memberi saluran resmi bagi ide serta inisiatif karyawan. Satu improvement kecil dari lapangan berpotensi menghemat ratusan jam kerja.

### Employer Branding

Komunitas internal seperti Obrolan Warkop dan Lapak Jualan membangun sense of belonging. Karyawan yang engaged juga berpotensi mendukung proses rekrutmen melalui referral.

---

# 06. Langkah Selanjutnya

## Roadmap Implementasi

| Periode | Aktivitas | Detail |
|---|---|---|
| W1 | Deploy & Go-Live | Aktifkan Web App dan bagikan URL kepada seluruh karyawan |
| W2 | Onboarding Admin | Training selama 1 jam untuk admin HR dan content editor |
| W3 | Populate Konten | Isi pengumuman pertama, setup RSS sources, dan buka topik Warkop |
| W4+ | Review & Iterasi | Kumpulkan feedback lalu sesuaikan kata kunci serta fitur berdasarkan kebutuhan |

## Closing Statement

> **RuBrik siap berjalan. Kapan kita mulai?**

**RuBrik — Ruang Pabrik**  
Dibangun di atas Google Workspace.  
Biaya tambahan: **Rp 0**.
