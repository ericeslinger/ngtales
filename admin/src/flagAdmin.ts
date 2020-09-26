import admin from 'firebase-admin';

(async () => {
  const args = process.argv.slice(2);
  const app = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://framesystem-rpg.firebaseio.com',
    projectId: 'framesystem-rpg',
  });
  await Promise.all(
    args.map((arg) =>
      admin
        .auth()
        .setCustomUserClaims(arg, { admin: true, siteAuthor: true })
        .then((v) => console.log(v))
        .catch((e) => {
          console.log('ERROR');
          console.log(e);
        })
    )
  );
})();
