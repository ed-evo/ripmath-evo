# Permutazioni semplici

Procediamo su un esempio:
Domani sei a rischio di essere interrogato in tre materie: italiano, matematica e inglese: essendo la fine del quadrimestre ed avendo tre ore di tempo decidi di studiare ogni materia per $1$ ora; in quanti modi puoi "permutare" le materie?

In pratica puoi fare diverse combinazioni. Come vedi hai $6$ possibilità;
Noi vogliamo trovare il numero di permutazioni possibili senza dover fare tutta una tabella, anche perché finché si tratta di $3$ oggetti è abbastanza semplice, ma se volessi sapere in quanti modi diversi posso permutare i $90$ numeri della tombola mi troverei nei pasticci.

## Proviamo a risolvere questo problema senza fare la tabella:
*[Quanti numeri diversi di $5$ cifre posso formare con le cifre $1, 2, 3, 4, 5$?]{.text-green}*

Allora nel numero che potrò fare la cifra $1$ potrà essere al primo posto, oppure al secondo posto, oppure al terzo posto, oppure al quarto posto, oppure al quinto posto; cioè per la cifra $1$ ho $5$ possibilità.
Per la cifra $2$ (avendo già messo la cifra $1$) invece ho solo $4$ possibilità perché un posto è già occupato dalla cifra $1$.
Per la cifra $3$ mi restano tre possibilità perché due posti sono già occupati dalla cifra $1$ e dalla cifra $2$.
Per la cifra $4$ mi restano due possibilità perché tre posti sono già occupati dalla cifra $1$, dalla cifra $2$ e dalla cifra $3$.
Per la cifra $5$ ho solo una possibilità perché quattro posti sono già occupati dalle cifre $1, 2, 3$ e $4$ e il $5$ va nel posto che resta vuoto.

Quindi:
- per la cifra $1$: $5$ possibilità
- per la cifra $2$: $4$ possibilità
- per la cifra $3$: $3$ possibilità
- per la cifra $4$: $2$ possibilità
- per la cifra $5$: $1$ possibilità

cioè:

$$
\textcolor{red}{\text{possibilità} = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120}
$$

*[Con le $5$ cifre posso scrivere $120$ numeri diversi]{.text-red}*

***

Riprendiamo l'esercizio delle materie da studiare visto prima:
Comincio da italiano.
L'italiano posso studiarlo la prima ora, oppure la seconda ora oppure la terza.
L'inglese posso studiarlo in una delle due ore in cui non studio italiano.
La matematica posso studiarla nell'ora in cui non studio né italiano né inglese.

Quindi:
- italiano: $3$ possibilità
- inglese: $2$ possibilità
- matematica: $1$ possibilità

$$
\textcolor{red}{\text{possibilità} = 3 \cdot 2 \cdot 1 = 6}
$$

***

In generale:

**Il numero di permutazioni semplici su $n$ oggetti $P_n$ è dato dal prodotto del numero $n$ per tutti i suoi antecedenti**

$$
\textcolor{red}{P_n = n \cdot (n-1) \cdot (n-2) \cdot \dots \cdot 3 \cdot 2 \cdot 1}
$$

> **Nota:** Per **antecedenti** di un numero si intendono i numeri che lo precedono nella successione naturale: $1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, \dots$. Ad esempio gli antecedenti di $6$ sono i numeri $1, 2, 3, 4, 5$.

***

Problema: *Quanti anagrammi (anche senza significato) posso fare con le lettere della parola cane?*
Sono $4$ oggetti quindi:

$$
\textcolor{red}{P_4 = 4 \cdot 3 \cdot 2 \cdot 1 = 24}
$$

*Con le $4$ lettere posso scrivere $24$ gruppi diversi*

***

Adesso posso risolvere anche il problema:
*Trovare in quanti modi diversi possono uscire i $90$ numeri della tombola*
Basta applicare la formula:

$$
P_{90} = 90 \cdot 89 \cdot 88 \cdot 87 \cdot 86 \cdot 85 \cdot 84 \cdot 83 \cdot 82 \cdot 81 \cdot 80 \cdot 79 \cdot 78 \cdot 77 \cdot \dots \cdot 3 \cdot 2 \cdot 1
$$

A parte il fatto che non calcolo il risultato perché è un numero troppo elevato, devo trovare un modo di scriverlo in maniera più compatta perché non posso scrivere centinaia di numeri in fila oppure mettere i puntini per indicare il numero di permutazioni; introduciamo quindi, nella prossima pagina, il **fattoriale di un numero**.