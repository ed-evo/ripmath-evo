# [.text-red]Algebra delle matrici

Riassumendo le proprietà viste:

- Esiste un'operazione interna: la somma $\oplus$
- La somma è commutativa
- Esiste l'elemento neutro $\textcolor{red}{\mathbf{0}}$ rispetto all'operazione somma
- Data una matrice $\textcolor{red}{\mathbf{A}}$ esiste l'elemento opposto $\textcolor{red}{-\mathbf{A}}$ tale che
$$
\textcolor{red}{\mathbf{A} \oplus (-\mathbf{A}) = \mathbf{0}}
$$
- Esiste un prodotto esterno $\underline{\textcolor{red}{x}}$ (quindi con queste proprietà l'insieme delle matrici quadrate è uno spazio vettoriale)
- Esiste un'operazione interna: il prodotto righe per colonne $\otimes$
- Esiste l'elemento neutro moltiplicativo $\textcolor{red}{\mathbf{u}}$
- Per ogni matrice quadrata non singolare esiste l'elemento inverso tale che
$$
\textcolor{red}{\mathbf{A} \otimes \mathbf{A}^{-1} = \mathbf{A}^{-1} \otimes \mathbf{A} = \mathbf{u}}
$$
- Il prodotto è associativo
$$
\textcolor{red}{(\mathbf{A} \otimes \mathbf{B}) \otimes \mathbf{C} = \mathbf{A} \otimes (\mathbf{B} \otimes \mathbf{C})}
$$
- La moltiplicazione è distributiva rispetto all'addizione
$$
\textcolor{red}{\mathbf{A} \otimes (\mathbf{B} \oplus \mathbf{C}) = (\mathbf{A} \otimes \mathbf{B}) \oplus (\mathbf{A} \otimes \mathbf{C})}
$$
> **Nota:** Proprietà non verificata, prova a verificarla tu per esercizio.

Quindi si dice che l'insieme delle matrici quadrate di ordine $\textcolor{red}{n \times n}$ forma un'**algebra**.

> Fare vari link ad algebra astratta per mostrare gruppi, anelli, corpi quando la scriverò.