# [Il determinante 3x3]{.text-red}

Presa la matrice

$$
\begin{pmatrix}
a_{1,1} & a_{1,2} & a_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{pmatrix}
$$

il determinante associato sarà indicato come:

$$
\begin{vmatrix}
a_{1,1} & a_{1,2} & a_{1,3} \\
a_{2,1} & a_{2,2} & a_{2,3} \\
a_{3,1} & a_{3,2} & a_{3,3}
\end{vmatrix}
$$

Per vedere come calcolarlo introduciamo la nozione di [**complemento algebrico**]{.text-red}
prima definiamo il complemento e poi il complemento algebrico

> **Definiamo complemento $$C_{i,j}$$ di un elemento qualunque $$a_{i,j}$$ il determinante che si ottiene togliendo la riga e la colonna su cui si trova l'elemento in questione**

> $$a_{i,j}$$ indica semplicemente uno degli elementi della matrice, siccome ne posso prendere uno qualunque metto $$a_{i,j}$$ per indicare un elemento generico

Ad esempio calcoliamo il complemento di $$a_{2,2}$$

$$
\begin{vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3}
\end{vmatrix} = \begin{vmatrix}
a_{1,1} & a_{1,3} \\
a_{3,1} & a_{3,3}
\end{vmatrix} = C_{2,2}
$$

elimino la riga e la colonna dove c'è $$a_{2,2}$$ (elimino gli elementi in blu) ed ottengo il complemento $$C_{2,2}$$ di $$a_{2,2}$$

Passiamo ora alla nozione di **complemento algebrico**

> **Definiamo complemento algebrico $$(-1)^{(i+j)} \cdot C_{i,j}$$ di un elemento qualunque $$a_{i,j}$$ il determinante che si ottiene togliendo la riga e la colonna su cui si trova l'elemento in questione con il segno $+$ se $$i+j$$ = numero pari ed il segno $-$ se $$i+j$$ = numero dispari**

> Per questo si mette $$(-1)^{i+j}$$ perché se $$(i+j)$$ è pari ottengo $$+1$$ mentre se $$(i+j)$$ è dispari ottengo $$-1$$

Ad esempio calcoliamo il complemento algebrico di $$a_{2,2}$$

$$
\begin{vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3}
\end{vmatrix} = + \begin{vmatrix}
a_{1,1} & a_{1,3} \\
a_{3,1} & a_{3,3}
\end{vmatrix} = + C_{2,2}
$$

elimino la riga e la colonna dove c'è $$a_{2,2}$$ (elimino gli elementi in blu) ed ottengo il complemento $$C_{2,2}$$ di $$a_{2,2}$$; ci metto il segno $+$ (essendo $$2+2=4$$ numero pari) ed ottengo il complemento algebrico

calcoliamo il complemento algebrico di $$a_{2,1}$$

$$
\begin{vmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3}
\end{vmatrix} = - \begin{vmatrix}
a_{1,2} & a_{1,3} \\
a_{3,2} & a_{3,3}
\end{vmatrix} = - C_{2,1}
$$

elimino la riga e la colonna dove c'è $$a_{2,1}$$ (elimino gli elementi in blu) ed ottengo il complemento $$C_{2,1}$$ di $$a_{2,1}$$; ci metto il segno $-$ (essendo $$2+1=3$$ numero dispari) ed ottengo il complemento algebrico