const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'overview', // akan mengarah ke docs/etl-mobile/overview.md
    },
    {
      type: 'category',
      label: 'ERP V2',
      items: ['overview', 'login'], 
    },
    {
      type: 'category',
      label: 'Helpdesk',
      items: ['helpdesk/buat-tiket', 'helpdesk/respon-tiket'], 
    },
    {
      type: 'category',
      label: 'Human Resource',
      items: ['hr/kepegawaian', 'hr/hr-management', 'hr/performance','hr/ga','hr/development','hr/team','hr/team','hr/master-config','hr/absensi'],
    },
    {
      type: 'category',
      label: 'Warehouse',
      items: ['warehouse/dashboard', 'warehouse/stock','warehouse/pemakaian','warehouse/EQS','warehouse/document-purchase','warehouse/myrequest','warehouse/in','warehouse/out','warehouse/transfer-in'],
    },
    {
      type: 'category',
      label: 'Assets',
      items: ['assets/dashboard', 'assets/model','assets/asset','assets/maintenance','assets/received','assets/isused','assets/audit-stock','assets/temuan','assets/scrap','assets/pengaturan'],
    },
    {
      type: 'category',
      label: 'Company',
      items: ['company/profile','company/pengumuman','company/perizinan','company/contract','company/training','company/ga'],
    },
    {
      type: 'category',
      label: 'Vendor',
      items: ['vendor/vendor'],
    },
    {
      type: 'category',
      label: 'Purchasing',
      items: ['purchasing/model-limit-request','purchasing/request-global','purchasing/po'],
    },
    {
      type: 'category',
      label: 'Penawaran',
      items: ['penawaran/kontak','penawaran/prospek','penawaran/survey','penawaran/penawaran','penawaran/pengaturan'],
    },
    {
      type: 'category',
      label: 'Pelanggan',
      items: ['pelanggan/daftar-pelanggan','pelanggan/pelanggan-aktif'],
    },
    {
      type: 'category',
      label: 'Kontrak Lokasi',
      items: ['kontrak-lokasi/cico-mode','kontrak-lokasi/kontak-pic-multiple', 'kontrak-lokasi/stock-opname','kontrak-lokasi/request-pindah-jadwal'], 
    },
    {
      type: 'category',
      label: 'Work Order',
      items: ['wo/dashboard','wo/mobile','wo/standby','wo/rekap','wo/upload','wo/hama-jenis-kontrak','wo/hama-perangkap'],
    },
  ],
};

export default sidebars;
