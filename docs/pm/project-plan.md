---
id: project-plan
title: Project Plan
description: Project Plan Implementasi Sistem Dokumentasi Internal ETOS
tags: [project management, project plan]
---

## 1. Executive Summary

Dokumen ini menguraikan rencana proyek untuk membangun dan mengimplementasikan sistem dokumentasi internal yang komprehensif untuk ETOS, menggunakan Docusaurus dan Markdown. Tujuan utama proyek ini adalah untuk menciptakan sumber daya terpusat yang dapat diandalkan sebagai pedoman manajemen proyek, sumber daya teknis IT, dan panduan pengguna untuk ERP internal serta sistem IT lainnya. Sistem dokumentasi ini diharapkan dapat meningkatkan efisiensi operasional, mengurangi ketergantungan pada pengetahuan individu, dan mempermudah onboarding karyawan baru.

---

## 2. Project Goals & Objectives

### 2.1 Goals (Tujuan Besar)

* Membangun sistem dokumentasi internal yang terpusat dan mudah diakses.
* Meningkatkan efisiensi komunikasi dan kolaborasi antar tim (Project Management, IT, User).
* Memastikan ketersediaan informasi yang akurat dan *up-to-date* mengenai sistem dan proses IT perusahaan.

### 2.2 Objectives (Target Spesifik, Terukur, Tercapai, Relevan, Berbatas Waktu - SMART)

* **Objective 1 (Struktur):** Menyelesaikan struktur folder dan navigasi Docusaurus untuk 3 kategori utama (Project Management, Technical IT, User) dalam waktu 2 minggu setelah proyek dimulai.
* **Objective 2 (Konten Teknis):** Mengisi minimal 80% dokumentasi teknis IT (arsitektur ERP, API, deployment) dengan detail relevan dalam 6 minggu setelah struktur disepakati.
* **Objective 3 (Konten Pengguna):** Menyelesaikan panduan pengguna untuk 3 modul utama ERP yang paling sering digunakan dalam 8 minggu.
* **Objective 4 (Konten Project Management):** Mengintegrasikan *timeline* proyek IT dan catatan rapat secara rutin ke dalam sistem dokumentasi setiap minggu.
* **Objective 5 (Peluncuran):** Meluncurkan versi beta sistem dokumentasi untuk tim internal pada akhir **Juli 2025**.
* **Objective 6 (Adopsi):** Mencapai tingkat adopsi 75% oleh tim yang relevan (diukur dari frekuensi akses dan kontribusi) dalam 1 bulan setelah peluncuran beta.

---

## 3. Scope Management

### 3.1 In-Scope (Yang Akan Dikerjakan)

* **Pengembangan Platform:** Konfigurasi Docusaurus, tema, sidebar, dan plugin dasar (termasuk Mermaid.js).
* **Dokumentasi Project Management:** Timeline proyek IT, catatan rapat, *risk register*, *project charter template*.
* **Dokumentasi Teknis IT:** Arsitektur sistem ERP internal, dokumentasi API (jika ada), *database schema*, panduan *deployment*, *troubleshooting guide* dasar, *coding standards*.
* **Dokumentasi Pengguna:** Panduan penggunaan modul-modul utama ERP internal, FAQ, *glossary* istilah.
* **Versioning:** Implementasi kontrol versi menggunakan Git (misalnya GitHub/GitLab).
* **Deployment:** Integrasi dengan GitHub Pages/GitLab Pages/server internal untuk akses tim.

### 3.2 Out-of-Scope (Yang Tidak Akan Dikerjakan di Fase Ini)

* Integrasi *real-time* dengan *project management tool* eksternal (misalnya Jira, Asana).
* Sistem pencarian yang sangat kompleks dengan *natural language processing*.
* Fitur kolaborasi *built-in* selain yang disediakan oleh Git (misalnya, komentar langsung di halaman).
* Desain ulang UI/UX Docusaurus yang ekstensif di luar penyesuaian tema dasar.
* Dokumentasi untuk sistem yang tidak terkait langsung dengan ERP internal atau proses IT inti.

---

## 4. Deliverables

Berikut adalah daftar *deliverable* utama proyek ini:

* Repositori Git dengan proyek Docusaurus yang terkonfigurasi.
* Struktur navigasi sidebar yang jelas dan mudah dipahami.
* Setidaknya 10 dokumen Markdown untuk Project Management (termasuk *timeline* dan 3 catatan rapat).
* Setidaknya 15 dokumen Markdown untuk Technical IT (mencakup arsitektur, API, database, deployment).
* Setidaknya 10 dokumen Markdown untuk Panduan Pengguna (mencakup 3 modul utama, FAQ, *glossary*).
* Dokumentasi proses kontribusi dan pemeliharaan untuk tim.
* URL sistem dokumentasi yang dapat diakses oleh tim internal.

---

## 5. Project Timeline (Estimasi)

> **Catatan:** Detail *timeline* akan lebih lengkap di dokumen `01_Project_Management/03_Timeline_IT_Projects.md` dan diperbarui secara berkala.

