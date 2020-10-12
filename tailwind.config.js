module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: {
        content: [
            './resources/**/*.vue',
            './resources/**/*.scss',
            '/public/**/*.html',
        ],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
