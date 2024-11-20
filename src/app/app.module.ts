import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"smartbox-a4210","appId":"1:492144900610:web:6244166539a47dc77dc51b","databaseURL":"https://smartbox-a4210-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"smartbox-a4210.firebasestorage.app","apiKey":"AIzaSyDVTbol-gCz6oQP1TkD8jo3k8M-v3NDBNA","authDomain":"smartbox-a4210.firebaseapp.com","messagingSenderId":"492144900610","measurementId":"G-9W08B7JYQL"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
