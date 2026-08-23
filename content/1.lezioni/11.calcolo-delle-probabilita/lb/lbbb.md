# [Disposizioni con ripetizione]{.text-red}

Le disposizioni con ripetizione su $$n$$ oggetti sono i numeri delle coppie ordinate $$\textcolor{red}{D'_{n;2}}$$, terne ordinate $$\textcolor{red}{D'_{n;3}}$$, quaterne ordinate $$\textcolor{red}{D'_{n;4}}$$, ..., $$k$$-uple ordinate $$\textcolor{red}{D_{n;k}}$$ che posso formare con $$n$$ oggetti, considerando che tali oggetti possono anche essere ripetuti:

> Equivale al problema di estrarre un numero da un sacchetto e, prima di procedere alla seconda estrazione, rimettere il numero nel sacchetto in modo da poterlo riestrarre.

Ad esempio le disposizioni con ripetizione di classe $$2$$ su $$3$$ oggetti, cioè le coppie che posso formare con i $$3$$ oggetti 
$$\textcolor{red}{1 \quad 2 \quad 3}$$
saranno

$$
\textcolor{red}{1 \ 1 \quad 1 \ 2 \quad 1 \ 3}
$$
$$
\textcolor{red}{2 \ 1 \quad 2 \ 2 \quad 2 \ 3}
$$
$$
\textcolor{red}{3 \ 1 \quad 3 \ 2 \quad 3 \ 3}
$$

Nel nostro caso quindi
$$\textcolor{red}{D'_{3;2} = 9}$$

Vediamo di trovare la formula per le disposizioni con ripetizione di classe $$3$$ (terne ordinate) su $$5$$ oggetti $$\textcolor{red}{D'_{5;3}}$$:
per il primo posto nella terna ho $$5$$ possibilità: uno qualunque dei $$5$$ numeri può essere al primo posto;
anche per il secondo posto nella terna ho $$5$$ possibilità: uno qualunque dei $$5$$ numeri può essere al secondo posto;
ed anche per il terzo posto nella terna ho $$5$$ possibilità: uno qualunque dei $$5$$ numeri può essere al terzo posto.

Quindi raccogliendo:
$$
\textcolor{red}{D'_{5;3} = 5 \cdot 5 \cdot 5 = 5^3 = 125}
$$

In generale **le disposizioni con ripetizione di $$n$$ oggetti di classe $$k$$ saranno**:
$$
\textcolor{red}{D'_{n;k} = n^k}
$$

Come esercizio calcoliamo il numero di colonne che dovrei giocare per essere sicuro di vincere nella schedina del totocalcio.

> **Nota:** nelle disposizioni con ripetizione le $$k$$-uple possono essere anche di dimensione maggiore di $$n$$, cioè con $$3$$ oggetti posso fare anche cinquine, sestine, ...; basta poter riestrarre l'oggetto.

Sono disposizioni con ripetizione di $$3$$ oggetti $$(1, x, 2)$$ presi $$13$$ a $$13$$:
$$
\textcolor{red}{D'_{3;13} = 3^{13} = 1594323}
$$

Quindi se vuoi giocare tutte le colonne possibili devi giocare $$1594323$$ colonne.