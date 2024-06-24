const rules = [
    { pattern: /\.e\.s\b/g, replacement: 's' },
    { pattern: /\.e\b/g, replacement: '' },

    { pattern: /·e·s\b/g, replacement: 's' },
    { pattern: /·e\b/g, replacement: '' },

    { pattern: /-e-s\b/g, replacement: 's' },
    { pattern: /-e\b/g, replacement: '' },
]

new RetourneFrancais()
    .rules(rules)
    .text(document.body)
    .run()
