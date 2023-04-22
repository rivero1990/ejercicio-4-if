let pollo = confirm("Tienes pollo?");
let carne = confirm("Tienes carne?");
let agua = confirm("Tienes agua?");
let verdura = confirm("Tienes verdura?");
let condimentos = confirm("Tienes condimentos?");
let cuboDeCaldo = confirm("Tienes cubo de caldo?");

if ((pollo || carne ) && (agua && verdura) && (condimentos || cuboDeCaldo)) {
    document.write("La sopa esta preparada");
} else {
    document.write("La sopa no se puede preparar");
}
