---
id: communication-plan
title: Communication Plan
description: Project communication Management Plan Implementasi Sistem Dokumentasi Internal ETOS
tags: [project management, communication plan]
---

## 1. Introduction

Dokumen ini menguraikan rencana komunikasi untuk proyek "Implementasi Sistem Dokumentasi Internal ETOS". Tujuannya adalah untuk memastikan bahwa informasi proyek yang tepat dikomunikasikan kepada *stakeholder* yang tepat, pada waktu yang tepat, dan menggunakan saluran yang paling efektif, sehingga mendukung pengambilan keputusan, kolaborasi, dan meminimalkan miskomunikasi.

---

## 2. Communication Objectives

* Memastikan semua *stakeholder* proyek memiliki pemahaman yang jelas tentang tujuan, lingkup, *progress*, dan potensi risiko proyek.
* Mendorong kolaborasi yang efektif di antara tim proyek dan *stakeholder* lainnya.
* Memastikan *feedback* dan keputusan penting dikumpulkan dan didistribusikan secara tepat waktu.
* Membangun dan menjaga dukungan *stakeholder* terhadap proyek.

---

## 3. Key Stakeholders

Berikut adalah daftar *stakeholder* utama proyek ini yang akan menerima komunikasi:

| Stakeholder Group       | Contoh Peran/Nama           | Kepentingan dalam Proyek                       |
| :---------------------- | :-------------------------- | :--------------------------------------------- |
| **Project Team** | Project Manager, Lead Technical Writer, IT Developers, Admin Docusaurus | Pelaksana inti proyek, bertanggung jawab atas *deliverables*. |
| **Project Sponsor/Management** | CEO, Head of IT, Head of Business User Dept | Pemberi dukungan, pengambil keputusan strategis, penyedia sumber daya. |
| **Subject Matter Experts (SME)** | IT Engineers, ERP Product Owners, Senior Users | Penyedia konten teknis dan fungsional, *reviewer* konten. |
| **End Users** | Seluruh karyawan ETOS       | Penerima manfaat sistem dokumentasi, penyedia *feedback* adopsi. |
| **Vendor Eksternal** | (Jika ada, misal: penyedia hosting cloud) | Penyedia layanan/produk yang memengaruhi proyek. |

---

## 4. Communication Matrix

Matriks komunikasi ini merinci detail setiap jenis komunikasi yang akan dilakukan selama proyek.

| What (Is Communicated)        | Why (Purpose)                                | Who (Recipient)             | Who (Owner/Sender) | When (Frequency) | How (Method/Channel)               |
| :---------------------------- | :------------------------------------------- | :-------------------------- | :----------------- | :--------------- | :--------------------------------- |
| **Project Status Update** | Memantau *progress*, isu, risiko, & *action items*. | Project Team                | Project Manager    | Weekly           | Weekly Stand-up Meeting, Meeting Notes (Markdown) |
| **Progress Report (High-Level)** | Menginformasikan *milestone* & *health* proyek. | Project Sponsor/Management  | Project Manager    | Bi-Weekly        | Email Ringkasan, Laporan Slide (PPT/PDF) |
| **Risk & Issue Updates** | Mengkomunikasikan risiko baru, status, & mitigasi. | Project Team, Project Sponsor (jika kritis) | Project Manager    | As needed / Weekly | Weekly Stand-up Meeting, Email, Project Risk Register (Markdown) |
| **Change Request Status** | Memberi tahu status CR yang diajukan.        | Pemohon CR, Project Team, Project Sponsor | Project Manager    | As needed        | Email, Change Log (Markdown)       |
| **Content Review Request** | Meminta *review* & *feedback* pada dokumen. | SME (IT/Business)           | Lead Technical Writer | As needed        | Email dengan link dokumen Docusaurus |
| **Feedback on Documentation** | Mengumpulkan saran & perbaikan dari pengguna. | Project Team                | Lead Technical Writer | Ongoing          | Feedback Form (di Docusaurus), Helpdesk Ticket |
| **System Launch Announcement** | Memberi tahu peluncuran sistem dokumentasi.  | All Employees               | Project Manager    | One-time         | Email Blast, Internal Announcement (Intranet/Chat) |
| **User Training/Walkthrough** | Melatih pengguna cara mengakses & menggunakan. | End Users                   | Lead Technical Writer | As needed        | Sesi Online/Offline, Video Tutorial |
| **Documentation Updates** | Menginformasikan pembaruan penting pada dokumen. | All Users                   | Lead Technical Writer | Monthly / As needed | Email Ringkasan, Bagian "What's New" di Docusaurus |

