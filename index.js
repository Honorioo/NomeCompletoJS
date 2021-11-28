let nome= prompt("Digite seu nome:") || "";
let sobrenome= prompt("Digite seu sobrenome:")||"";

let Nomecompleto= `Nome completo: ${nome} ${sobrenome}`;
let Nomecatalogo= `Nome de catálogo: ${sobrenome.toUpperCase()}, ${nome}`;

alert(Nomecompleto);
alert(Nomecatalogo);