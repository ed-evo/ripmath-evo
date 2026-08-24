# [esempio]{.text-red}

Anche qui sarebbe sufficiente mostrare che il termine prima dell'uguale è uguale al termine dopo l'uguale per matrici $2 \times 2$ con termini generici; come ho detto lo sviluppo richiede molta pazienza: limitiamoci ad un esempio che coinvolga la prima parte della proprietà (solo la prima riga).

$$
\text{H}_2(\text{A}) \otimes [\text{H}_2(\text{B}) \oplus \text{H}_2(\text{C})] = \text{H}_2(\text{A}) \otimes \text{H}_2(\text{B}) \oplus \text{H}_2(\text{A}) \otimes \text{H}_2(\text{C})
$$

$$
\textcolor{red}{\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \left( \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \oplus \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} \right) = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \oplus \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix}}
$$

Calcoliamo il termine prima dell'uguale: prima eseguiamo la somma $\oplus$ poi il prodotto $\otimes$.

$$
\textcolor{red}{\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \left( \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \oplus \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} \right) =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2+6 & 4+7 \\ 3+8 & 5+9 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 8 & 11 \\ 11 & 14 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 1 \cdot 8 + 2 \cdot 11 & 1 \cdot 11 + 2 \cdot 14 \\ 0 \cdot 8 + 1 \cdot 11 & 0 \cdot 11 + 1 \cdot 14 \end{pmatrix} =}
$$

$$
\textcolor{blue}{= \begin{pmatrix} 30 & 39 \\ 11 & 14 \end{pmatrix}}
$$

Calcoliamo il termine dopo l'uguale. Prima eseguiamo i prodotti poi la somma.

$$
\textcolor{red}{\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 2 & 4 \\ 3 & 5 \end{pmatrix} \oplus \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \otimes \begin{pmatrix} 6 & 7 \\ 8 & 9 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 1 \cdot 2 + 2 \cdot 3 & 1 \cdot 4 + 2 \cdot 5 \\ 0 \cdot 2 + 1 \cdot 3 & 0 \cdot 4 + 1 \cdot 5 \end{pmatrix} \oplus \begin{pmatrix} 1 \cdot 6 + 2 \cdot 8 & 1 \cdot 7 + 2 \cdot 9 \\ 0 \cdot 6 + 1 \cdot 8 & 0 \cdot 7 + 1 \cdot 9 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 8 & 14 \\ 3 & 5 \end{pmatrix} \oplus \begin{pmatrix} 22 & 25 \\ 8 & 9 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 8+22 & 14+25 \\ 3+8 & 5+9 \end{pmatrix} =}
$$

$$
\textcolor{blue}{= \begin{pmatrix} 30 & 39 \\ 11 & 14 \end{pmatrix}}
$$

come volevamo