---

## 5. Communication Channels & Tools

* **Rapat Tatap Muka/Online:** Untuk diskusi yang mendalam, pengambilan keputusan, dan *brainstorming*.
    * *Tools:* Google Meet / Zoom / Microsoft Teams
* **Email:** Untuk komunikasi formal, distribusi laporan, dan notifikasi penting.
    * *Tools:* GMail / Outlook
* **Internal Chat Platform:** Untuk komunikasi cepat, pertanyaan singkat, dan koordinasi sehari-hari.
    * *Tools:* Slack / Microsoft Teams Chat
* **Docusaurus Documentation Site:** Sebagai sumber kebenaran tunggal untuk semua dokumentasi proyek dan outputnya.
    * *Tools:* Docusaurus (hosting di GitHub Pages/Server Internal)
* **Git Repository:** Untuk kolaborasi pada dokumen Markdown dan pelacakan perubahan.
    * *Tools:* GitHub / GitLab / Bitbucket
* **Helpdesk System:** Untuk mengelola *feedback* dan isu dari pengguna akhir.
    * *Tools:* Sistem Helpdesk ERP internal (seperti `erp.etos.app/helpdesk/tiket/saya`)
* **Meeting Notes:** Dokumen Markdown di `docs/pm/mom/` untuk mencatat hasil rapat.

---

## 6. Communication Guidelines

* **Jelas dan Ringkas:** Semua komunikasi harus mudah dipahami, menghindari jargon yang tidak perlu.
* **Tepat Waktu:** Komunikasi harus disampaikan sesuai jadwal yang ditentukan.
* **Audiens yang Tepat:** Pastikan informasi disesuaikan dengan kebutuhan dan tingkat pemahaman audiens.
* **Konsisten:** Gunakan terminologi dan format yang konsisten di semua komunikasi proyek.
* **Transparan:** Usahakan transparansi semaksimal mungkin, terutama terkait isu dan risiko.
* **Saluran yang Tepat:** Pilih saluran komunikasi yang paling efektif untuk pesan tertentu.
* **Mendorong Feedback:** Secara aktif mencari *feedback* dan menanggapi pertanyaan dari *stakeholder*.

---

## 7. Escalation Plan

Jika ada masalah atau keputusan penting yang tidak dapat diselesaikan melalui saluran komunikasi reguler, proses eskalasi berikut akan diikuti:

1.  **Level 1 (Tim Proyek):** Isu dibahas dalam rapat mingguan tim proyek.
2.  **Level 2 (Project Manager):** Jika tidak terselesaikan, Project Manager akan mengambil keputusan atau membawa ke *stakeholder* tingkat berikutnya.
3.  **Level 3 (Project Sponsor/Steering Committee):** Untuk isu-isu strategis atau dampak tinggi yang memerlukan keputusan manajemen puncak, Project Manager akan eskalasi ke Project Sponsor atau Komite Pengarah Proyek.

---

## 8. Change Log

| Version | Date       | Author        | Description of Change           |
| :------ | :--------- | :------------ | :------------------------------ |
| 1.0     | 2025-06-12 | [Nama Anda]   | Initial Draft of Communication Plan |
|         |            |               |                                 |

---