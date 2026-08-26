[Passaggio dal sistema decimale al sistema binario]{.text-red}

Trasformare un numero dal sistema decimale al sistema binario è un'operazione relativamente semplice: basta dividere il numero successivamente per $2$ finché otteniamo $0$ e tenere conto dei resti. Tali resti, scritti in ordine inverso, ci daranno il numero trasformato in binario.

> se ne hai bisogno [guarda un esempio](../../b/bc/bciacee.html) di come si scompone un numero per il fattore $2$ (i primi 3 passaggi)

Esempio:
Trasformare il numero $140_{10}$ in numero binario.
Vicino al numero scrivo il resto mentre il quoziente lo scrivo sotto.

[quoziente]{.text-red-darken-1} | [resto]{.text-red-darken-1}
$\textcolor{darkred}{140}$ | $\textcolor{darkred}{0}$
$\textcolor{darkred}{70}$ | $\textcolor{darkred}{0}$
$\textcolor{darkred}{35}$ | $\textcolor{darkred}{1}$
$\textcolor{darkred}{17}$ | $\textcolor{darkred}{1}$
$\textcolor{darkred}{8}$ | $\textcolor{darkred}{0}$
$\textcolor{darkred}{4}$ | $\textcolor{darkred}{0}$
$\textcolor{darkred}{2}$ | $\textcolor{darkred}{0}$
$\textcolor{darkred}{1}$ | $\textcolor{darkred}{1}$
$\textcolor{darkred}{0}$ |

Svolgimento dei passaggi:
- $140$ diviso $2$ dà $70$ con resto di $0$
- $70$ diviso $2$ dà $35$ con resto di $0$
- $35$ diviso $2$ dà $17$ con resto di $1$
- $17$ diviso $2$ dà $8$ con resto di $1$
- $8$ diviso $2$ dà $4$ con resto di $0$
- $4$ diviso $2$ dà $2$ con resto di $0$
- $2$ diviso $2$ dà $1$ con resto di $0$
- $1$ diviso $2$ dà $0$ con resto di $1$

Il numero binario corrispondente a $140_{10}$ è $10001100_{2}$.

> ti ricordo che, come abbiamo già [visto](pbc.html), la divisione equivale al raggruppare

***

Per esercizio trasforma in binari i seguenti numeri decimali:

- $46_{10} =$ [Svolgimento](pbfda.html)
- $159_{10} =$ [Svolgimento](pbfdb.html)
- $678_{10} =$ [Svolgimento](pbfdc.html)
- $1024_{10} =$ [Svolgimento](pbfdd.html)
- $13282_{10} =$ [Svolgimento](pbfde.html)