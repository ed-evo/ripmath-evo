# [esercizio]{.text-red}

Trasforma i seguenti numeri decimali in binari, esegui le operazioni e poi riporta il risultato in forma decimale

$680_{10} + 378_{10} =$

> Io lo svolgo facendo tutti i passaggi, però tu, una volta capito il metodo, dovresti eseguire gli esercizi il più velocemente possibile.

Prima trasformo $680_{10}$ in numero binario.

Vicino al numero scrivo il resto mentre il quoziente lo scrivo sotto il numero stesso:

[**quoziente**]{.text-red-darken-1} | [**resto**]{.text-red-darken-1}
--- | ---
$680$ diviso $2$ dà $340$ con resto di $0$ | $680$ $\rightarrow$ $0$
$340$ diviso $2$ dà $170$ con resto di $0$ | $340$ $\rightarrow$ $0$
$170$ diviso $2$ dà $85$ con resto di $0$ | $170$ $\rightarrow$ $0$
$85$ diviso $2$ dà $42$ con resto di $1$ | $85$ $\rightarrow$ $1$
$42$ diviso $2$ dà $21$ con resto di $0$ | $42$ $\rightarrow$ $0$
$21$ diviso $2$ dà $10$ con resto di $1$ | $21$ $\rightarrow$ $1$
$10$ diviso $2$ dà $5$ con resto di $0$ | $10$ $\rightarrow$ $0$
$5$ diviso $2$ dà $2$ con resto di $1$ | $5$ $\rightarrow$ $1$
$2$ diviso $2$ dà $1$ con resto di $0$ | $2$ $\rightarrow$ $0$
$1$ diviso $2$ dà $0$ con resto di $1$ | $1$ $\rightarrow$ $1$
| $0$

Quindi:

$680_{10} = 1010101000_2$

Ora trasformo $378_{10}$ in numero binario:

[**quoziente**]{.text-red-darken-1} | [**resto**]{.text-red-darken-1}
--- | ---
$378$ diviso $2$ dà $189$ con resto di $0$ | $378$ $\rightarrow$ $0$
$189$ diviso $2$ dà $94$ con resto di $1$ | $189$ $\rightarrow$ $1$
$94$ diviso $2$ dà $47$ con resto di $0$ | $94$ $\rightarrow$ $0$
$47$ diviso $2$ dà $23$ con resto di $1$ | $47$ $\rightarrow$ $1$
$23$ diviso $2$ dà $11$ con resto di $1$ | $23$ $\rightarrow$ $1$
$11$ diviso $2$ dà $5$ con resto di $1$ | $11$ $\rightarrow$ $1$
$5$ diviso $2$ dà $2$ con resto di $1$ | $5$ $\rightarrow$ $1$
$2$ diviso $2$ dà $1$ con resto di $0$ | $2$ $\rightarrow$ $0$
$1$ diviso $2$ dà $0$ con resto di $1$ | $1$ $\rightarrow$ $1$
| $0$

Quindi:

$378_{10} = 101111010_2$

Adesso li metto in colonna e sommo partendo da destra: sopra, in [verde]{.text-green} e carattere più piccolo ti scrivo i riporti.

$$
1010101000_2 + 101111010_2 = 10000100010_2
$$

> Se vuoi seguire i calcoli, ferma il mouse sulla cifra che ti interessa del risultato.

Quindi:

$1010101000_2 + 101111010_2 = 10000100010_2$

Adesso trasformo il risultato in forma decimale.

> Ricordando la successione delle potenze del due:
> $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, \dots$
> Scrivo, sopra ogni numero $1$ il valore corrispondente, naturalmente cominciando dall'$1$ più a destra e procedendo verso sinistra.

Non scrivo niente sopra la prima cifra a destra perché è zero, poi scrivo $2$ sopra la seconda cifra a destra (perché è $1$), poi sopra la terza cifra, essendo $0$, dovrei scrivere $4$ ma non scrivo niente, lo stesso sopra la quarta ($8$) e la quinta cifra ($16$) che sono zeri; poi scrivo $32$ sopra l'$1$ al sesto posto, poi dovrei scrivere $64$ sopra la cifra al settimo posto, ma essendo $0$ non scrivo niente, lo stesso sopra l'ottava ($128$), la nona ($256$) e la decima cifra ($512$) che sono zeri non scrivo niente; scrivo invece $1024$ sopra l'uno all'undicesimo posto.

Quindi:

$$
10000100010_2 = 1024 + 32 + 2 + 0 = 1058_{10}
$$

Quindi:

$680_{10} + 378_{10} = 1058_{10}$

> **Domanda del solito Pierino:**
> "Ma non avremmo fatto prima a sommare normalmente per trovare il risultato?"
>
> Certamente, noi avremmo fatto prima facendo i calcoli col sistema decimale, però in questo modo possiamo far fare tutto il lavoro ad una macchina che ci restituirà il risultato e noi ci limiteremo a scrivere i dati e leggere il risultato.