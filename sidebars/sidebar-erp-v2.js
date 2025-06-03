const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'overview', // akan mengarah ke docs/etl-mobile/overview.md
    },
    {
      type: 'category',
      label: 'ERP V2',
      items: ['overview', 'login'], // sesuaikan dengan file .md kamu
    },
    {
      type: 'category',
      label: 'Kontrak Lokasi',
      items: ['kontrak-lokasi/cico-mode','kontrak-lokasi/kontak-pic-multiple', 'kontrak-lokasi/stock-opname','kontrak-lokasi/request-pindah-jadwal'], // sesuaikan dengan file .md kamu
    },
  ],
};

export default sidebars;
