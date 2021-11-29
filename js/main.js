class Tablero{

  constructor(altura, anchura, num_minas) {
    this.altura = altura || 10;
    this.anchura = anchura || 10;
    this.num_minas = num_minas || 10;
    this.tabla = new Array(this.altura);

    for (let i = 0; i < this.tabla.length; i++) {
      this.tabla[i] = new Array(this.anchura);
      for (let e = 0; e < this.tabla[i].length; e++) {
        this.tabla[i][e] = 0;
      }
    }
  }

  colorcarMinas(){
    let minas_colocadas = 0;
    while (minas_colocadas < this.num_minas) {
      let altura_aleatoria = Math.floor(Math.random() * (this.altura - 1) + 1);
      let anchura_aleatoria = Math.floor(Math.random() * (this.anchura - 1) + 1);


      if(this.tabla[altura_aleatoria][anchura_aleatoria] == 0){
        minas_colocadas++;
        this.tabla[altura_aleatoria][anchura_aleatoria] = "M";
      }
    }
  }

  colocarNumeros(){
    let minas_encontradas = 0;
    for (let i = 0; i < this.tabla.length; i++) {
      for (let e = 0; e < this.tabla[i].length; e++) {
        if(this.tabla[i][e] != "M"){
          if(i-1 >= 0 & e-1 >= 0){if(this.tabla[i-1][e-1] == "M"){minas_encontradas++;}}
          if(i-1 >= 0){if(this.tabla[i-1][e] == "M"){minas_encontradas++;}}
          if(i-1 >= 0 & e+1 <= this.anchura){if(this.tabla[i-1][e+1] == "M"){minas_encontradas++;}}
          if(e+1 < this.anchura){if(this.tabla[i][e+1] == "M"){minas_encontradas++;}}
          if(i+1 < this.altura){if(this.tabla[i+1][e] == "M"){minas_encontradas++;}}
          if(i+1 < this.altura & e-1 >= 0){if(this.tabla[i+1][e-1] == "M"){minas_encontradas++;}}
          if(e-1 >= 0){if(this.tabla[i][e-1] == "M"){minas_encontradas++;}}
          this.tabla[i][e] = minas_encontradas;
        }
        minas_encontradas = 0;
      }
    }
  }

  imprimirTabla(){
    let tabla = "<table>";

    for (let i = 0; i < this.tabla.length; i++) {
      tabla += "<tr>";
      for (let e = 0; e < this.tabla[i].length; e++) {
        tabla += "<td style='width: 20px; text-align: center'>" + this.tabla[i][e] + "</td>";
      }
      tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("general").innerHTML = tabla;
  }

  imprimirTabla2(){
    let tabla = "<table style='background-color: #cccccc; border: 1px solid black;'>";

    for (let i = 0; i < this.tabla.length; i++) {
      tabla += "<tr>";
      for (let e = 0; e < this.tabla[i].length; e++) {
        tabla += "<td style='width: 40px; height: 40px; text-align: center; border: 1px solid black; background-color: #999999;'><input type='button' width='40px' height='40px' onclick='destaparCasilla(i, e)'></td>";
      }
      tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("general").innerHTML = tabla;
  }

  destaparCasilla(alto, ancho){

  }

}

var tabla = new Tablero();
tabla.colorcarMinas();
tabla.colocarNumeros();
tabla.imprimirTabla();
tabla.imprimirTabla2();
