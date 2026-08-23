# [Differenza di potenze dispari]{.text-red}

Cercheremo la regola per scomporre tutte quelle potenze del tipo $$x^n - a^n$$ per $$n$$ dispari, cioè ad esempio:

$$
x^3 - a^3 =
$$
$$
x^5 - a^5 =
$$
$$
x^7 - a^7 =
$$

dove al posto di $$a$$ possiamo pensare un numero; per trovare la regola di scomposizione proviamo a scomporre con Ruffini e vediamo se riusciamo ad individuare delle regolarità.

Iniziamo a scomporre:

$$
x^3 - a^3 =
$$

essendo il termine noto $$a^3$$ il possibile divisore di Ruffini sarà del tipo $$(x-a); (x+a)$$.
Provo a dividere per $$(x-a)$$:

$$
(x-a); P(a) = a^3 - a^3 = 0
$$

Essendo il resto zero $$(x-a)$$ è un divisore; eseguo la divisione e ottengo:

$$
x^3 - a^3 = (x-a)(x^2 + ax + a^2)
$$

---

Proviamo ora a scomporre:

$$
x^5 - a^5 =
$$

$$
(x-a); P(a) = a^5 - a^5 = 0
$$

Essendo il resto zero $$(x-a)$$ è un divisore; eseguo la divisione e ottengo:

$$
x^5 - a^5 = (x-a)(x^4 + ax^3 + a^2x^2 + a^3x + a^4)
$$

---

Ora senza eseguire Ruffini ma tenendo presenti le due scomposizioni:

$$
x^3 - a^3 = (x-a)(x^2 + ax + a^2)
$$
$$
x^5 - a^5 = (x-a)(x^4 + ax^3 + a^2x^2 + a^3x + a^4)
$$

Voglio scomporre:

$$
x^7 - a^7 =
$$

Intanto il divisore sarà $$(x-a)$$:

$$
x^7 - a^7 = (x-a)(\dots)
$$

osserviamo che dentro parentesi al posto dei puntini devo mettere il primo termine abbassato di un grado, cioè $$x^6$$, poi man mano devo fare un polinomio ordinato abbassando la potenza della $$x$$ ed aumentando la potenza della $$a$$ ed i segni sono tutti positivi.

Quindi:

$$
x^7 - a^7 = (x-a)(x^6 + ax^5 + a^2x^4 + a^3x^3 + a^4x^2 + a^5x + a^6)
$$

---

> **Regola:** [Una differenza di potenze dispari è uguale al prodotto di un binomio dato dalla differenza delle basi per un polinomio ordinato e completo ottenuto abbassando di un grado il primo termine, poi via via abbassando di un grado il primo ed aumentando di un grado il secondo ed i segni sono tutti positivi.]{.text-purple}

Per esercizio prova a scomporre:

$$
x^9 - a^9 =
$$

poi controlla il risultato.