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
      label: 'Kontrak Lokasi',
      items: ['kontrak-lokasi/cico-mode','kontrak-lokasi/kontak-pic-multiple', 'kontrak-lokasi/stock-opname','kontrak-lokasi/request-pindah-jadwal'], 
    },
  ],
};

export default sidebars;
