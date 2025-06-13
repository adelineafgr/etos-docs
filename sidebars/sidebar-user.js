const sidebars = {
    default: [
        {
            type: 'doc',
            id: 'overview',	
        },
        //ERP V1
        {
            type: 'category',
            label: 'ERP V1',
            items: [
                'erp-v1/overview',
                'erp-v1/login',
                {
                    "type": "category",
                    "label": "User & Role",
                    "items": [
                    "erp-v1/user/users",
                    "erp-v1/user/groups",
                    "erp-v1/user/modules"
                    ]
                },
                {
                    "type": "category",
                    "label": "Company",
                    "items": [
                    "erp-v1/company/company",
                    "erp-v1/company/settings",
                    "erp-v1/company/announcement",
                    "erp-v1/company/events",
                    "erp-v1/company/legal",
                    "erp-v1/company/certificate",
                    "erp-v1/company/company-letters"
                    ]
                },
                {
                    "type": "category",
                    "label": "Employee",
                    "items": [
                    "erp-v1/employee/all",
                    "erp-v1/employee/request"
                    ]
                },
                {
                    "type": "category",
                    "label": "HR Management",
                    "items": [
                    "erp-v1/hrm/notes",
                    "erp-v1/hrm/warning-letter",
                    "erp-v1/hrm/promotion",
                    "erp-v1/hrm/termination"
                    ]
                },
                {
                    "type": "category",
                    "label": "Development",
                    "items": [
                    "erp-v1/dev/lisensi",
                    "erp-v1/dev/training"
                    ]
                },
                {
                    "type": "category",
                    "label": "General",
                    "items": [
                    "erp-v1/general/add"
                    ]
                },
                {
                    "type": "category",
                    "label": "Settings",
                    "items": [
                    "erp-v1/settings/employee-status",
                    "erp-v1/settings/warning",
                    "erp-v1/settings/license"
                    ]
                },
                {
                    "type": "category",
                    "label": "Calendar",
                    "items": [
                    "erp-v1/cal/leave",
                    "erp-v1/cal/overtime",
                    "erp-v1/cal/attendance",
                    "erp-v1/cal/on-duty",
                    "erp-v1/cal/setting"
                    ]
                },
                {
                    "type": "category",
                    "label": "Absensi",
                    "items": [
                    "erp-v1/absensi/notes",
                    "erp-v1/absensi/warning-letter",
                    "erp-v1/absensi/promotion",
                    "erp-v1/absensi/termination",
                    "erp-v1/absensi/resignation"
                    ]
                },
                {
                    "type": "category",
                    "label": "Account",
                    "items": [
                    "erp-v1/acc/es",
                    "erp-v1/acc/ca",
                    "erp-v1/acc/petty-cash",
                    "erp-v1/acc/billing",
                    "erp-v1/acc/manual-payment",
                    "erp-v1/acc/bank-account"
                    ]
                },
                {
                    "type": "category",
                    "label": "Request",
                    "items": [
                    "erp-v1/req/expenses",
                    "erp-v1/req/hotel",
                    "erp-v1/req/ticket",
                    "erp-v1/req/transport",
                    "erp-v1/req/uniform",
                    "erp-v1/req/settings"
                    ]
                },
                {
                    "type": "category",
                    "label": "Pembayaran Diawal",
                    "items": [
                    "erp-v1/pembayaran-awal/draft",
                    "erp-v1/pembayaran-awal/otorisasi",
                    "erp-v1/pembayaran-awal/pending",
                    "erp-v1/pembayaran-awal/aktif",
                    "erp-v1/pembayaran-awal/habis"
                    ]
                },
                {
                    "type": "category",
                    "label": "Penawaran",
                    "items": [
                    "erp-v1/penawaran/activity",
                    "erp-v1/penawaran/info-pelanggan",
                    "erp-v1/penawaran/penawaran",
                    "erp-v1/penawaran/perpanjangan"
                    ]
                },
                {
                    "type": "category",
                    "label": "Pelanggan",
                    "items": [
                    "erp-v1/pelanggan/all",
                    "erp-v1/pelanggan/aktif"
                    ]
                },
                {
                    "type": "category",
                    "label": "Kontrak",
                    "items": [
                    "erp-v1/kontrak/draft",
                    "erp-v1/kontrak/otorisasi",
                    "erp-v1/kontrak/termin"
                    ],
                },
            ],
        },

        //ERP V2
        {
            type: 'category',
            label: 'ERP V2',
            items: [
                'erp-v2/overview',
                'erp-v2/login',
            {
                "type": "category",
                "label": "ERP V2",
                "items": [
                "erp-v2/overview",
                "erp-v2/login"
                ]
            },
            {
                "type": "category",
                "label": "Helpdesk",
                "items": [
                "erp-v2/helpdesk/buat-tiket",
                "erp-v2/helpdesk/respon-tiket"
                ]
            },
            {
                "type": "category",
                "label": "Human Resource",
                "items": [
                "erp-v2/hr/kepegawaian",
                "erp-v2/hr/hr-management",
                "erp-v2/hr/performance",
                "erp-v2/hr/ga",
                "erp-v2/hr/development",
                "erp-v2/hr/team",
                "erp-v2/hr/master-config",
                "erp-v2/hr/absensi"
                ]
            },
            {
                "type": "category",
                "label": "Warehouse",
                "items": [
                "erp-v2/warehouse/dashboard",
                "erp-v2/warehouse/stock",
                "erp-v2/warehouse/pemakaian",
                "erp-v2/warehouse/EQS",
                "erp-v2/warehouse/document-purchase",
                "erp-v2/warehouse/myrequest",
                "erp-v2/warehouse/in",
                "erp-v2/warehouse/out",
                "erp-v2/warehouse/transfer-in"
                ]
            },
            {
                "type": "category",
                "label": "Assets",
                "items": [
                "erp-v2/assets/dashboard",
                "erp-v2/assets/model",
                "erp-v2/assets/asset",
                "erp-v2/assets/maintenance",
                "erp-v2/assets/received",
                "erp-v2/assets/isused",
                "erp-v2/assets/audit-stock",
                "erp-v2/assets/temuan",
                "erp-v2/assets/scrap",
                "erp-v2/assets/pengaturan"
                ]
            },
            {
                "type": "category",
                "label": "Company",
                "items": [
                "erp-v2/company/profile",
                "erp-v2/company/pengumuman",
                "erp-v2/company/perizinan",
                "erp-v2/company/contract",
                "erp-v2/company/training",
                "erp-v2/company/ga"
                ]
            },
            {
                "type": "category",
                "label": "Vendor",
                "items": [
                "erp-v2/vendor/vendor"
                ]
            },
            {
                "type": "category",
                "label": "Purchasing",
                "items": [
                "erp-v2/purchasing/model-limit-request",
                "erp-v2/purchasing/request-global",
                "erp-v2/purchasing/po"
                ]
            },
            {
                "type": "category",
                "label": "Penawaran",
                "items": [
                "erp-v2/penawaran/kontak",
                "erp-v2/penawaran/prospek",
                "erp-v2/penawaran/survey",
                "erp-v2/penawaran/penawaran",
                "erp-v2/penawaran/pengaturan"
                ]
            },
            {
                "type": "category",
                "label": "Pelanggan",
                "items": [
                "erp-v2/pelanggan/daftar-pelanggan",
                "erp-v2/pelanggan/pelanggan-aktif"
                ]
            },
            {
                "type": "category",
                "label": "Kontrak Lokasi",
                "items": [
                "erp-v2/kontrak-lokasi/kak",
                "erp-v2/kontrak-lokasi/cico-mode",
                "erp-v2/kontrak-lokasi/kontak-pic-multiple",
                "erp-v2/kontrak-lokasi/stock-opname",
                "erp-v2/kontrak-lokasi/request-pindah-jadwal"
                ]
            },
            {
                "type": "category",
                "label": "Work Order",
                "items": [
                "erp-v2/wo/dashboard",
                "erp-v2/wo/mobile",
                "erp-v2/wo/standby",
                "erp-v2/wo/rekap",
                "erp-v2/wo/upload",
                "erp-v2/wo/hama-jenis-kontrak",
                "erp-v2/wo/hama-perangkap"
                ],
            },
            ],
        },
        //ETL Mobile
        {
            type: 'category',
            label: 'ETL Mobile',
            items: [
                'etl-mobile/overview',
                'etl-mobile/kebijakan-privasi',
                'etl-mobile/login',
                'etl-mobile/download',
                'etl-mobile/checkin',
                'etl-mobile/area',
                'etl-mobile/wo',
                'etl-mobile/checkout',
                'etl-mobile/review',
                'etl-mobile/upload',
                'etl-mobile/export',
                'etl-mobile/setelan',
                {
                    type: 'category',
                    label: 'FAQ',
                    items: [
                    'etl-mobile/FAQ/forceclose',
                    'etl-mobile/FAQ/uncompleted',
                    'etl-mobile/FAQ/gagal-upload',
                    'etl-mobile/FAQ/server-error',
                    'etl-mobile/FAQ/tidak-ada-lokasi',
                    ],
                },
            ],
        },
        //ETL Standby
        {
            type: 'category',
            label: 'ETL Standby',
            items: [
                'etl-standby/overview',
                'etl-standby/kebijakan-privasi',
                'etl-standby/login',
                'etl-standby/download',
                'etl-standby/checkin',
                'etl-standby/area',
                'etl-standby/wo',
                'etl-standby/checkout',
                'etl-standby/review',
                'etl-standby/upload',
                'etl-standby/export',
                'etl-standby/setelan',
                {
                    type: 'category',
                    label: 'FAQ',
                    items: [
                    'etl-standby/FAQ/forceclose',
                    'etl-standby/FAQ/uncompleted',
                    'etl-standby/FAQ/gagal-upload',
                    'etl-standby/FAQ/server-error',
                    'etl-standby/FAQ/tidak-ada-lokasi',
                    ],
                },
            ],
        },
        //ETOS STARS
        {
            type: 'category',
            label: 'ETOS STARS',
            items: [
                'etos-stars/overview',
                'etos-stars/kebijakan-privasi',
                'etos-stars/login',
                'etos-stars/checkin',
                'etos-stars/checkin-diluar-jarak',
                'etos-stars/checkout',
                'etos-stars/checkout-diluar-jarak',
                'etos-stars/cuti',
            ],
        },
    ],
};

export default sidebars;