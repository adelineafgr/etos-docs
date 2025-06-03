---
id: request-pindah-jadwal
title: Request Pindah Jadwal
description: Panduan login ke aplikasi ERP V2
tags: [erp-v2, pindah jadwal]
---
### Definisi
Aturan sebelumnya yang dicabut adalah: <br/>
     Konfigurasi pelanggan untuk kerja di hari libur tidak berlaku lagi

Penyesuaian Sistem:
1. RKT akan menolak jika tanggal yang dipilih ada tanggal merah nasional
2. Penambahan jadwal RKB akan menolak jika tanggal yang dipilih ada tanggal merah nasional
3. Pemindahan jadwal dalam bulan yang sama, jika tanggal yang dipilih ada tanggal merah nasional maka akan ditolak

Jika harus bekerja pada tanggal merah nasional:
1. SPV membuat request bertingkat sampai COO
2. Jika disetujui COO, SPKO diterbitkan

|                     | Bulan Berjalan        | Bulan Selanjutnya   |
|---------------------|-----------------------|---------------------|
| Bukan Tanggal Merah | Tidak perlu approval  | Approval bertingkat |
| Tanggal Merah       | Perlu approval        | Approval bertingkat |

#### Approval
| Status   | Approval | Approval Bertingkat |
|----------|----------|---------------------|
| Draft    | SPV      | SPV                 |
| Confirm  | FC       | SPV                 |
| Approve  |          | FC                  |
| Validasi |          | FC                  |
| Close    | COO      | COO                 |

#### Menu
- <strong>Semua Jadwal</strong>, menampilkan semua jadwal pekerjaan berdasarkan status RKB (belum/sudah)
- <strong>Jadwal Tanggal Merah</strong>, menampilkan semua jadwal yang tertanggal pada tanggal merah
- <strong>Request Jadwal Tanggal Merah</strong>, menampilkan semua permintaan jadwal yang tertanggal pada tanggal merah dan perlu approval dari SPV/FC/COO
- <strong>Request Pindah Jadwal</strong>, menampilkan semua permintaan jadwal yang tertanggal pada tanggal merah maupun yang bukan tanggal merah

### Detail Jadwal
1. Arahkan kursor pada No. SPKO yang dipilih
2. Klik `Lihat Jadwal` <br/>
   ![Detail](../img/detail.png)
3. Maka akan tampil detail jadwal seperti gambar <br/>
   ![Detail](../img/detail-2.png)
   
:::info
- Request Pindah Jadwal akan menampilkan semua jadwal terbaru berdasarkan permintaan pindah jadwal pada No. SPKO yang dipilih
- Request Jadwal Tanggal Merah akan menampilkan semua permintaan  jadwal baru yang terjadwal pada tanggal merah
:::


### Cari Semua Jadwal
1. Klik menu `Pekerjaan`
2. Klik `Semua Jadwal` atau akses
3. Ketik No. SPKO pada field search
4. Klik `🔍`<br/>
   ![Cari](../img/cari.png)

### Filter Semua Jadwal
:::info
- Status RKB harus dipilih Belum/Sudah
- Periode mulai bisa dipilih berdasarkan referensi tertentu, misalnya: berdasarkan tanggal, bulan, tahun, atau range tanggal tertentu
:::
1. Klik menu `Pekerjaan`
2. Klik `Semua Jadwal` atau akses
3. Pilih satu atau lebih pada setiap kategori
4. Klik `Filter`<br/>
   ![Filter](../img/filter.png)

### Request Pindah Jadwal
1. Klik menu `Pekerjaan`
2. Klik `Semua Jadwal` atau akses <br/>
   ![Semua Jadwal](../img/semua-jadwal.png) 
3. Hover pada no. SPKO
4. Klik `Request Pindah Jadwal`<br/>
   ![Request Pindah Jadwal](../img/reqquest-pindah-jadwal.png) 
5. Isi form<br/>
   ![Form Pindah Jadwal](../img/form-pindah-jadwal.png) 

### Request Jadwal Tanggal Merah
1. Klik menu `Pekerjaan`
2. Klik `Semua Jadwal` atau akses <br/>
   ![Semua Jadwal](../img/semua-jadwal.png)
3. Hover pada no. SPKO
4. Klik `Request Jadwal Tanggal Merah`<br/>
   ![Request Jadwal Tanggal Merah](../img/tanggal-merah.png) 
5. Isi form<br/>
   ![Form Pindah Jadwal](../img/form-pindah-jadwal.png) 

### Approve Request Pindah Jadwal
1. Klik menu `Pekerjaan`
2. Klik `Semua Jadwal` atau akses <br/>
   ![Approve](../img/approve-request-pindah-jadwal.png)
3. Cari nomor SPKO
4. Klik `Detail` <br/>
   ![Detail Jadwal](../img/detail-jadwal.png)
5. Klik `✔` untuk approve
6. Klik `✖` untuk reject <br/>
   ![Approve Reject](../img/approve-reject.png)

