const sidebars = {
  default: [
    {
      type: 'doc',
      id: 'overview', // akan mengarah ke docs/etl-mobile/overview.md
    },
    {
      type: 'category',
      label: 'ETOS STARS',
      collapsed: false,
      items: ['kebijakan-privasi','dashboard','login','checkin','checkin-diluar-jarak','checkout','checkout-diluar-jarak'], // sesuaikan dengan file .md kamu
    },
  ],
};

export default sidebars;
