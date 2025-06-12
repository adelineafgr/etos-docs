---
id: risk
title: Risk Management
description: Project Risk Management Plan Implementasi Sistem Dokumentasi Internal ETOS
tags: [project management, risk]
---

## 1. Introduction

Dokumen ini menguraikan pendekatan dan proses untuk mengelola risiko dalam proyek "Implementasi Sistem Dokumentasi Internal ETOS". Tujuannya adalah untuk mengidentifikasi potensi ancaman dan peluang, menganalisis dampaknya, mengembangkan strategi respons, dan memantau risiko secara berkelanjutan untuk memastikan keberhasilan proyek.

---

## 2. Risk Identification (Identifikasi Risiko)

Risiko akan diidentifikasi secara proaktif melalui metode berikut:

* **Brainstorming Tim Proyek:** Sesi rutin dengan tim inti (Project Manager, Lead Technical Writer, perwakilan IT, perwakilan Bisnis) untuk mengidentifikasi potensi risiko di setiap fase proyek.
* **Analisis Dokumen:** Peninjauan dokumen proyek (Project Plan, Scope Statement, Timeline) untuk mengidentifikasi area yang rentan.
* **Wawancara Stakeholder:** Berdiskusi dengan *stakeholder* kunci untuk menggali kekhawatiran dan potensi kendala.
* **Analisis Asumsi & Kendala:** Mengidentifikasi risiko yang timbul dari asumsi yang mungkin tidak akurat atau kendala yang tidak dapat dihindari.
* **Lessons Learned dari Proyek Sebelumnya:** Mengacu pada pengalaman dari proyek IT atau dokumentasi sebelumnya di ETOS.

### 2.1. Initial Identified Risks (Daftar Risiko Awal)

Berikut adalah daftar awal risiko yang teridentifikasi untuk proyek ini:

| Risk ID | Risk Category | Risk Description                                        | Possible Causes                                   |
| :------ | :------------ | :------------------------------------------------------ | :------------------------------------------------ |
| R01     | Sumber Daya   | Kurangnya ketersediaan waktu dari *subject matter expert* (SME) IT/Bisnis. | Beban kerja harian yang tinggi, prioritas lain.   |
| R02     | Lingkup       | *Scope creep* (penambahan fitur/dokumen di luar lingkup awal). | Kurangnya kontrol perubahan yang ketat, permintaan *stakeholder* yang tidak terkelola. |
| R03     | Jadwal        | Keterlambatan dalam proses *review* dan persetujuan konten. | *Reviewer* sibuk, proses *feedback* yang lambat. |
| R04     | Teknis        | Masalah kompatibilitas atau *bug* pada Docusaurus/plugins. | Versi *library* yang tidak cocok, konfigurasi yang salah. |
| R05     | Kualitas Konten | Konten dokumentasi tidak akurat atau sulit dipahami.    | Penulis kurang memahami subjek, kurangnya *review* oleh SME. |
| R06     | Adopsi        | Tingkat adopsi yang rendah oleh tim dan pengguna akhir. | Kurangnya pelatihan, resistensi terhadap perubahan, kurangnya promosi. |
| R07     | Keamanan      | Akses tidak sah ke dokumentasi rahasia.                 | Konfigurasi hosting yang lemah, kontrol akses Git yang tidak memadai. |
| R08     | Pemeliharaan  | Dokumentasi menjadi usang dan tidak diperbarui.        | Kurangnya PIC, tidak ada proses *update* rutin, *turnover* karyawan. |

---

## 3. Risk Analysis (Analisis Risiko)

Setiap risiko yang teridentifikasi akan dianalisis berdasarkan probabilitas (kemungkinan terjadi) dan dampak (konsekuensi jika terjadi).

### 3.1. Probabilitas Scale

* **Very Low (VL):** < 10%
* **Low (L):** 10% - 30%
* **Medium (M):** 31% - 60%
* **High (H):** 61% - 90%
* **Very High (VH):** > 90%

### 3.2. Impact Scale

* **Very Low (VL):** Dampak minimal, mudah diatasi, tidak memengaruhi jadwal/anggaran.
* **Low (L):** Dampak kecil pada jadwal/anggaran, dapat diatasi dengan sedikit penyesuaian.
* **Medium (M):** Dampak sedang, memerlukan penyesuaian jadwal/anggaran, berdampak pada kualitas.
* **High (H):** Dampak signifikan, penundaan jadwal/pembengkakan anggaran, berdampak serius pada kualitas atau tujuan proyek.
* **Very High (VH):** Dapat menyebabkan kegagalan proyek, kerugian finansial besar, atau dampak reputasi yang parah.

### 3.3. Risk Matrix

| Impact \ Probabilitas | VL     | L      | M      | H      | VH     |
| :-------------------- | :----- | :----- | :----- | :----- | :----- |
| VH                    | Medium | High   | Extreme | Extreme | Extreme |
| H                     | Low    | Medium | High   | High   | Extreme |
| M                     | Low    | Low    | Medium | High   | High   |
| L                     | Very Low | Low    | Low    | Medium | High   |
| VL                    | Very Low | Very Low | Low    | Low    | Medium |

