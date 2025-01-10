import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDVTbol-gCz6oQP1TkD8jo3k8M-v3NDBNA',
  authDomain: 'smartbox-a4210.firebaseapp.com',
  databaseURL: 'https://smartbox-a4210-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'smartbox-a4210',
  storageBucket: 'smartbox-a4210.appspot.com',
  messagingSenderId: '492144900610',
  appId: '1:492144900610:web:6244166539a47dc77dc51b',
};

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
  ],
}).catch((err) => console.error(err));
