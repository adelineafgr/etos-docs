const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'ERP V1',
      items: ['overview', 'login'],
    },
    {
      type: 'category',
      label: 'User & Role',
      items: ['user/users','user/groups','user/modules'],
    },
    {
      type: 'category',
      label: 'Company',
      items: ['company/company', 'company/settings', 'company/announcement', 'company/events','company/legal','company/certificate','company/company-letters'],
    },
    {
      type: 'category',
      label: 'Employee',
      items: ['employee/all','employee/request'],
    },
    {
      type: 'category',
      label: 'HR Management',
      items: ['hrm/notes', 'hrm/warning-letter','hrm/promotion','hrm/termination'],
    },
    {
      type: 'category',
      label: 'Development',
      items: ['dev/lisensi','dev/training'],
    },
    {
      type: 'category',
      label: 'General',
      items: ['general/add'],
    },
    {
      type: 'category',
      label: 'Settings',
      items: ['settings/employee-status','settings/warning','settings/license'],
    },
    {
      type: 'category',
      label: 'Calendar',
      items: ['cal/leave','cal/overtime','cal/attendance','cal/on-duty','cal/setting'],
    },
    {
      type: 'category',
      label: 'Absensi',
      items: ['absensi/notes', 'absensi/warning-letter','absensi/promotion','absensi/termination','absensi/resignation'],
    },
    {
      type: 'category',
      label: 'Account',
      items: ['acc/es', 'acc/ca', 'acc/petty-cash', 'acc/billing','acc/manual-payment','acc/bank-account'],
    },
    {
      type: 'category',
      label: 'Request',
      items: ['req/expenses','req/hotel','req/ticket','req/transport','req/uniform','req/settings'],
    },
    {
      type: 'category',
      label: 'Pembayaran Diawal',
      items: ['pembayaran-awal/draft','pembayaran-awal/otorisasi','pembayaran-awal/pending','pembayaran-awal/aktif','pembayaran-awal/habis'],
    },
    {
      type: 'category',
      label: 'Penawaran',
      items: ['penawaran/activity','penawaran/info-pelanggan','penawaran/penawaran','penawaran/perpanjangan'],
    },
    {
      type: 'category',
      label: 'Pelanggan',
      items: ['pelanggan/all','pelanggan/aktif'],
    },
    {
      type: 'category',
      label: 'Kontrak',
      items: ['kontrak/draft','kontrak/otorisasi','kontrak/termin'],
    },
  ],
};

export default sidebars;
