class Usuario {
    constructor (nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log(`RESULT: method getFullName: ${this.nombre} ${this.apellido}\n`);
    }

    addMascota(mascotaString) {
        console.log(`RESULT: method addMascota: value=${mascotaString} \n\tActual: ${this.mascotas}`);
        this.mascotas.push(mascotaString);
        console.log(`\tActualizado: ${this.mascotas}\n`);
    }

    addBook(libro) {
        this.libros.push(libro);
    }

    countMascotas() {
        console.log(`RESULT: method countMascotas: ${this.mascotas.length}`);
    }

    getBookName() {
        let nombreLibros=this.libros.map((libro)=>{
            return libro.nombre
        })
       console.log(`RESULT: method getBookName: ${nombreLibros}`);
    }
}

const oscar = new Usuario('Oscar','Pereyra',[],['picky','moshi','chichila']);

oscar.getFullName();
oscar.addMascota('chimuelo');
oscar.countMascotas();
oscar.addBook({nombre: 'Libro1', autor: 'Autor1'});
oscar.addBook({nombre: 'Libro2', autor: 'Autor2'});
oscar.getBookName();
