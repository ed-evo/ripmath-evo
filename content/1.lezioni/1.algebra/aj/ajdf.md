# [Matrice inversa di una matrice quadrata]{.text-red}

Una matrice quadrata $$\textcolor{red}{\mathbf{A}^{-1}}$$ si dice inversa della matrice quadrata $$\textcolor{red}{\mathbf{A}}$$ se vale

$$
\textcolor{red}{\mathbf{A} \otimes \mathbf{A}^{-1} = \mathbf{A}^{-1} \otimes \mathbf{A} = \mathbf{U}}
$$

Come nei numeri non puoi fare l'inverso dello zero, qui non potrai fare la matrice inversa delle matrici il cui determinante vale zero (vengono chiamate **matrici singolari**).

Diciamo subito che calcolare la matrice inversa di una matrice data è un'operazione laboriosa, quindi dovrai fare parecchi esercizi; comunque le operazioni da svolgere sono le seguenti:

1. Prima calcola il valore del determinante della matrice, chiamiamolo $$\det(\mathbf{A})$$ e vediamo se è diverso da zero; se è uguale a zero non esiste la matrice inversa.
2. Calcola la trasposta della matrice di partenza (basta scambiare tra loro le righe con le colonne).
3. Per ogni elemento della matrice trasposta calcolane il complemento algebrico; considerando il complemento algebrico come elemento ottieni una nuova matrice, chiamiamola $$\mathbf{A}'$$ (si chiama **matrice aggiunta**).
4. Adesso dividi la matrice $$\mathbf{A}'$$ per $$\det(\mathbf{A})$$ (cioè dividi ogni termine per $$\det(\mathbf{A})$$) e ottieni l'inversa della matrice quadrata di partenza.

Per esercizio vediamolo su un esempio numerico:

$$
\textcolor{red}{\mathbf{A} = \begin{pmatrix} 1 & 1 & 2 \\ 2 & 1 & 2 \\ 1 & -2 & 1 \end{pmatrix}}
$$

Voglio trovare l'inversa $$\textcolor{red}{\mathbf{A}^{-1}}$$.

1. Calcoliamo il valore del determinante della matrice $$\textcolor{red}{\mathbf{A}}$$:

$$
\textcolor{red}{\det(\mathbf{A}) = \begin{vmatrix} 1 & 1 & 2 \\ 2 & 1 & 2 \\ 1 & -2 & 1 \end{vmatrix} = -5}
$$

2. Calcolo la trasposta della matrice di partenza (scambio tra loro le righe con le colonne):

$$
\textcolor{red}{\mathbf{A}^T = \begin{pmatrix} 1 & 2 & 1 \\ 1 & 1 & -2 \\ 2 & 2 & 1 \end{pmatrix}}
$$

3. Per ogni elemento del determinante della matrice trasposta calcolo il complemento algebrico; nel calcolo ricordati di cambiare di segno gli elementi di posto dispari:

$$\textcolor{red}{C_{1,1} = 5}$$
$$\textcolor{red}{C_{1,2} = -5}$$
$$\textcolor{red}{C_{1,3} = 0}$$
$$\textcolor{red}{C_{2,1} = 0}$$
$$\textcolor{red}{C_{2,2} = -1}$$
$$\textcolor{red}{C_{2,3} = 2}$$
$$\textcolor{red}{C_{3,1} = -5}$$
$$\textcolor{red}{C_{3,2} = 3}$$
$$\textcolor{red}{C_{3,3} = -1}$$

Consideriamo quindi la matrice $$\mathbf{A}'$$ che ha come elementi i complementi algebrici trovati:

$$
\textcolor{red}{\mathbf{A}' = \begin{pmatrix} 5 & -5 & 0 \\ 0 & -1 & 2 \\ -5 & 3 & -1 \end{pmatrix}}
$$

4. Adesso divido la matrice $$\mathbf{A}'$$ per il valore del determinante di $$\mathbf{A}$$ (che valeva $$-5$$) e ottengo la matrice $$\mathbf{A}^{-1}$$, cioè l'inversa di quella di partenza:

$$
\textcolor{red}{\mathbf{A}^{-1} = -\frac{1}{5} \begin{pmatrix} 5 & -5 & 0 \\ 0 & -1 & 2 \\ -5 & 3 & -1 \end{pmatrix} = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 1/5 & -2/5 \\ 1 & -3/5 & 1/5 \end{pmatrix}}
$$

Come vedi bisogna fare un sacco di calcoli, ed ho preso solo una matrice $$3 \times 3$$.

***

> **Importante:** la matrice unitaria è inversa di se stessa, cioè se calcoli l'inverso della matrice unitaria ottieni la stessa matrice (come nei numeri: l'inverso di $$1$$ è sempre $$1$$).

***

**Esercizi:**
- prova a moltiplicare questa matrice per quella di partenza e controlla che effettivamente ottieni la matrice unitaria
- Calcola l'inversa della matrice unitaria per controllare che coincide con la matrice di partenza