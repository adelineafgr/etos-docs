---
id: modules
title: Modules
description: Panduan aplikasi ERP V1
tags: [erp-v1, user, modules]
---
Panduan ini menjelaskan bagimana dapat mengelola hak approval berdasarkan Key / Nama Tabel.

### Akses Menu Module

1. Klik `Module`
2. Klik `⚙ User & Role`
3. Pilih menu `Module`.
![Module](../img/module.png)

### Melihat Daftar Key / Nama Tabel

Tampilan akan menampilkan daftar key / nama tabel yang tersedia dengan kolom:
- **Key / Nama Tabel** : Nama kunci atau nama tabel database yang terkait dengan modul.
- **Nama**: Nama module
- **Order**: Urutan module (biasanya angka).
- **Icon**: Ikon visual yang diasosiasikan dengan modul.
- **Action**: Tombol aksi yang tersedia untuk setiap baris modul.
![List Module](../img/list-module.png)

### Menambahkan Key / Nama Tabel Baru

1. Klik `+ Add New`
2. Akan muncul form dengan input berikut:
    - **Pegawai** 
   - **Name**
   - **Group**
   - **Email** <br/>
![Add Key](../img/add-key.png)
3. Klik tombol `Submit` untuk menyimpan atau `OK` untuk membatalkan.

### Mengedit Key / Nama Tabel

1. Klik titik tiga pada Action
2. Klik `Edit`<br/>
![Edit Key](../img/edit-key.png)
3. Ubah informasi Nama, Icon, order_by
4. Klik tombol `OK` untuk menyimpan atau `Cancel` untuk membatalkan.<br/>
![Edit Key](../img/edit-key-2.png)

### Konfigurasi Alur Kerja Approval
1. Klik titik tiga pada Action
2. Klik `Approval`<br/>
![Approval](../img/approval.png)

#### Menambahkan Data Flow
1. Klik `+Add New`
![Add New Flow](../img/add-new-approval.png)
2. Lengkapi form data flow
3. Klik `Add`
4. Lengkapi flow
5. Klik `Add Detail`
6. Ulangi langkah 3-5 hingga semua status lengkap
7. Klik `Submit`
![Form Data Flow](../img/data-flow.png)