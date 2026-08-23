# [Calcolo del determinante 3x3 col metodo normale]{.text-red}

Il determinante di ordine $$1$$ corrisponde al numero stesso:

$$
\textcolor{red}{| a_{1,1} | = a_{1,1}}
$$

Se ora vado a rivedere come calcolavo il determinante nel caso di un sistema di due equazioni in due incognite posso dire:

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{vmatrix} = a_{1,1} \cdot a_{2,2} - a_{1,2} \cdot a_{2,1} = a_{1,1} \cdot C_{1,1} - a_{1,2} \cdot C_{1,2}}
$$

cioè moltiplico il primo elemento della prima riga per il suo complemento e moltiplico il secondo elemento della prima riga per il suo complemento e faccio la differenza.

Dobbiamo estendere questo metodo ad un determinante $$3 \times 3$$:

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix}}
$$

Sviluppo secondo la prima riga (vedremo successivamente che è indifferente sviluppare secondo una qualsiasi riga o colonna) mettendo il segno positivo se la somma degli indici dell'elemento è pari ed il segno negativo se la somma degli indici dell'elemento è dispari.

Posso anche dire che moltiplico ogni termine della riga per il suo complemento algebrico:

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix} = + a_{1,1} \cdot C_{1,1} - a_{1,2} \cdot C_{1,2} + a_{1,3} \cdot C_{1,3}}
$$

e quindi abbiamo:

$$
\textcolor{red}{\begin{vmatrix} a_{1,1} & a_{1,2} & a_{1,3} \\ a_{2,1} & a_{2,2} & a_{2,3} \\ a_{3,1} & a_{3,2} & a_{3,3} \end{vmatrix} = a_{1,1} \cdot \begin{vmatrix} a_{2,2} & a_{2,3} \\ a_{3,2} & a_{3,3} \end{vmatrix} - a_{1,2} \cdot \begin{vmatrix} a_{2,1} & a_{2,3} \\ a_{3,1} & a_{3,3} \end{vmatrix} + a_{1,3} \cdot \begin{vmatrix} a_{2,1} & a_{2,2} \\ a_{3,1} & a_{3,2} \end{vmatrix}}
$$

***

Facciamo un esempio di calcolo di un determinante. Calcolare il valore di:

$$
\textcolor{red}{\begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & 2 \end{vmatrix}}
$$

Sviluppo secondo la prima riga:

$$
\textcolor{red}{\begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & 2 \end{vmatrix} = 1 \cdot \begin{vmatrix} -1 & 1 \\ 1 & 2 \end{vmatrix} - 1 \cdot \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} + 1 \cdot \begin{vmatrix} 2 & -1 \\ 1 & 1 \end{vmatrix} =}
$$

$$
\textcolor{red}{= 1 \cdot [(-1) \cdot 2 - 1 \cdot 1] - 1 \cdot (2 \cdot 2 - 1 \cdot 1) + 1 \cdot [2 \cdot 1 - (-1) \cdot 1] = 1 \cdot (-3) - 1 \cdot 3 + 1 \cdot 3 = -3 - 3 + 3 = -3}
$$

***

> Questo metodo sarà applicabile per ricorrenza anche a sistemi di $$4, 5, \dots$$ equazioni in $$4, 5, \dots$$ incognite. Inoltre posso scegliere una qualunque riga o colonna per sviluppare; quindi, per rendere i calcoli più semplici, se possibile, sceglierò una riga o una colonna dove vi sono termini uguali a zero.