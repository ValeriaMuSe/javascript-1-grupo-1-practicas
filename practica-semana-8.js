const perro = {
  nombre: "Bobby",
  color: "Blanco", 
  edad: 7,
  sexo: "Macho",
  raza: "Chihuahua",
  cambioNombre: function(nombre){
    this.nombre = nombre;
  },
  cambioColor: function(color){
    this.color = color;
  },
   cambioRaza: function(raza){
    this.raza = raza;
  }
};

console.log("Perro")

console.log("El nombre del perro era " + perro.nombre);
perro.cambioNombre("Marley");
console.log("Ahora el nombre es " + perro.nombre);

console.log("El color del perro era " + perro.color);
perro.cambioNombre("Café");
console.log("Ahora el color es " + perro.nombre);

console.log("La raza del perro era " + perro.raza);
perro.cambioRaza("Pastor Alemán");
console.log("Ahora la raza es " + perro.raza);