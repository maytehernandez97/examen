
 const crudSchema = new Schema({
 Empresa: String,
 Vehiculo: String,
 Conductor: String,
 Viajero: String,
 status:{
     type: Boolean,
     default: false
 }
 });

