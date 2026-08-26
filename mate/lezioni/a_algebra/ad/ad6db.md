# Somma di potenze dispari

Cercheremo la regola per scomporre tutte quelle potenze del tipo [$x^n + a^n$]{.text-red} per [$n$]{.text-red} dispari, cioè ad esempio:

[$x^3 + a^3 =$]{.text-red}
[$x^5 + a^5 =$]{.text-red}
[$x^7 + a^7 =$]{.text-red}
..........

dove al posto di [$a$]{.text-red} possiamo pensare un numero; per trovare la regola di scomposizione proviamo a scomporre con Ruffini e vediamo se riusciamo ad individuare delle regolarità come nella schermata precedente.

Iniziamo a scomporre:
[$x^3 + a^3 =$]{.text-red}

essendo il termine noto [$a^3$]{.text-red} il possibile divisore di Ruffini sarà del tipo [$(x-a); (x+a)$]{.text-red}.

Provo a dividere per [$(x-a)$]{.text-red}:

[$(x-a) ; P(a) = a^3 + a^3 \neq 0$]{.text-red}
[$(x+a) ; P(-a) = (-a)^3 + a^3 = -a^3 + a^3 = 0$]{.text-red}

Essendo il resto zero [$(x+a)$]{.text-red} è un divisore; eseguo la divisione.

Ottengo:
[$x^3 + a^3 = (x+a)(x^2 - ax + a^2)$]{.text-red}

***

Proviamo ora a scomporre:
[$x^5 + a^5 =$]{.text-red}

[$(x-a) ; P(a) = a^5 + a^5 \neq 0$]{.text-red}
[$(x+a) ; P(-a) = (-a)^5 + a^5 = -a^5 + a^5 = 0$]{.text-red}

Essendo il resto zero [$(x+a)$]{.text-red} è un divisore; eseguo la divisione.

Ottengo:
[$x^5 + a^5 = (x+a)(x^4 - ax^3 + a^2x^2 - a^3x + a^4)$]{.text-red}

***

Ora senza eseguire Ruffini ma tenendo presenti le due scomposizioni:

[$x^3 + a^3 = (x+a)(x^2 - ax + a^2)$]{.text-red}
[$x^5 + a^5 = (x+a)(x^4 - ax^3 + a^2x^2 - a^3x + a^4)$]{.text-red}

Voglio scomporre:
[$x^7 + a^7 =$]{.text-red}
Intanto il divisore sarà [$(x+a)$]{.text-red}
[$x^7 + a^7 = (x+a)(.....)$]{.text-red}

osserviamo che dentro parentesi al posto dei puntini devo mettere il primo termine abbassato di un grado, cioè [$x^6$]{.text-red} poi man mano devo fare un polinomio ordinato abbassando la potenza della [$x$]{.text-red} ed aumentando la potenza della [$a$]{.text-red} ed i segni sono alternati: uno positivo e l'altro negativo...

quindi:
$$
x^7 + a^7 = (x+a)(x^6 - ax^5 + a^2x^4 - a^3x^3 + a^4x^2 - a^5x + a^6)
$$

***

> **Regola:** [una somma di potenze dispari è uguale al prodotto di un binomio dato dalla somma delle basi per un polinomio ordinato e completo ottenuto abbassando di un grado il primo termine, poi via via abbassando di un grado il primo ed aumentando di un grado il secondo ed i segni sono alternati]{.text-purple}

Per esercizio prova a scomporre:
[$x^9 + a^9 =$]{.text-red} poi controlla il [risultato](ad6db1.html)