[Calcoli con i Logaritmi]{.text-red}

Come conclusione vediamo un paio di esercizi completi: scriviamo un prodotto (quoziente), trasformiamone i termini in logaritmi, eseguiamo la somma (differenza) e quindi calcoliamo l'antilogaritmo, cioè il risultato, tutto con l'uso delle tavole.

- [Prodotto](#prodotto)
- [Quoziente](#quoziente)

---

<a name="prodotto"></a>

## Prodotto

Calcoliamo:
$7,65435 \cdot 0,345675 =$

Prima trasformo $7,65433$ in logaritmo:
$\log 7,6543 =$

Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $1$ e $10$, il suo valore sarà compreso fra $0$ e $1$ e quindi la sua caratteristica sarà $0$.

Calcolo la mantissa; leggo sulle tavole le prime 4 cifre:

$7654 \rightarrow 88389$
$7655 \rightarrow 88395$
(Differenza: $6$)

Cerco la tabellina con intestazione $6$ e vedo che al decimale $3$ corrisponde $1,8$ ed a $5$ corrisponde $3,0$ che, essendo un centesimale, varrà $0,3$ e quindi:

$$
88389 + 1,8 + 0,3 = 88391,1
$$
> **Nota:** la virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\log 7,6543 = 0,883911$

Ora trasformo $0,345675$ in logaritmo:
$\log 0,345675 =$

Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $1$ e $1/10$, il valore della caratteristica sarà compreso fra $0$ e $-1$ e quindi, dovendo aggiungere una mantissa positiva, considero il valore minore cioè $-1$, o meglio la sua caratteristica sarà $\overline{1}$.

> **Regola mnemonica:** uno zero davanti alla prima cifra allora caratteristica $-1$.

Calcolo la mantissa; leggo sulle tavole le prime 4 cifre:

$3456 \rightarrow 53857$
$3457 \rightarrow 53870$
(Differenza: $13$)

Cerco la tabellina con intestazione $13$ e vedo che al decimale $7$ corrisponde $9,1$ ed a $8$ corrisponde $11,2$ che, essendo un centesimale, varrà $1,12$ e quindi:

$$
53857 + 9,1 + 1,12 = 53867,22
$$
> **Nota:** la virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\log 0,345678 = \overline{1},5386722$

Ora faccio i calcoli:
$\log(7,65435 \cdot 0,345675) = \log 7,65435 + \log 0,345678 = 0,883911 + \overline{1},5386722 =$

$$
\begin{array}{r@{\quad}l}
0,883911 & + \\
\overline{1},5386722 & = \\
\hline
0,4225832 &
\end{array}
$$

$= 0,4225832$

Questo è il risultato in logaritmo, ora devo ritrasformarlo in decimale:
$\text{AntiLog } 0,4225832 =$

Essendo la caratteristica $0$, il valore dell'antilogaritmo sarà compreso fra $1$ e $10$, quindi avremo una cifra prima della virgola. La mia mantissa a 5 decimali ($42258$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse):

$42243 \rightarrow 2645$
$42259 \rightarrow 2646$
(Differenza: $16$)

Di fianco ai due risultati trovi il numero $16$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
$42258,32 - 42243 = 15,32$

Nella tabellina $16$ considero $15,32$; a $14,4$ corrisponde $9$ (prima cifra decimale) ed avanza $1,32$ ($15,32 - 14,4 = 1,32$) che (approssimato) corrisponde circa ad $1$ (seconda cifra decimale), quindi:
$2645 + 0,9 + 0,01 = 2645,91$

Ed abbiamo:
$\text{AntiLog } 0,4225832 = 2,64591$

---

<a name="quoziente"></a>

## Quoziente

Calcolare:
$6,78955 : 0,12345 =$

Trasformo in logaritmo $6,78955$:
Prima fisso la caratteristica: essendo il valore del logaritmo compreso fra $1$ e $10$, il suo valore sarà compreso fra $0$ e $1$ e quindi la sua caratteristica sarà $0$.

Leggo sulle tavole:
$6789 \rightarrow 83181$
$6790 \rightarrow 83187$
(Differenza: $6$)

Di fianco ai due risultati trovi il numero $6$ che corrisponde alla differenza fra i due valori della mantissa. Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $6$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa: al primo $5$ corrisponde $3,0$, al secondo $5$ corrisponderà $0,3$.

$$
83181 + 3,0 + 0,3 = 83184,3
$$

E quindi:
$\log 6,78955 = 0,831843$

Trasformo in logaritmo $0,12345$:
Prima fisso la caratteristica: il numero è compreso fra $1$ ($10^0$) e $1/10$ ($10^{-1}$) e la sua caratteristica è tra $-1$ e $0$ e devo prendere il minore $-1$ (essendo la mantissa sempre positiva) oppure, regola mnemonica, c'è uno zero prima della prima cifra significativa quindi la sua caratteristica sarà $\overline{1}$.

Considero le prime 4 cifre $1234$ e considero l'ultima cifra $5$ come decimale. Leggo sulle tavole:
$1234 \rightarrow 09132$
$1235 \rightarrow 09167$
(Differenza: $35$)

Di fianco ai due risultati trovi il numero $35$ che corrisponde alla differenza fra i due valori della mantissa. Se poi guardi la pagina dei logaritmi trovi una tabellina con intestazione $35$: questi sono i risultati della proporzione con i vari decimali che basta leggere ed aggiungere alla mantissa: a $5$ corrisponde $17,5$.

$$
09132 + 17,5 = 09149,5
$$
> **Nota:** la virgola è virtuale e ti indica solamente dove fare la somma.

E quindi:
$\log 0,12345 = \overline{1},091495$

Quindi ora abbiamo:
$\log(6,78955 : 0,12345) = \log 6,78955 - \log 0,12345 = 0,831843 - \overline{1},091495 =$

Prima di eseguire la differenza passo al cologaritmo per il secondo termine in modo di poter fare la somma:
$\text{CoLog } \overline{1},091495 = - (\overline{1},091495) = + 0,908505$

Sommo normalmente incolonnando secondo la virgola:

$$
\begin{array}{r@{\quad}l}
0,831843 & + \\
0,908505 & = \\
\hline
1,740348 &
\end{array}
$$

$= 1,740348$

Questo è il risultato in logaritmo, ora devo ritrasformarlo in decimale:
$\text{AntiLog } 1,740348 =$

Essendo la caratteristica $1$, il valore dell'antilogaritmo sarà compreso fra $10$ e $100$, quindi avremo due numeri prima della virgola. La mia mantissa a 5 decimali ($74034$) è compresa fra i numeri (leggo le tavole cercando nelle mantisse):

$74028 \rightarrow 5499$
$74036 \rightarrow 5500$
(Differenza: $5$)

Di fianco ai due risultati trovi il numero $8$ che corrisponde alla differenza fra i due valori della mantissa, mentre la differenza fra il mio valore e quello minore è:
$74034,8 - 74028 = 6,8$

Nella tabellina $8$ considero $6,8$; a $6,4$ corrisponde $8$ (prima cifra decimale) ed avanza $0,4$ ($6,8 - 6,4 = 0,4$) e $0,4$ corrisponde a $5$ (seconda cifra decimale), quindi:
$5499 + 0,8 + 0,05 = 5499,85$

Ed abbiamo:
$\text{AntiLog } 1,740348 = 54,9985$