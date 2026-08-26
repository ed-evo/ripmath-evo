# Approfondimento sui fasci di rette

Si può definire un fascio di rette come la combinazione lineare di due rette qualunque del fascio (inserire link).
cioè se ad esempio considero le due rette in forma implicita:

$$
\textcolor{blue}{2x + 3y = 0}
$$

$$
\textcolor{blue}{2x - y - 8 = 0}
$$

esse individuano il fascio di rette:

$$
\textcolor{blue}{2x + 3y + k(2x - y - 8) = 0}
$$

A destra in blu la prima retta ed in verde la seconda.

***

C'è un piccolo problema: dando dei valori a $k$ possiamo trovare tutte le rette del fascio eccetto la retta:

$$
\textcolor{blue}{2x - y - 8 = 0}
$$

infatti tale retta si otterrebbe per un valore $k = \infty$ (l'infinito sarà trattato più avanti in analisi).
allora si può procedere in due modi diversi:

- si considera come fascio l'insieme delle rette precedenti aggiungendovi la seconda retta cioè:
$$
\begin{cases} 
\textcolor{blue}{2x + 3y + k(2x - y - 8) = 0} \\ 
\textcolor{blue}{2x - y - 8 = 0} 
\end{cases}
$$
- Introduciamo due parametri $\lambda$ e $\mu$, allora il fascio di rette sarà dato da:
$$
\textcolor{blue}{\lambda(2x + 3y) + \mu(2x - y - 8) = 0}
$$

la seconda forma può essere trasformata nella prima ponendo:

$$
k = \frac{\mu}{\lambda}
$$

***

Consideriamo ancora il fascio:

$$
\begin{cases} 
\textcolor{blue}{2x + 3y + k(2x - y - 8) = 0} \\ 
\textcolor{blue}{2x - y - 8 = 0} 
\end{cases}
$$

Osserviamo che la retta $2x + 3y = 0$ si ottiene per $k = 0$.
Se diamo dei valori a $k$ in modo ordinato ($+1, +2, +3, \dots$ oppure $-1, -2, -3, \dots$) otteniamo altre rette che, partendo dalla prima retta, ruotando attorno al punto di intersezione, si avvicinano alla seconda retta;
Ora posso avvicinarmi a $\infty$ sia considerando valori superiori a $0$ che valori inferiori: quindi abbiamo $2$ possibilità per le rette di sovrapporsi:

- una che nell'angolo per andare dalla prima alla seconda retta si svolge in senso antiorario e, nel nostro caso, corrisponde a valori di $k > 0$
- l'altra, invece, si svolge in senso orario e corrisponde, nel nostro caso, a valori di $k < 0$.

> **Nota:** Queste considerazioni ci serviranno nella discussione del problema geometrico.

***

Vediamo ora quali sono i problemi possibili per i fasci di rette