---

## 4. Risk Response Planning (Perencanaan Respons Risiko)

Untuk setiap risiko dengan tingkat prioritas yang cukup tinggi, strategi respons akan dikembangkan.

### 4.1. Risk Response Strategies

* **Avoid (Menghindari):** Menghilangkan penyebab risiko (misalnya, mengubah rencana proyek).
* **Mitigate (Mitigasi):** Mengurangi probabilitas atau dampak risiko.
* **Transfer (Mentransfer):** Mengalihkan risiko ke pihak ketiga (misalnya, asuransi, *outsourcing*).
* **Accept (Menerima):** Memutuskan untuk menerima risiko dan dampaknya. (Untuk risiko dengan probabilitas/dampak rendah, atau jika biaya mitigasi terlalu tinggi).

### 4.2. Detailed Risk Register & Response Plan

| Risk ID | Prob. | Impact | Severity (P x I) | Response Strategy | Specific Action Plan                                                                 | Owner   | Status     |
| :------ | :---- | :----- | :--------------- | :---------------- | :----------------------------------------------------------------------------------- | :------ | :--------- |
| R01     | H     | H      | High             | Mitigate          | Jadwalkan sesi *knowledge transfer* wajib, alokasikan waktu SME di kalender, dapatkan komitmen manajemen. | PM      | Open       |
| R02     | M     | H      | High             | Mitigate          | Terapkan proses *change control* yang ketat (seperti di `pm/scope.md`), setiap CR melewati CCB. | PM      | Open       |
| R03     | H     | M      | High             | Mitigate          | Tetapkan SLA untuk *review* (maks. 2 hari kerja), ingatkan *reviewer* secara otomatis, sediakan template *feedback* yang jelas. | Lead TW | Open       |
| R04     | M     | M      | Medium           | Mitigate          | Gunakan versi stabil Docusaurus & plugin, lakukan *testing* intensif di *environment* *staging* sebelum *deployment*. | Tim IT  | Open       |
| R05     | M     | H      | High             | Mitigate          | Libatkan SME secara aktif dalam penulisan/review, lakukan *peer review* konten oleh anggota tim lain, gunakan *style guide*. | Lead TW | Open       |
| R06     | M     | M      | Medium           | Mitigate          | Sediakan sesi pelatihan dan *walkthrough*, promosikan manfaat dokumentasi, kumpulkan *feedback* pengguna awal. | PM      | Open       |
| R07     | L     | H      | Medium           | Mitigate          | Konfigurasi akses Git private, pastikan *hosting* Docusaurus aman (misal: GitHub Pages di repo private), terapkan 2FA. | Tim IT  | Open       |
| R08     | H     | H      | High             | Mitigate          | Tunjuk PIC untuk setiap bagian dokumen, jadwalkan *review* tahunan/setelah rilis fitur, buat *feedback form* di Docusaurus. | PM      | Open       |

---

## 5. Risk Monitoring and Control (Pemantauan dan Pengendalian Risiko)

Manajemen risiko adalah proses berkelanjutan.

* **Rapat Proyek Mingguan:** Status risiko akan ditinjau dalam rapat proyek mingguan. Risiko baru akan diidentifikasi, risiko yang ada akan dievaluasi ulang, dan efektivitas respons akan dibahas.
* **Risk Register Update:** `Risk Register` ini akan diperbarui secara berkala (minimal dua mingguan) untuk mencerminkan status risiko, tindakan respons yang diambil, dan identifikasi risiko baru.
* **Laporan Risiko:** Risiko utama dan statusnya akan dilaporkan kepada *stakeholder* sebagai bagian dari laporan kemajuan proyek.
* **Trigger Event:** Jika suatu *trigger event* (kejadian yang mengindikasikan risiko akan terjadi) terdeteksi, tim yang bertanggung jawab atas risiko tersebut harus segera mengimplementasikan rencana respons.

---

## 6. Roles and Responsibilities for Risk Management

| Role                  | Responsibilities in Risk Management                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------ |
| **Project Manager** | Bertanggung jawab penuh atas manajemen risiko proyek, memimpin identifikasi, analisis, respons, dan pemantauan. |
| **Lead Technical Writer** | Mengidentifikasi risiko terkait konten dan kualitas, membantu dalam implementasi rencana respons.     |
| **IT Team** | Mengidentifikasi risiko teknis, memberikan input untuk respons teknis, mengimplementasikan tindakan mitigasi teknis. |
| **ERP Product Owner** | Mengidentifikasi risiko terkait fungsionalitas dan adopsi pengguna.                                  |
| **All Team Members** | Bertanggung jawab untuk melaporkan risiko baru atau *trigger event* segera setelah teridentifikasi.  |

---

## 7. Change Log

| Version | Date       | Author        | Description of Change               |
| :------ | :--------- | :------------ | :---------------------------------- |
| 1.0     | 2025-06-12 | [Nama Anda]   | Initial Draft of Project Risk Management Plan |
|         |            |               |                                     |

---