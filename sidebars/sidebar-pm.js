const sidebars = {
    default: [
        {
            type: 'doc',
            id: 'timeline',
        },
        {
            type: 'category',
            label: 'Project Management',
            collapsed: false,
            items: [
                'project-plan',
                'scope',
                'risk',
                'communication-plan',
                {
                    type: 'category',
                    label: 'Meeting Notes',
                    items: [
                        'mom/2025-06-06',
                    ],
                },
            ],
        },
    ],
};

export default sidebars;