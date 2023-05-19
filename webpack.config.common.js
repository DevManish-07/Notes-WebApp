const commonConfig = require('./webpack.config.common');

module.exports = (env) => {
    const isProduction = env === 'production';

    // Load the appropriate configuration based on the environment
    const config = isProduction
        ? require('./webpack.config.prod.js')
        : require('./webpack.config.dev.js');

    // Merge common configuration with environment-specific configuration
    return {
        ...commonConfig,
        ...config,
    };
};