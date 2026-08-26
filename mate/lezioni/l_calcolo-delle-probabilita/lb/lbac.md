# Permutazioni con ripetizione
## (o permutazioni con oggetti identici)

Vediamo cosa succede quando alcuni degli oggetti su cui dobbiamo fare le permutazioni sono uguali; come esempio prendiamo il problema:
*Quanti anagrammi (anche senza significato) posso fare con le lettere della parola cannone?*

Sono $7$ oggetti ma tre fra questi sono uguali quindi, prese tutte le possibili permutazioni su $7$ oggetti, dovrò togliere quelle dove le lettere $n$ non sono distinguibili (come fai a dire se ad esempio la $n$ che compare al primo posto è la prima o la seconda o la terza?).
quindi per $7$ oggetti avrei

$$
\textcolor{red}{P_7 = 7!}
$$

Mentre per i tre oggetti uguali (le $n$) avrei

$$
\textcolor{red}{P_3 = 3!}
$$

quindi i possibili anagrammi saranno

$$
\textcolor{red}{P_{7;3} = \frac{P_7}{P_3} = \frac{7!}{3!} = 840}
$$

[Ho bisogno di una spiegazione più approfondita](lbaca.html)

***

Per fare i calcoli più velocemente osserva che vale

$$
\textcolor{red}{P_{7;3} = \frac{7!}{3!} = \frac{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}{3 \cdot 2 \cdot 1} = \frac{7 \cdot 6 \cdot 5 \cdot 4 \cdot 3!}{3!} = 7 \cdot 6 \cdot 5 \cdot 4 = 840}
$$

cioè nelle frazioni con fattoriali posso sempre considerare come nell'espressione sopra e semplificare l'ultimo fattoriale (useremo spesso questa proprietà).

***

Per completare vediamo anche il caso in cui gli oggetti identici siano di tipi diversi, come ad esempio l'anagramma della parola "matematica":
ci sono due $m$, due $t$ e tre $a$, quindi

$$
\textcolor{red}{P_{10;2,2,3} = \frac{10!}{2! 2! 3!} = 151200}
$$

***

> **Nota:** Notare nella $P$ il **;** dopo il numero globale degli oggetti e la **,** fra i numeri di oggetti uguali.

***

Quindi la formula generale per le permutazioni su $n$ oggetti di cui $k_1, k_2, \dots, k_h$ uguali sarà

$$
\textcolor{red}{P_{n;k_1,k_2,\dots,k_h} = \frac{n!}{k_1! k_2! \dots k_h!}}
$$