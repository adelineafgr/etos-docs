---
id: wo
title: Work Order
description: Panduan aplikasi ETL Mobile
tags: [etl-mobile, wo]
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs groupId="wo" queryString>

<!-- Perangkap -->
<TabItem value="perangkap" label="Perangkap">
    :::info
    Input data pekerjaan untuk perangkap lebih baik realtime setelah melakukan tindakan dan bisa dilakukan secara offline
    :::

   ### Tindakan Perangkap
   1. Pilih area kerja (Misal: _Area Dalam – Counter_)
   2. Klik `PERANGKAP` <br/> ![Perangkap](./img/perangkap-1-2.png) 
   3. Klik `Tindakan Perangkap` <br/> ![Tindakan perangkap](./img/perangkap-3.png)
   4. Pilih salah satu tindakan perangkap <br/> ![Pilih tindakan perangkap](./img/pilih-tindakan-perangkap.png)
   5. Klik `OK`
   6. Maka akan ada tanda checklist pada tindakan dari perangkap <br/> ![Tindakan perangkap lengkap](./img/checklist-tindakan-perangkap.png)
   

   ### Monitoring Perangkap
   1. Pilih area kerja (Misal: _Area Dalam – Counter_)
   2. Klik `PERANGKAP` <br/> ![Perangkap](./img/monitoring-perangkap.png) 
   3. Klik `Monitoring Perangkap` <br/> ![Monitoring perangkap](./img/monitoring-perangkap-1.png)
   4. Pilih jenis monitoring pada popup yang tampil <br/> ![Pilih monitoring perangkap](./img/jenis-monitoring.png)
   5. Isi pilihan dan keterangan pada halaman monitoring  <br/> ![Keterangan monitoring perangkap](./img/ket-monitoring.png)
   6. Klik tombol `SIMPAN`
   7. Maka akan ada tanda checklist pada monitoring dari perangkap <br/> ![Monitoring perangkap lengkap](./img/checklist-monitoring-perangkap.png)

   ### Hilang Perangkap
   :::info
   Jika perangkap ditandai sebagai perangkap hilang maka :
   - Status perangkap berubah menjadi ”hilang”
   - Tindakan perangkap sudah terchecklist (walaupun tidak diisi)
   :::
   1. Pilih area kerja (Misal Area Dalam – Counter)
   2. Klik `PERANGKAP`
   3. Klik `Perangkap Hilang` <br/>
      ![Perangkap hilang](./img/perangkap-hilang.png)
   4. Klik tombol `YA` pada dialog konfirmasi <br/>
      ![Perangkap hilang](./img/perangkap-hilang-konfirmasi.png)
   5. Status perangkap berubah menjadi ”hilang” <br/>
      ![Perangkap hilang](./img/perangkap-hilang-2.png)

   ### Install Perangkap
   :::warning
   Pastikan stok perangkap atau chemical masih tersedia, jumlah pemasangan perangkap maksimal sesuai dengan stok yang ada.
   :::
   Contoh perangkap/chemical masih tersedia <br/>
      ![Stok perangkap](./img/stok-perangkap.png)

   1. Pilih area kerja (Misal: _Area Dalam – Office_)
   2. Pilih `TINDAKAN`
   3. Klik `TAMBAH TINDAKAN`
   4. Pilih Tindakan (Misal: _Pemasangan perangkap kucing_) <br/>
      ![Pilih pemasangan](./img/pemasangan-perangkap-kucing.png)
   5. `📷 Tambah Foto` maksimal 2 foto
   6. Isi Keterangan <br/>
      ![Keterangan perangkap](./img/keterangan-install-perangkap.png)
   7. Klik `SIMPAN` <br/>
      ![Install perangkap](./img/install-perangkap.png)


   ### Geser Perangkap
   :::info
   Mekanisme geser perangkap bukan pindah dari sub area A ke B. Tapi di sub area yang sama hanya pada titik koordinat yang berbeda.
      ❌ Contoh tidak valid   : Area Dalam - Kitchen => Area Dalam - Toilet
      ✅ Contoh valid         : Area Dalam - Kitchen => Area Dalam - Kitchen
   :::

   1. Klik nomor perangkap yang akan digeser
   2. Klik `Geser Perangkap` <br/>
      ![Geser perangkap](./img/geser-perangkap.png)
   3. Isi foto, keterangan dan koordinat pada halaman geser perangkap <br/>
      ![Geser perangkap](./img/geser-perangkap-1.png)
   4. Klik `SIMPAN` <br/>
      ![Geser perangkap](./img/geser-perangkap-2.png)

   ### Lepas Perangkap
   1. Klik nomor perangkap yang akan digeser
   2. Klik `Lepaskan Perangkap` <br/>
      ![Lepas perangkap](./img/geser-perangkap.png)
   3. Isi foto, keterangan dan koordinat pada halaman geser perangkap <br/>
      ![Geser perangkap](./img/lepas-perangkap.png)
   4. Klik `SIMPAN` <br/>
      ![Geser perangkap](./img/lepas-perangkap-1.png)
