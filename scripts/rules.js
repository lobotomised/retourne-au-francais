const rules = [
    { pattern: /\.e\.s\b/g, replacement: 's' },
    { pattern: /\.es\b/g, replacement: 's' },
    { pattern: /\.e\b/g, replacement: '' },

    { pattern: /·e·s\b/g, replacement: 's' },
    { pattern: /·es\b/g, replacement: 's' },
    { pattern: /·e\b/g, replacement: '' },

    { pattern: /-e-s\b/g, replacement: 's' },
    { pattern: /-es\b/g, replacement: 's' },
    { pattern: /-e\b/g, replacement: '' },
]
