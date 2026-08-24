# Differenza

Se utilizziamo la proprietà che nei logaritmi un quoziente può essere trasformato in una differenza, dovremo poi, una volta trasformati gli addendi in logaritmi, eseguire tale differenza.

C'è però un problema: la mantissa del logaritmo non deve mai essere negativa, quindi dovremo renderla positiva lasciando la parte negativa solamente nella caratteristica.

Tale operazione si chiama

## Cologaritmo

Vediamo come comportarci con un esempio:
Supponiamo di aver ottenuto il valore per il logaritmo $-3,468901$ (con il segno meno davanti).
Lo trasformo nel cologaritmo nel modo seguente:

- Aumento di $1$ la caratteristica e vi metto un trattino sopra per ricordare che è un numero negativo:
  $$
  3 \rightarrow \overline{4}
  $$
- Nella mantissa faccio il complemento a $9$ di tutte le cifre (sostituisco ogni cifra con quello che gli manca per farla diventare $9$):
  $$
  4 \rightarrow 5
  $$
  $$
  6 \rightarrow 3
  $$
  $$
  8 \rightarrow 1
  $$
  $$
  9 \rightarrow 0
  $$
  $$
  0 \rightarrow 9
  $$
  $$
  1 \rightarrow 8
  $$
  $$
  468901 \rightarrow 531098
  $$

Quindi:
$-3,468901 = \overline{4},531098$

Purtroppo, il trattino sopra il numero varia di posizione a seconda del mezzo con cui guardi le pagine, quindi dovrai aggiustarne tu mentalmente la posizione.

---

Anche qui partiamo da un quoziente da calcolare (così facciamo un po' di esercizio aggiuntivo), poi, per evidenziare la parte che qui ci interessa, la scriveremo in carattere più grande.

Vediamo due casi:
- Il sottraendo è maggiore di $1$
- Il sottraendo è minore di $1$

---

Calcolare:
$5768900 : 1234,5 =$

Trasformo in logaritmo $5768900$:
Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $1.000.000$ ($10^6$) e $10.000.000$ ($10^7$), il suo valore sarà compreso fra $6$ e $7$ e quindi la sua caratteristica sarà $6$.

Leggo sulle tavole:
$$
5678 \rightarrow 75420
$$
$$
5679 \rightarrow 75427
$$
Di fianco ai due risultati trovi il numero $7$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $7$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa; a $9$ corrisponde $6,3$.

$$
75427 + 6,3 = 754333
$$

Quindi:
$\log 5768900 = 6,754333$

Trasformo in logaritmo $1234,5$:
Prima fisso la caratteristica: il numero è compreso fra $1000$ ($10^3$) e $10.000$ ($10^4$), quindi la sua caratteristica è $3$.

Leggo sulle tavole:
$$
1234 \rightarrow 09132
$$
$$
1235 \rightarrow 09167
$$
Di fianco ai due risultati trovi il numero $35$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $35$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa; a $5$ corrisponde $17,5$.

$$
09167 + 17,5 = 091845
$$

> **Nota:** La virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\log 1234,5 = 3,091845$

Quindi ora abbiamo:
$$
\begin{aligned}
\log(5768900 : 1234,5) &= \log 5768900 - \log 1234,5 \\
&= 6,754333 - 3,091845
\end{aligned}
$$

Ora, per avere la mantissa positiva, passo al cologaritmo:
$$
= 6,754333 + \overline{4},908154
$$

Sommo normalmente incolonnando secondo la virgola e ricordando che $\overline{4}$ è negativo:
$$
\begin{aligned}
\quad 6,754333 \\
+ \overline{4},908154 \\
\hline
\quad 3,661487
\end{aligned}
$$

$= 3,661487$

Prima della virgola ottengo $3$ perché devo sommare $\overline{4}$ ($-4$) con $+6$ e con $+1$ di riporto.

---

Calcolare:
$64,537 : 0,00062345 =$

Trasformo in logaritmo $64,537$:
Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $10$ e $100$, il suo valore sarà compreso fra $1$ e $2$ e quindi la sua caratteristica sarà $1$.

Leggo sulle tavole:
$$
6453 \rightarrow 80976
$$
$$
6454 \rightarrow 80983
$$
Di fianco ai due risultati trovi il numero $7$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $7$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa; a $7$ corrisponde $4,9$.

$$
80983 + 4,9 = 809879
$$

E quindi:
$\log 64,537 = 1,809879$

Trasformo in logaritmo $0,00062345$:
Prima fisso la caratteristica: il numero è compreso fra $1/1000$ ($10^{-3}$) e $1/10.000$ ($10^{-4}$) e la sua caratteristica è tra $-3$ e $-4$; devo prendere il minore $-4$ (essendo la mantissa sempre positiva). Oppure, regola mnemonica, ci sono $4$ zeri prima della prima cifra significativa, quindi la sua caratteristica sarà $\overline{4}$.

Considero le prime $4$ cifre $6234$ e considero l'ultima cifra $5$ come decimale.
Leggo sulle tavole:
$$
6234 \rightarrow 79477
$$
$$
6235 \rightarrow 79484
$$
Di fianco ai due risultati trovi il numero $7$ che corrisponde alla differenza fra i due valori della mantissa.

Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $7$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa; a $5$ corrisponde $3,5$.

$$
79477 + 3,5 = 794805
$$

> **Nota:** La virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\log 0,00062345 = \overline{4},794805$

Quindi ora abbiamo:
$$
\begin{aligned}
\log(64,537 : 0,00062345) &= \log 64,537 - \log 0,00062345 \\
&= 1,809879 + \overline{4},794805
\end{aligned}
$$

Sommo normalmente incolonnando secondo la virgola e ricordando che $\overline{4}$ è negativo:
$$
\begin{aligned}
\quad 1,809879 \\
+ \overline{4},794805 \\
\hline
\quad \overline{2},604684
\end{aligned}
$$

$= \overline{2},604684$

Prima della virgola ottengo $\overline{2}$ ($-2$) perché devo sommare $\overline{4}$ ($-4$) con $+1$ e con $+1$ di riporto.