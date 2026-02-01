const fs = require('fs');
const path = require('path');

// Load .env.local if present
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach(line => {
    const m = line.match(/^\s*([A-Za-z0-9_]+)=(.*)$/);
    if (m) {
      const k = m[1];
      let v = m[2] || '';
      if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
      process.env[k] = v;
    }
  });
}

async function main(){
  try{
    const { getApps, initializeApp } = require('firebase-admin/app');
    const { getFirestore } = require('firebase-admin/firestore');

    const clientEmail = process.env.AUTH_FIREBASE_CLIENT_EMAIL;
    const projectId = process.env.AUTH_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
    let privateKey = process.env.AUTH_FIREBASE_PRIVATE_KEY || process.env.FIREBASE_PRIVATE_KEY;
    if (!clientEmail || !privateKey || !projectId) {
      console.log('Missing Firebase env vars (checked AUTH_FIREBASE_*/FIREBASE_*). Skipping initialization.');
      process.exit(0);
    }
    privateKey = privateKey.replace(/\\n/g, '\n');

    const apps = getApps();
    if (apps.length === 0) {
      initializeApp({
        credential: require('firebase-admin/app').cert({
          projectId,
          clientEmail,
          privateKey,
        })
      });
      console.log('firebase-admin initialized successfully');
    } else {
      console.log('firebase-admin already initialized');
    }

    // Accessing getFirestore won't perform network requests until used.
    const db = getFirestore();
    if (db) console.log('getFirestore() returned an object');
    process.exit(0);
  }catch(err){
    console.error('Initialization failed:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

main();
