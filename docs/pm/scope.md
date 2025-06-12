---
id: scope
title: Scope Management
description: Project Scope Management Plan Implementasi Sistem Dokumentasi Internal ETOS
tags: [project , scope]
---
## 1. Introduction

Dokumen ini menjelaskan proses-proses yang akan digunakan untuk mengelola lingkup proyek "Implementasi Sistem Dokumentasi Internal ETOS". Tujuannya adalah untuk memastikan bahwa semua pekerjaan yang diperlukan untuk menyelesaikan proyek termasuk dalam lingkup, dan semua pekerjaan yang tidak diperlukan dikecualikan, serta untuk mengelola setiap perubahan lingkup secara sistematis.

---

## 2. Scope Definition Process (Proses Definisi Lingkup)

Proses ini menjelaskan bagaimana lingkup proyek akan didefinisikan dan diperinci dari waktu ke waktu.

### 2.1. Requirements Gathering (Pengumpulan Persyaratan)

* **Metode:** Persyaratan akan dikumpulkan melalui kombinasi wawancara dengan *stakeholder* kunci (manajemen, tim IT, perwakilan pengguna), *workshop* tim, dan analisis dokumen yang ada (misalnya, PPT lama, catatan teknis, *bug reports*).
* **Dokumentasi:** Semua persyaratan akan didokumentasikan dalam format Markdown, disimpan dalam folder `docs/requirements/` dan ditautkan ke dokumen terkait di `docs/pm/`.
* **Prioritas:** Persyaratan akan diprioritaskan oleh Project Manager dan *stakeholder* utama (menggunakan matriks Prioritas Tinggi/Sedang/Rendah) untuk fokus pada fitur paling penting terlebih dahulu.

### 2.2. Creating Work Breakdown Structure (WBS)

* **Alat:** WBS akan dikembangkan menggunakan struktur *outline* di Markdown atau alat diagram eksternal (misalnya, draw.io) jika visualisasi diperlukan, yang kemudian akan disisipkan sebagai gambar di Markdown.
* **Level Detail:** WBS akan dipecah hingga level paket pekerjaan (Work Package) yang dapat dialokasikan ke individu atau tim kecil dan durasinya dapat diestimasi.
* **Verifikasi:** WBS akan ditinjau dan disetujui oleh Project Manager dan tim inti sebelum dilanjutkan ke tahap perencanaan lebih lanjut.

---

## 3. Scope Validation Process (Proses Validasi Lingkup)

Proses ini menjelaskan bagaimana *deliverables* proyek akan diterima secara formal oleh *stakeholder*.

* **Review Deliverables:** Setelah setiap *deliverable* utama (misalnya, struktur navigasi, set dokumen teknis, set panduan pengguna) selesai, tim akan melakukan *internal review* terlebih dahulu.
* **Demonstrasi & Feedback:** *Deliverable* akan didemonstrasikan kepada *stakeholder* yang relevan (misalnya, Head of IT, Head of Business User Department) dalam sesi *review* formal. *Feedback* akan dikumpulkan dan didokumentasikan.
* **Formal Acceptance:** Setelah *feedback* diatasi dan *deliverable* memenuhi kriteria yang disepakati, *stakeholder* akan memberikan persetujuan formal (misalnya, melalui email persetujuan atau tanda tangan pada dokumen *acceptance form* yang disimpan dalam `docs/pm/`).
* **Dokumentasi Validasi:** Catatan persetujuan dan validasi akan disimpan di folder `docs/pm/validation_records/`.

---

## 4. Scope Control Process (Proses Pengendalian Lingkup)

Proses ini menjelaskan bagaimana perubahan pada lingkup proyek akan dikelola untuk mencegah *scope creep*.

### 4.1. Change Request Procedure (Prosedur Permintaan Perubahan)

* **Identifikasi Perubahan:** Setiap *stakeholder* atau anggota tim yang mengidentifikasi kebutuhan akan perubahan pada lingkup proyek harus mengajukan *Change Request* (CR).
* **Formulir CR:** CR harus diajukan menggunakan template khusus (bisa dalam bentuk Markdown di folder `docs/pm/change_requests/` atau melalui sistem tiket jika ada) yang mencakup:
    * Deskripsi Perubahan
    * Alasan Perubahan
    * Dampak Potensial (terhadap jadwal, anggaran, sumber daya)
    * *Stakeholder* yang Mengajukan
    * Tanggal Pengajuan
* **Logging CR:** Semua CR akan dicatat dalam sebuah *Change Log* (file Markdown di `docs/pm/change_log.md`) dengan statusnya.

### 4.2. Change Control Board (CCB) / Proses Review Perubahan

* **Peninjauan:** Setiap CR akan ditinjau oleh Project Manager dan perwakilan *stakeholder* inti (misalnya, Head of IT, ERP Product Owner) dalam rapat atau diskusi asinkron.
* **Analisis Dampak:** Project Manager akan menganalisis dampak CR terhadap *timeline*, anggaran, dan sumber daya proyek.
* **Keputusan:** Keputusan (Approve, Reject, Defer) akan dibuat berdasarkan analisis dampak dan prioritas proyek.
* **Komunikasi:** Keputusan CR akan dikomunikasikan kepada semua *stakeholder* yang relevan dan pemohon CR.
* **Pembaruan Dokumen:** Jika CR disetujui, semua dokumen proyek yang relevan (termasuk *Project Plan*, *Timeline*, dan WBS) harus diperbarui untuk mencerminkan perubahan lingkup.

---

## 5. Roles and Responsibilities for Scope Management

| Role                  | Responsibilities in Scope Management                                                               |
| :-------------------- | :------------------------------------------------------------------------------------------------- |
| **Project Manager** | Mengawasi seluruh proses manajemen lingkup, mengelola WBS, menganalisis CR, memimpin CCB.            |
| **Lead Technical Writer** | Membantu dalam pengumpulan persyaratan detail, memperbarui WBS, mendokumentasikan persyaratan.     |
| **IT Team** | Memberikan input teknis untuk definisi lingkup, membantu analisis dampak CR teknis.                  |
| **ERP Product Owner** | Memastikan persyaratan bisnis jelas, membantu validasi lingkup dari perspektif pengguna.             |
| **All Team Members** | Mengidentifikasi dan melaporkan potensi perubahan lingkup atau ketidakjelasan persyaratan.            |

---

## 6. Tools and Techniques

* **Markdown & Docusaurus:** Sebagai platform utama untuk mendokumentasikan semua aspek lingkup.
* **Git:** Untuk *version control* dan kolaborasi pada semua dokumen lingkup.
* **Mermaid.js:** Untuk visualisasi WBS atau alur proses definisi lingkup jika diperlukan.
* **Draw.io / Diagrams.net:** Untuk diagram yang lebih kompleks yang akan diekspor sebagai gambar dan disisipkan di Markdown.
* **Sistem Komunikasi Internal:** Email, Slack/Teams untuk komunikasi terkait lingkup dan keputusan CR.

---

## 7. Change Log

| Version | Date       | Author        | Description of Change           |
| :------ | :--------- | :------------ | :------------------------------ |
| 1.0     | 2025-06-12 | [Nama Anda]   | Initial Draft of Scope Management Plan |
|         |            |               |                                 |

---