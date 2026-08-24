# esempio

È sufficiente mostrare che il termine prima dell'uguale è uguale al termine dopo l'uguale per matrici $2 \times 2$ con termini generici

termine prima dell'uguale

$$
\left( \begin{pmatrix} a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{pmatrix} \otimes \begin{pmatrix} b_{1,1} & b_{1,2} \\ b_{2,1} & b_{2,2} \end{pmatrix} \right) \otimes \begin{pmatrix} c_{1,1} & c_{1,2} \\ c_{2,1} & c_{2,2} \end{pmatrix} =
$$

$$
= \begin{pmatrix} a_{1,1}b_{1,1}+a_{1,2}b_{2,1} & a_{1,1}b_{1,2}+a_{1,2}b_{2,2} \\ a_{2,1}b_{1,1}+a_{2,2}b_{1,2} & a_{2,1}b_{2,1}+a_{2,1}b_{1,2} \end{pmatrix} \otimes \begin{pmatrix} c_{1,1} & c_{1,2} \\ c_{2,1} & c_{2,2} \end{pmatrix} =
$$

**[= eccetera]{.text-red}**

questo sarebbe il primo termine della matrice risultato
$$
\textcolor{red}{a_{1,1}b_{1,1}c_{1,1}+a_{1,2}b_{2,1}c_{1,1} + a_{1,1}b_{1,1}c_{2,1}+a_{1,2}b_{2,1}c_{2,1}}
$$

poi dovrei calcolare il termine dopo l'uguale

$$
\begin{pmatrix} a_{1,1} & a_{1,2} \\ a_{2,1} & a_{2,2} \end{pmatrix} \otimes \left( \begin{pmatrix} b_{1,1} & b_{1,2} \\ b_{2,1} & b_{2,2} \end{pmatrix} \otimes \begin{pmatrix} c_{1,1} & c_{1,2} \\ c_{2,1} & c_{2,2} \end{pmatrix} \right) =
$$

**[= eccetera]{.text-red}**

> come vedi i calcoli sono chilometrici; io non ho pazienza, quindi ti mostro che la regola è valida su delle matrici $2 \times 2$ con termini numerici; questa quindi non è una dimostrazione ma un esempio

Mostriamo, come esempio, che vale

$$
\left( \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \right) \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \left( \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} \right)
$$

Calcoliamo la prima

$$
\left( \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \right) \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 1\cdot 2+2\cdot 3 & 1\cdot 4+2\cdot 5 \\ 0\cdot 2+1\cdot 3 & 0\cdot 4+1\cdot 5 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 8 & 14 \\ 3 & 5 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 8\cdot 6+14\cdot 8 & 8\cdot 7+14\cdot 9 \\ 3\cdot 6+5\cdot 8 & 3\cdot 7+5\cdot 9 \end{pmatrix} =
$$

$$
= \textcolor{blue}{\begin{pmatrix} 160 & 182 \\ 58 & 66 \end{pmatrix}}
$$

Calcoliamo la seconda

$$
\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \left( \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} \right) =
$$

$$
= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2\cdot 6+4\cdot 8 & 2\cdot 7+4\cdot 9 \\ 3\cdot 6+5\cdot 8 & 3\cdot 7+5\cdot 9 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 44 & 50 \\ 58 & 66 \end{pmatrix} =
$$

$$
= \begin{pmatrix} 1\cdot 44+2\cdot 58 & 1\cdot 50+2\cdot 66 \\ 0\cdot 44+1\cdot 58 & 0\cdot 50+1\cdot 66 \end{pmatrix} =
$$

$$
= \textcolor{blue}{\begin{pmatrix} 160 & 182 \\ 58 & 66 \end{pmatrix}}
$$

come volevamo