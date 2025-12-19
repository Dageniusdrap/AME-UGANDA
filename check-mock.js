const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    let pubKey = null;

    lines.forEach(line => {
        if (line.startsWith('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=')) {
            pubKey = line.split('=')[1].trim();
        }
    });

    if (pubKey && pubKey.includes('mock')) {
        console.log("KEY_IS_MOCK: TRUE");
    } else {
        console.log("KEY_IS_MOCK: FALSE");
        // Print first 12 chars to be sure
        console.log(`PREFIX: ${pubKey ? pubKey.substring(0, 12) : 'NONE'}`);
    }

} catch (err) {
    console.error("Error:", err.message);
}
