function assembleTitle(title, config) {
    // Default configuration
    const defaultConfig = {
        prefix: '',
        suffix: '',
        uppercase: false,
        lowercase: false,
        capitalize: false
    };

    // Merge default config with provided config
    const finalConfig = { ...defaultConfig, ...config };

    // Apply transformations based on the config
    if (finalConfig.uppercase) {
        title = title.toUpperCase();
    } else if (finalConfig.lowercase) {
        title = title.toLowerCase();
    } else if (finalConfig.capitalize) {
        title = title.charAt(0).toUpperCase() + title.slice(1);
    }

    // Add prefix and suffix
    title = `${finalConfig.prefix}${title}${finalConfig.suffix}`;

    return title;
}

// Example usage
const title = "hello world";
const config = {
    prefix: "Welcome: ",
    suffix: "!",
    capitalize: true
};

const assembledTitle = assembleTitle(title, config);
console.log(assembledTitle);  // Output: "Welcome: Hello world!"
