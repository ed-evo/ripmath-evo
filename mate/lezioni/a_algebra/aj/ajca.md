# Complemento algebrico di un elemento del determinante

Consideriamo il determinante

$$
\textcolor{red}{
\begin{vmatrix} 
a_{1,1} & a_{1,2} & \dots & a_{1,k} & \dots & a_{1,n} \\ 
a_{2,1} & a_{2,2} & \dots & a_{2,k} & \dots & a_{2,n} \\ 
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ 
a_{h,1} & a_{h,2} & \dots & a_{h,k} & \dots & a_{h,n} \\ 
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ 
a_{n,1} & a_{n,2} & \dots & a_{n,k} & \dots & a_{n,n} 
\end{vmatrix}
}
$$

Per vedere come calcolarlo introduciamo la nozione di [complemento algebrico]{.text-red}

Prima definiamo il complemento e poi il complemento algebrico.

> **Definiamo complemento** $C_{h,k}$ di un elemento qualunque $a_{h,k}$ il determinante che si ottiene togliendo la riga e la colonna su cui si trova l'elemento in questione.

> $a_{h,k}$ indica semplicemente uno degli elementi della matrice, siccome ne posso prendere uno qualunque metto $a_{h,k}$ per indicare un elemento generico.

### Esempio:
Consideriamo una matrice di ordine $4$ e calcoliamo il complemento di $a_{2,2}$:

$$
\begin{vmatrix} 
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} & a_{1,4} \\ 
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{a_{2,4}} \\ 
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} & a_{3,4} \\ 
a_{4,1} & \textcolor{blue}{a_{4,2}} & a_{4,3} & a_{4,4} 
\end{vmatrix} = 
\begin{vmatrix} 
a_{1,1} & a_{1,3} & a_{1,4} \\ 
a_{3,1} & a_{3,3} & a_{3,4} \\ 
a_{4,1} & a_{4,3} & a_{4,4} 
\end{vmatrix} = C_{2,2}
$$

Elimino la riga e la colonna dove c'è $a_{2,2}$ (elimino gli elementi in blu) ed ottengo il complemento $C_{2,2}$ di $a_{2,2}$.

Passiamo ora alla nozione di [complemento algebrico]{.text-red}.

> È detto algebrico perché dotato di un segno.

> **Definiamo complemento algebrico** $(-1)^{(h+k)} \cdot C_{h,k}$ di un elemento qualunque $a_{h,k}$ il determinante che si ottiene togliendo la riga e la colonna su cui si trova l'elemento in questione con il segno positivo se $h+k$ è numero pari ed il segno negativo se $h+k$ è numero dispari.

> Per questo si mette $(-1)^{h+k}$ perché se $(h+k)$ è pari eseguendo la potenza ottengo $+1$, mentre se $(h+k)$ è dispari ottengo $-1$.

Ad esempio calcoliamo il complemento algebrico di $a_{2,2}$:

$$
\begin{vmatrix} 
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} & a_{1,4} \\ 
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{a_{2,4}} \\ 
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} & a_{3,4} \\ 
a_{4,1} & \textcolor{blue}{a_{4,2}} & a_{4,3} & a_{4,4} 
\end{vmatrix} = + 
\begin{vmatrix} 
a_{1,1} & a_{1,3} & a_{1,4} \\ 
a_{3,1} & a_{3,3} & a_{3,4} \\ 
a_{4,1} & a_{4,3} & a_{4,4} 
\end{vmatrix} = + C_{2,2}
$$

Elimino la riga e la colonna dove c'è $a_{2,2}$ (elimino gli elementi in blu) ed ottengo il complemento $C_{2,2}$ di $a_{2,2}$; metto il segno positivo perché $2+2=4$ numero pari ed ottengo il complemento algebrico.

Calcoliamo ora il complemento algebrico di $a_{2,3}$:

$$
\begin{vmatrix} 
a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} & a_{1,4} \\ 
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{a_{2,4}} \\ 
a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} & a_{3,4} \\ 
a_{4,1} & a_{4,2} & \textcolor{blue}{a_{4,3}} & a_{4,4} 
\end{vmatrix} = - 
\begin{vmatrix} 
a_{1,1} & a_{1,2} & a_{1,4} \\ 
a_{3,1} & a_{3,2} & a_{3,4} \\ 
a_{4,1} & a_{4,2} & a_{4,4} 
\end{vmatrix} = - C_{2,3}
$$

Elimino la riga e la colonna dove c'è $a_{2,3}$ (elimino gli elementi in blu) ed ottengo il complemento $C_{2,3}$ di $a_{2,3}$; metto il segno negativo perché $2+3=5$ numero dispari ed ottengo il complemento algebrico.