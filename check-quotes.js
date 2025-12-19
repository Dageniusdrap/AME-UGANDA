const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    let pubKey = null;

    lines.forEach(line => {
        if (line.startsWith('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=')) {
            // Get raw value after equals
            const rawValue = line.substring('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY='.length);
            console.log(`Raw value first char: '${rawValue.charAt(0)}'`);
            console.log(`Raw value last char: '${rawValue.charAt(rawValue.length - 1)}'`);
            console.log(`Is quoted?: ${rawValue.startsWith('"') || rawValue.startsWith("'")}`);
        }
    });

} catch (err) {
    console.error("Error:", err.message);
}
