import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  getLatestStatus(): Observable<any> {
    return this.db
      .list('letterbox/history', (ref) => ref.limitToLast(1))
      .valueChanges()
      .pipe(
        map((data) => data.length > 0 ? data[0] : null)
      );
  }
}
