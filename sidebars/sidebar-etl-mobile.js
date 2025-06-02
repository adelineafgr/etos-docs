const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'ETL Mobile',
      collapsed: false,
      items: ['kebijakan-privasi', 'login', 'download', 'checkin', 'checkout', 'area', 'upload', 'export', 'wo', 'setelan'],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['FAQ/forceclose', 'FAQ/uncompleted','FAQ/gagal-upload', 'FAQ/server-error','FAQ/tidak-ada-lokasi'],
    },
  ],
};

export default sidebars;
