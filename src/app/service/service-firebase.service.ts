import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Notas } from '../pages/inicio/models/model-notas';

@Injectable({
  providedIn: 'root'
})
export class ServiceFirebaseService {

  private path = '/notas'
  recetasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.recetasRef = db.collection(this.path);

    this.recetasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.recetasRef.valueChanges();
  }

  save(nota: Notas){
    const uid = this.db.createId();
    nota.uid =  uid;
    return this.recetasRef.doc(uid).set(Object.assign({},nota))

  }
getReceta(uid: string){
  console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }

  elimarreceta(uid: string){
    return this.recetasRef.doc(uid).delete();
  }

}