| Phase                | Start Date    | End Date      | Duration (Weeks) | Key Activities                                       | Status      |
| :------------------- | :------------ | :------------ | :--------------- | :--------------------------------------------------- | :---------- |
| **Phase 1: Setup & Structuring** | 2025-06-17    | 2025-06-28    | 2                | Instalasi Docusaurus, Konfigurasi Dasar, Desain Sidebar, Review Struktur. | Not Started |
| **Phase 2: Content Development - PM** | 2025-07-01    | 2025-07-12    | 2                | Pengumpulan & Penulisan Project Plan, Timeline, Risks, Communication Plan. | Not Started |
| **Phase 3: Content Development - IT Technical** | 2025-07-01    | 2025-08-09    | 6                | Penulisan Arsitektur ERP, API, Database, Deployment, Troubleshooting. | Not Started |
| **Phase 4: Content Development - User** | 2025-07-08    | 2025-09-06    | 8                | Penulisan Panduan Modul ERP, FAQ, Glossary, Screenshot. | Not Started |
| **Phase 5: Review & Refinement** | 2025-09-02    | 2025-09-13    | 2                | Internal Review, Feedback Collection, Revisi Konten. | Not Started |
| **Phase 6: Deployment & Launch** | 2025-09-16    | 2025-09-20    | 1                | Final Deployment, Komunikasi Peluncuran.             | Not Started |
| **Phase 7: Maintenance & Training** | 2025-09-23    | Ongoing       | -                | Pelatihan Pengguna, Pembaruan Berkala, Pengelolaan Feedback. | Not Started |

---

## 6. Roles & Responsibilities

| Role                  | Name (or Department) | Responsibilities                                                                                                        |
| :-------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Project Manager** | [Nama Anda]          | Perencanaan, pengawasan, manajemen risiko, komunikasi *stakeholder*, memastikan *deliverable* terpenuhi.                    |
| **Lead Technical Writer** | [Nama Anda/PIC]      | Pengembangan konten, memastikan konsistensi format Markdown, koordinasi pengumpulan informasi dari tim IT.                  |
| **IT Team** | Tim IT ETOS          | Menyediakan informasi teknis yang akurat, membantu dalam penulisan dokumentasi teknis, *review* konten teknis.            |
| **ERP Product Owner** | [PIC dari Bisnis]    | Menyediakan informasi fungsional ERP, membantu dalam penulisan panduan pengguna, *review* konten pengguna.                |
| **End Users (Pilot)** | Perwakilan User      | Memberikan *feedback* tentang kemudahan penggunaan dan kelengkapan panduan pengguna.                                    |

---

## 7. Resources Required

* **Manpower:** Project Manager, Technical Writer, IT Developers, ERP Business Users.
* **Software:** Docusaurus, Node.js, Git, Code Editor (VS Code), Markdown Editor (Typora/Obsidian), Mermaid.js (via Docusaurus), Diagramming Tools (draw.io/Lucidchart).
* **Infrastructure:** Repositori Git (GitHub/GitLab), Hosting untuk Docusaurus (GitHub Pages/Server Internal).

---

## 8. Risk Management

| Risk ID | Risk Description                               | Probability | Impact | Mitigation Strategy                                                                                   | Owner   |
| :------ | :--------------------------------------------- | :---------- | :----- | :------------------------------------------------------------------------------------------------------ | :------ |
| R01     | Kurangnya Ketersediaan Informasi dari Sumber   | Medium      | High   | Jadwalkan sesi *knowledge transfer* rutin, alokasikan waktu khusus untuk tim IT/Bisnis, libatkan manajemen. | PM      |
| R02     | Konten Usang Setelah Peluncuran                | Medium      | High   | Tentukan PIC untuk setiap bagian, jadwalkan *review* dan *update* bulanan, buat proses *feedback* pengguna. | PM      |
| R03     | Adopsi Rendah oleh Pengguna/Tim                | Medium      | Medium | Sediakan pelatihan singkat, promosikan manfaat dokumentasi, buat dokumentasi mudah dicari dan diakses.  | PM      |
| R04     | Inkonsistensi Format dan Gaya Penulisan        | Low         | Medium | Buat pedoman penulisan Markdown yang jelas, gunakan linter Markdown, lakukan *peer review*.              | Lead TW |

---

## 9. Communication Plan

* **Weekly Stand-up/Update Meeting:** Dengan tim inti proyek (PM, Lead TW, Perwakilan IT).
* **Bi-weekly Progress Report:** Kepada *stakeholder* utama (Manajemen).
* **Internal Announcement:** Via email/chat group untuk peluncuran dan pembaruan penting.
* **Feedback Channel:** Saluran khusus (misalnya, formulir Google, tiket Helpdesk, atau diskusi di GitHub Issues) untuk saran dan perbaikan.

---

## 10. Success Metrics

* **Jumlah Dokumen:** Pencapaian target jumlah dokumen di setiap kategori.
* **Tingkat Akurasi:** Hasil *review* dan *feedback* dari tim terkait.
* **Tingkat Adopsi:** Jumlah kunjungan ke sistem dokumentasi dan jumlah kontribusi (jika relevan).
* **Kepuasan Pengguna:** Survei singkat setelah peluncuran untuk mengukur kepuasan.

---

## 11. Sign-off

Dokumen ini disetujui oleh:

| Nama / Jabatan                  | Tanda Tangan | Tanggal       |
| :------------------------------ | :----------- | :------------ |
| [Nama Project Manager]          |              | [Tanggal]     |
| [Nama Head of IT/Teknis]        |              | [Tanggal]     |
| [Nama Head of Business/User Dept]|              | [Tanggal]     |

---