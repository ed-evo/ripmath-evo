# Esercizio

Trasforma i seguenti numeri decimali in binari, esegui le operazioni e poi riporta il risultato in forma decimale:

$67_{10} + 35_{10} =$

> Questo è un esercizio abbastanza "completo", che ci permette di ripassare quanto fatto in precedenza. Io lo svolgo facendo tutti i passaggi, però tu, una volta capito il metodo, dovresti eseguire gli esercizi il più velocemente possibile.

Prima trasformo $67_{10}$ in numero binario. Vicino al numero scrivo il resto mentre il quoziente lo scrivo sotto il numero stesso:

[quoziente]{.text-red-darken-1} | [resto]{.text-red-darken-1}
--- | ---
$67$ diviso $2$ dà $33$ con resto di [$1$]{.text-red-darken-1}
$33$ diviso $2$ dà $16$ con resto di [$1$]{.text-red-darken-1}
$16$ diviso $2$ dà $8$ con resto di [$0$]{.text-red-darken-1}
$8$ diviso $2$ dà $4$ con resto di [$0$]{.text-red-darken-1}
$4$ diviso $2$ dà $2$ con resto di [$0$]{.text-red-darken-1}
$2$ diviso $2$ dà $1$ con resto di [$0$]{.text-red-darken-1}
$1$ diviso $2$ dà $0$ con resto di [$1$]{.text-red-darken-1}
$0$ | 

Quindi:
$67_{10} = 1000011_2$

Ora trasformo $35_{10}$ in numero binario:

[quoziente]{.text-red-darken-1} | [resto]{.text-red-darken-1}
--- | ---
$35$ diviso $2$ dà $17$ con resto di [$1$]{.text-red-darken-1}
$17$ diviso $2$ dà $8$ con resto di [$1$]{.text-red-darken-1}
$8$ diviso $2$ dà $4$ con resto di [$0$]{.text-red-darken-1}
$4$ diviso $2$ dà $2$ con resto di [$0$]{.text-red-darken-1}
$2$ diviso $2$ dà $1$ con resto di [$0$]{.text-red-darken-1}
$1$ diviso $2$ dà $0$ con resto di [$1$]{.text-red-darken-1}
$0$ | 

Quindi:
$35_{10} = 100011_2$

Adesso li metto in colonna e sommo partendo da destra. I riporti sono indicati in verde:

[$1$\(\leftarrow\)]{.text-green} [$1$\(\leftarrow\)]{.text-green}
$1\ 0\ 0\ 0\ 0\ 1\ 1$ { .text-red } $+$
$\phantom{1\ 0} 1\ 0\ 0\ 0\ 1\ 1$
$\text{__________________________}$
$1\ 1\ 0\ 0\ 1\ 1\ 0$

> **Nota sui calcoli:**
> - $1 + 1$ scrivo $0$ e riporto $1$
> - $1 + 1 + 1$ (riporto) scrivo $1$ e riporto $1$
> - $0 + 0 + 1$ (riporto) scrivo $1$
> - $0 + 0$ scrivo $0$
> - $0 + 0$ scrivo $0$
> - $0 + 1$ scrivo $1$
> - $1$ scrivo $1$

Quindi:
$1000011_2 + 100011_2 = 1100110_2$

Adesso trasformo il risultato in forma decimale.

> Ricordando la successione delle potenze del due:
> $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, \dots$
> scrivo, sopra ogni numero $1$ il valore corrispondente, cominciando dall'$1$ più a destra e procedendo verso sinistra.

$$
\begin{matrix}
64 & 32 & & & & 4 & 2 & \\
1 & 1 & 0 & 0 & 1 & 1 & 0 & 
\end{matrix}
$$

Sopra lo $0$ non scrivo niente; scrivo $2$ sopra il primo $1$ a destra (seconda cifra), poi sopra il secondo $1$ (terza cifra) scrivo $4$. Al quarto e quinto posto essendoci lo $0$ non scrivo nulla, scrivo $32$ sopra l'uno al sesto posto e $64$ sopra l'$1$ al settimo posto.

Quindi:

$$
1100110_2 = 64 + 32 + 4 + 2 = 102_{10}
$$