</TabItem>

  <!-- Hasil Monitoring -->
  <TabItem value="hasil-monitoring" label="Hasil Monitoring">
    Hasil Monitoring
  </TabItem>

  <!-- Tindakan -->
  <TabItem value="tindakan" label="Tindakan">
   :::info
   Input data pekerjaan untuk tindakan lebih baik realtime setelah melakukan tindakan dan bisa dilakukan secara offline.
   Pada section tindakan, masukkan tindakan atau treatment yang dilakukan di area tersebut
   :::

   1. Klik `TAMBAH TINDAKAN` <br/> ![Tambah Tindakan](./img/tambah-tindakan.png) 
   2. Pilih salah satu, klik `OK` <br/> ![PilihTindakan](./img/pilih-tindakan.png)
      Contoh yang dipilih Tindakan adalah Pemasangan EG, maka tampil Model alat Glue Trap Lem, disini Operator dapat mengisi nomor glue trap tersebut sebagai penanda sudah berapa glue trap yang terpasang di area tersebut 
   3. `📷 Tambah Foto`
   4. Isi Keterangan nya sesuai dengan Tindakan nya (Misal: _Pemasangan EG 1 pojok bawah_)
   5. Lokasi dan koordinat titik pemasangan trap nya. Apabila tidak muncul koordinat nya, bisa klik refresh di sebelah kanan tulisan Koordinat
   6. Klik `SIMPAN` <br/> ![PilihTindakan](./img/glue-trap-tindakan.png)
   
   :::warning
   - Harap pastikan setiap yang diisi itu sesuai dengan apa yang ada
   - Jika tidak tampil list tindakan & temuan, klik tanda (tombol) refresh yang muncul tersebut
   :::

  </TabItem>

  <!-- Temuan -->
  <TabItem value="temuan" label="Temuan">
   1. Klik`TEMUAN`
   2. Pilih hama <br/>
   3. Klik `Input Temuan` <br/>
      ![Input Temuan](./img/input-temuan.png)
   4. Pilih temuan hama tersebut ditemukan pada perangkap atau tidak
      - Tidak menggunakan perangkap: input jumlah temuan
      - Menggunakan perangkap: pilih jenis perangkap nya dan input jumlah temuan <br/>
      ![Pilih perangkap](./img/pilih-perangkap.png)
      ![Jumlah temuan](./img/jumlah-temuan.png)
   5. `📷 Tambah Foto`
   6. Isi Keterangan
   7. Isi lokasi dan koordinat titik dari temuan
   8. Klik `SIMPAN`
  </TabItem>
  <TabItem value="foto-subarea" label="Foto Subarea">
   :::info
   Jika pada area ada tindakan monitoring maka wajib diisi. Namun, jika pada area tidak ada tindakan monitoring makan opsional untuk diisi
   :::
   ![Foto Subarea](./img/foto-subarea.png) <br/>
   1. Klik `📷 Tambah Foto`
   2. Maksimal 5 foto
  </TabItem>
  <TabItem value="sanitasi" label="Sanitasi">
   :::info
   Jika ada tindakan area atau tindakan perangkap maka wajib diisi. Namun, jika tidak ada tindakan area atau tindakan perangkap maka opsional tidak diisi.
   :::
   ![Sanitasi & Konstruksi](./img/satkon.png) <br/>
   1. Klik kolom `SANITASI`
   2. Klik `📷 Ambil Foto`
   3. Isi keterangan sanitasi
   4. Klik `SIMPAN`
  </TabItem>
  <TabItem value="konstruksi" label="Konstruksi">
  :::info
  Jika ada tindakan area atau tindakan perangkap maka wajib diisi. Namun, jika tidak ada tindakan area atau tindakan perangkap maka opsional tidak diisi.
  :::
   ![Sanitasi & Konstruksi](./img/satkon.png) <br/>
   1. Klik kolom `KONSTRUKSI`
   2. Klik `📷 Ambil Foto`
   3. Isi keterangan konstruksi
   4. Klik `SIMPAN`
  </TabItem>
</Tabs>

