[# Prodotto righe per colonne fra matrici quadrate]{.text-red}

Possiamo dire subito che è un'operazione di composizione interna perché il prodotto fra due matrici quadrate dello stesso ordine è ancora una matrice quadrata dello stesso ordine.

Dobbiamo però notare che l'operazione non è commutativa, cioè il risultato dipende dall'ordine in cui sono moltiplicati i fattori:

$$
\textcolor{red}{A \otimes B \neq B \otimes A}
$$

Per esercizio vediamolo su un esempio numerico.

$$
\textcolor{red}{A = \begin{pmatrix} 1 & 1 & 3 \\ 2 & 1 & 3 \\ 1 & -2 & 1 \end{pmatrix}}
$$

$$
\textcolor{red}{B = \begin{pmatrix} 0 & 1 & 2 \\ 2 & 3 & -2 \\ 3 & -1 & 1 \end{pmatrix}}
$$

$$
\textcolor{red}{A \otimes B = \begin{pmatrix} 1 & 1 & 3 \\ 2 & 1 & 3 \\ 1 & -2 & 1 \end{pmatrix} \otimes \begin{pmatrix} 0 & 1 & 2 \\ 2 & 3 & -2 \\ 3 & -1 & 1 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 1 \cdot 0 + 1 \cdot 2 + 3 \cdot 3 & 1 \cdot 1 + 1 \cdot 3 + 3 \cdot (-1) & 1 \cdot 2 + 1 \cdot (-2) + 3 \cdot 1 \\ 2 \cdot 0 + 1 \cdot 2 + 3 \cdot 3 & 2 \cdot 1 + 1 \cdot 3 + 3 \cdot (-1) & 2 \cdot 2 + 1 \cdot (-2) + 3 \cdot 1 \\ 1 \cdot 0 + (-2) \cdot 2 + 1 \cdot 3 & 1 \cdot 1 + (-2) \cdot 3 + 1 \cdot (-1) & 1 \cdot 2 + (-2) \cdot (-2) + 1 \cdot 1 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 11 & 1 & 3 \\ 11 & 2 & 5 \\ -1 & -6 & 7 \end{pmatrix}}
$$

Mentre avremo:

$$
\textcolor{red}{B \otimes A = \begin{pmatrix} 0 & 1 & 2 \\ 2 & 3 & -2 \\ 3 & -1 & 1 \end{pmatrix} \otimes \begin{pmatrix} 1 & 1 & 3 \\ 2 & 1 & 3 \\ 1 & -2 & 1 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 0 \cdot 1 + 1 \cdot 2 + 2 \cdot 1 & 0 \cdot 1 + 1 \cdot 1 + 2 \cdot (-2) & 0 \cdot 3 + 1 \cdot 3 + 2 \cdot 1 \\ 2 \cdot 1 + 3 \cdot 2 + (-2) \cdot 1 & 2 \cdot 1 + 3 \cdot 1 + (-2) \cdot (-2) & 2 \cdot 3 + 3 \cdot 3 + (-2) \cdot 1 \\ 3 \cdot 1 + (-1) \cdot 2 + 1 \cdot 1 & 3 \cdot 1 + (-1) \cdot 1 + 1 \cdot (-2) & 3 \cdot 3 + (-1) \cdot 3 + 1 \cdot 1 \end{pmatrix} =}
$$

$$
\textcolor{red}{= \begin{pmatrix} 4 & -3 & 5 \\ 6 & 9 & 13 \\ 2 & 0 & 7 \end{pmatrix}}
$$

Da notare che la matrice nulla, rispetto all'operazione di prodotto righe per colonne, si comporta come elemento assorbente:

$$
\textcolor{red}{A \otimes \emptyset = \emptyset \otimes A = \emptyset}
$$

Bisogna ancora aggiungere che il prodotto righe per colonne fra matrici quadrate gode della proprietà associativa, cioè:

$$
\textcolor{red}{(A \otimes B) \otimes C = A \otimes (B \otimes C)}
$$

cioè per moltiplicare fra loro tre matrici puoi moltiplicare prima le prime due e poi la matrice ottenuta per la terza oppure puoi moltiplicare tra loro prima la seconda e la terza e poi moltiplicare la prima per la matrice prodotto ottenuta: ottieni lo stesso risultato.

> **Esercizio:** prova a moltiplicare tre matrici $$3 \times 3$$ nei due modi diversi.