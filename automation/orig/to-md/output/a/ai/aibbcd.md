# [Sistema impossibile]{.text-red}

Anche qui facciamo un semplice esempio e poi raccogliamo i risultati.

Risolvere il sistema:

$$
\begin{cases} 
x + y + z = 6 \\ 
x + y + z = 5 \\ 
x - y + z = 2 
\end{cases}
$$

Il sistema è impossibile perché la prima equazione è in contrasto con la seconda: la somma degli stessi tre numeri non può dare una volta $$6$$ ed una volta $$5$$.

Se risolviamo per sostituzione otterremmo un'uguaglianza tipo $$0 = 1$$.

Se osserviamo la matrice incompleta e completa:

[**Matrice incompleta**]{.text-blue}
$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 1 \\ 
1 & 1 & 1 \\ 
1 & -1 & 1 
\end{pmatrix}}
$$

[**Matrice completa**]{.text-blue}
$$
\textcolor{red}{\begin{pmatrix} 
1 & 1 & 1 & 6 \\ 
1 & 1 & 1 & 5 \\ 
1 & -1 & 1 & 2 
\end{pmatrix}}
$$

Mentre nella matrice completa abbiamo due righe uguali, nella matrice incompleta tali righe non vi sono: e quindi applicando il metodo di Cramer otterremo come soluzione per le incognite un numero fratto zero che corrisponde a una soluzione impossibile.

Quindi il fatto che il sistema sia impossibile è legato al fatto che la matrice dei coefficienti ha due righe uguali o proporzionali, mentre la matrice completa no; per evidenziare al meglio questo fatto introduciamo, nella prossima pagina, la nozione di **Rango di una matrice**.