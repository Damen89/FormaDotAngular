interface Dipendente{
    nome: string
    //creo ulteriori proprietà e metodi in comune: cognome, matricola, calcolaStipendio(base){}
}

class Manager implements Dipendente{
    nome: string;
}

class Operaio implements Dipendente{
    nome: string;
}