# Prodotto fra matrici

È possibile definire in vari modi il prodotto fra matrici:
- righe per righe
- righe per colonne
- colonne per righe
- colonne per colonne

***

Tra questi l'unico che viene usato normalmente è il **prodotto righe per colonne**, indichiamolo con il simbolo $\otimes$.
Vediamone un esempio: per poterlo usare dobbiamo avere lo stesso numero di colonne nella prima matrice del numero delle righe nella seconda; facciamo un prodotto fra una matrice $2 \times 3$ con una matrice $3 \times 4$.
La prima ha tre colonne e la seconda tre righe; otterremo una matrice $2 \times 4$ con due righe e $4$ colonne.

$$
\begin{pmatrix} \textcolor{red}{1} & \textcolor{red}{2} & \textcolor{red}{3} \\ \textcolor{red}{3} & \textcolor{red}{4} & \textcolor{red}{2} \end{pmatrix} \otimes \begin{pmatrix} \textcolor{blue}{1} & \textcolor{blue}{4} & \textcolor{blue}{2} & \textcolor{blue}{6} \\ \textcolor{blue}{2} & \textcolor{blue}{1} & \textcolor{blue}{3} & \textcolor{blue}{4} \\ \textcolor{blue}{3} & \textcolor{blue}{-1} & \textcolor{blue}{5} & \textcolor{blue}{2} \end{pmatrix} =
$$

devo moltiplicare ogni termine di una riga per ogni termine di una colonna:

- al primo posto $a_{1,1}$ metto la somma dei prodotti degli elementi della prima riga per la prima colonna:
  $\textcolor{red}{1} \cdot \textcolor{blue}{1} + \textcolor{red}{2} \cdot \textcolor{blue}{2} + \textcolor{red}{3} \cdot \textcolor{blue}{3} = 14$
- al posto $a_{1,2}$ metto la somma dei prodotti degli elementi della prima riga per la seconda colonna:
  $\textcolor{red}{1} \cdot \textcolor{blue}{4} + \textcolor{red}{2} \cdot \textcolor{blue}{1} + \textcolor{red}{3} \cdot \textcolor{blue}{-1} = 3$
- al posto $a_{1,3}$ metto la somma dei prodotti degli elementi della prima riga per la terza colonna:
  $\textcolor{red}{1} \cdot \textcolor{blue}{2} + \textcolor{red}{2} \cdot \textcolor{blue}{3} + \textcolor{red}{3} \cdot \textcolor{blue}{5} = 23$
- al posto $a_{1,4}$ metto la somma dei prodotti degli elementi della prima riga per la quarta colonna:
  $\textcolor{red}{1} \cdot \textcolor{blue}{6} + \textcolor{red}{2} \cdot \textcolor{blue}{4} + \textcolor{red}{3} \cdot \textcolor{blue}{2} = 20$
- al posto $a_{2,1}$ metto la somma dei prodotti degli elementi della seconda riga per la prima colonna:
  $\textcolor{red}{3} \cdot \textcolor{blue}{1} + \textcolor{red}{4} \cdot \textcolor{blue}{2} + \textcolor{red}{2} \cdot \textcolor{blue}{3} = 17$
- al posto $a_{2,2}$ metto la somma dei prodotti degli elementi della seconda riga per la seconda colonna:
  $\textcolor{red}{3} \cdot \textcolor{blue}{4} + \textcolor{red}{4} \cdot \textcolor{blue}{1} + \textcolor{red}{2} \cdot \textcolor{blue}{-1} = 14$
- al posto $a_{2,3}$ metto la somma dei prodotti degli elementi della seconda riga per la terza colonna:
  $\textcolor{red}{3} \cdot \textcolor{blue}{2} + \textcolor{red}{4} \cdot \textcolor{blue}{3} + \textcolor{red}{2} \cdot \textcolor{blue}{5} = 28$
- al posto $a_{2,4}$ metto la somma dei prodotti degli elementi della seconda riga per la quarta colonna:
  $\textcolor{red}{3} \cdot \textcolor{blue}{6} + \textcolor{red}{4} \cdot \textcolor{blue}{4} + \textcolor{red}{2} \cdot \textcolor{blue}{2} = 38$

