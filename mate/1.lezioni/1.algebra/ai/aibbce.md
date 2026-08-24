# Rango di una matrice

Dobbiamo introdurre il fatto che se prendiamo dei determinanti di un certo ordine estraendoli da una matrice essi potranno essere tutti nulli oppure potrà esistere qualche determinante diverso da zero.
Partiamo dalla matrice incompleta e completa della pagina precedente:

$$
\textcolor{red}{\begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix}}
$$
[Matrice incompleta]{.text-blue}

$$
\textcolor{red}{\begin{pmatrix} 1 & 1 & 1 & 6 \\ 1 & 1 & 1 & 5 \\ 1 & -1 & 1 & 2 \end{pmatrix}}
$$
[Matrice completa]{.text-blue}

Quanti determinanti posso estrarre da quelle matrici?

- Determinanti $3\times 3$ (rango $3$):
  - $1$ dalla matrice incompleta
  - $4$ dalla matrice completa
- Determinanti $2\times 2$ (rango $2$):
  - $9$ dalla matrice incompleta
  - $18$ dalla matrice completa
- Determinanti $1\times 1$ (corrispondono agli elementi) (rango $1$):
  - $9$ dalla matrice incompleta
  - $12$ dalla matrice completa

> **Definizione:** Definiamo **Rango o Caratteristica di una matrice** l'ordine del determinante più alto estraibile che sia diverso da zero.

Se ora consideriamo la matrice incompleta vediamo che il determinante di ordine $3$ è uguale a zero, perché ha due righe uguali, mentre esiste un determinante di ordine $2$ diverso da zero: prendo il minore indicato in blu.

$$
\begin{pmatrix} 1 & 1 & 1 \\ \textcolor{blue}{1} & \textcolor{blue}{1} & 1 \\ \textcolor{blue}{1} & \textcolor{blue}{-1} & 1 \end{pmatrix}
$$

Cioè:

$$
\textcolor{blue}{\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = 1 \cdot (-1) - 1 \cdot 1 = -1 - 1 = -2}
$$

Quindi il rango della matrice incompleta è $2$ perché il determinante più grosso diverso da zero è $2\times 2$.

Nella matrice completa, invece, abbiamo che la colonna dei termini noti non rispetta la proporzione e, se vado a prendere uno dei minori considerandolo avente come colonna l'ultima colonna della matrice, vedo che il valore del suo determinante è diverso da zero.

$$
\begin{pmatrix} \textcolor{blue}{1} & \textcolor{blue}{1} & 1 & \textcolor{blue}{6} \\ \textcolor{blue}{1} & \textcolor{blue}{1} & 1 & \textcolor{blue}{5} \\ \textcolor{blue}{1} & \textcolor{blue}{-1} & 1 & \textcolor{blue}{2} \end{pmatrix}
$$

$$
\textcolor{red}{\begin{vmatrix} 1 & 1 & 6 \\ 1 & 1 & 5 \\ 1 & -1 & 2 \end{vmatrix} = -2}
$$

Quindi il rango della matrice completa è $3$ perché il determinante più grosso diverso da zero è $3\times 3$.

> **Nota:** Questo fatto di avere le caratteristiche della matrice completa e della matrice incompleta diverse è tipico dei sistemi impossibili e deriva dal fatto che l'informazione dopo l'uguale, essendo errata, non rispetta la proporzione come i coefficienti delle incognite, quindi:
> 
> **Un sistema è impossibile se il rango della matrice completa è diverso dal rango della matrice incompleta**