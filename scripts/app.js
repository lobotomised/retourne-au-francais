import RetourneFrancais from './RetourneFrancais';

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

    { pattern: /eur·rices/g, replacement: 'eurs' }
];

if(typeof document !== 'undefined') {
    new RetourneFrancais()
        .rules(rules)
        .text(document.body)
        .run();
}

export default rules;