cioè

$$
= \begin{pmatrix}
\textcolor{red}{1} \cdot \textcolor{blue}{1} + \textcolor{red}{2} \cdot \textcolor{blue}{2} + \textcolor{red}{3} \cdot \textcolor{blue}{3} & \textcolor{red}{1} \cdot \textcolor{blue}{4} + \textcolor{red}{2} \cdot \textcolor{blue}{1} + \textcolor{red}{3} \cdot \textcolor{blue}{-1} & \textcolor{red}{1} \cdot \textcolor{blue}{2} + \textcolor{red}{2} \cdot \textcolor{blue}{3} + \textcolor{red}{3} \cdot \textcolor{blue}{5} & \textcolor{red}{1} \cdot \textcolor{blue}{6} + \textcolor{red}{2} \cdot \textcolor{blue}{4} + \textcolor{red}{3} \cdot \textcolor{blue}{2} \\
\textcolor{red}{3} \cdot \textcolor{blue}{1} + \textcolor{red}{4} \cdot \textcolor{blue}{2} + \textcolor{red}{2} \cdot \textcolor{blue}{3} & \textcolor{red}{3} \cdot \textcolor{blue}{4} + \textcolor{red}{4} \cdot \textcolor{blue}{1} + \textcolor{red}{2} \cdot \textcolor{blue}{-1} & \textcolor{red}{3} \cdot \textcolor{blue}{2} + \textcolor{red}{4} \cdot \textcolor{blue}{3} + \textcolor{red}{2} \cdot \textcolor{blue}{5} & \textcolor{red}{3} \cdot \textcolor{blue}{6} + \textcolor{red}{4} \cdot \textcolor{blue}{4} + \textcolor{red}{2} \cdot \textcolor{blue}{2}
\end{pmatrix}
$$

$$
= \begin{pmatrix} 14 & 3 & 23 & 20 \\ 17 & 14 & 28 & 38 \end{pmatrix}
$$

***

Un'interessante applicazione del prodotto righe per colonne è che permette di dare una rappresentazione matriciale di un sistema di $n$ equazioni in $n$ incognite.

ad esempio il sistema:

$$
\begin{cases}
a_{1,1} x_1 + a_{1,2} x_2 + a_{1,3} x_3 + \dots + a_{1,n} x_n = b_1 \\
a_{2,1} x_1 + a_{2,2} x_2 + a_{2,3} x_3 + \dots + a_{2,n} x_n = b_2 \\
a_{3,1} x_1 + a_{3,2} x_2 + a_{3,3} x_3 + \dots + a_{3,n} x_n = b_3 \\
\vdots \\
a_{n,1} x_1 + a_{n,2} x_2 + a_{n,3} x_3 + \dots + a_{n,n} x_n = b_n
\end{cases}
$$

si può rappresentare come

$$
\begin{pmatrix}
\textcolor{red}{a_{1,1}} & \textcolor{red}{a_{1,2}} & \textcolor{red}{a_{1,3}} & \dots & \textcolor{red}{a_{1,n}} \\
\textcolor{red}{a_{2,1}} & \textcolor{red}{a_{2,2}} & \textcolor{red}{a_{2,3}} & \dots & \textcolor{red}{a_{2,n}} \\
\textcolor{red}{a_{3,1}} & \textcolor{red}{a_{3,2}} & \textcolor{red}{a_{3,3}} & \dots & \textcolor{red}{a_{3,n}} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\textcolor{red}{a_{n,1}} & \textcolor{red}{a_{n,2}} & \textcolor{red}{a_{n,3}} & \dots & \textcolor{red}{a_{n,n}}
\end{pmatrix}
\otimes
\begin{pmatrix}
\textcolor{red}{x_1} \\
\textcolor{red}{x_2} \\
\textcolor{red}{x_3} \\
\vdots \\
\textcolor{red}{x_n}
\end{pmatrix}
=
\begin{pmatrix}
\textcolor{red}{b_1} \\
\textcolor{red}{b_2} \\
\textcolor{red}{b_3} \\
\vdots \\
\textcolor{red}{b_n}
\end{pmatrix}
$$