const sidebars = {
    default: [
        {
            type: 'doc',
            id: 'overview',
        },
        {
            type: 'category',
            label: 'IT Technical Guides',
            items: [
                {
                    type: 'category',
                    label: 'System Architecture',
                    items: [
                        'system_architecture/overview',
                        'system_architecture/db_schema',
                        'system_architecture/api_doc',
                    ],
                },
                {
                    type: 'category',
                    label: 'Codebase Guidlines',
                    items: [
                        'codebase_guidelines/coding_standards',
                        'codebase_guidelines/deployment_process',
                    ],
                },
                {
                    type: 'category',
                    label: 'Infrastructure',
                    items: [
                        'infrastructure/server_setup',
                        'infrastructure/network_diagrams',
                    ],
                },
                {
                    type: 'category',
                    label: 'Troubleshooting',
                    items: [
                        'troubleshooting/common_issues',
                        'troubleshooting/debugging_tips',
                    ],
                }
            ],
        },
    ],
};

export default sidebars;