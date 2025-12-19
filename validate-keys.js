const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    let pubKey = null;
    let secKey = null;

    lines.forEach(line => {
        if (line.startsWith('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=')) {
            pubKey = line.split('=')[1].trim();
        }
        if (line.startsWith('CLERK_SECRET_KEY=')) {
            secKey = line.split('=')[1].trim();
        }
    });

    console.log("--- CONFIG CHECK ---");
    if (pubKey) {
        console.log(`Publishable Key Found: Yes`);
        console.log(`Length: ${pubKey.length}`);
        console.log(`Starts with 'pk_': ${pubKey.startsWith('pk_')}`);
        console.log(`Starts with 'pk_test_': ${pubKey.startsWith('pk_test_')}`);
        console.log(`Value preview: ${pubKey.substring(0, 10)}...`);
    } else {
        console.log("Publishable Key Found: NO");
    }

    if (secKey) {
        console.log(`Secret Key Found: Yes`);
        console.log(`Length: ${secKey.length}`);
        console.log(`Starts with 'sk_': ${secKey.startsWith('sk_')}`);
    } else {
        console.log("Secret Key Found: NO");
    }

} catch (err) {
    console.error("Could not read .env.local:", err.message);
}
