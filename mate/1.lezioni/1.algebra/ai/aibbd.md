# Sistema omogeneo

Vediamo ora un caso particolare: è possibile risolvere un sistema quando la somma delle incognite vale sempre zero?
costruiamo il sistema con il solito metodo: consideriamo i valori 

$$\textcolor{red}{x = 1 \quad y = 2 \quad z = 3}$$

che saranno le soluzioni

Costruiamo le equazioni

$$\textcolor{red}{1 + 2 - 3 = 0 \quad x + y - z = 0}$$
$$\textcolor{red}{1 - 2 \cdot 2 + 3 = 0 \quad x - 2y + z = 0}$$
$$\textcolor{red}{5 \cdot 1 - 2 - 3 = 0 \quad 5x - y - z = 0}$$

Dobbiamo risolvere il sistema:

$$
\textcolor{blue}{
\begin{cases}
x + y - z = 0 \\
x - 2y + z = 0 \\
5x - y - z = 0
\end{cases}
}
$$

Se il determinante della matrice dei coefficienti è diverso da zero, procedo con il metodo di Cramer, siccome la colonna dei termini noti è tutta nulla otterrò la soluzione banale

$$
\textcolor{blue}{
\begin{cases}
x = 0 \\
y = 0 \\
z = 0
\end{cases}
}
$$

Se invece il determinante è uguale a zero (come nel nostro caso)

$$
\textcolor{red}{
\begin{vmatrix}
1 & 1 & -1 \\
1 & -2 & 1 \\
5 & -1 & -1
\end{vmatrix} = 0
}
$$

allora il sistema ammette infinite soluzioni e vale la regola:

**Se i complementi algebrici degli elementi di una qualunque riga non sono tutti nulli allora il loro valore è una delle infinite soluzioni del sistema**

Cioè saranno soluzioni del sistema anche tutti i multipli e sottomultipli dei valori trovati cioè:

$$
\textcolor{blue}{
\begin{cases}
x = \text{costante} \cdot C_{1,1} \\
y = \text{costante} \cdot C_{1,2} \\
z = \text{costante} \cdot C_{1,3}
\end{cases}
}
$$

Essendo:
$$C_{1,1}$$ il complemento algebrico del primo elemento della prima riga
$$C_{1,2}$$ il complemento algebrico del secondo elemento della prima riga
$$C_{1,3}$$ il complemento algebrico del terzo elemento della prima riga

> Siccome i complementi algebrici degli elementi della prima riga non sono tutti nulli considero loro
> **Attenzione:** nel concetto di complemento algebrico è implicito il segno normale se il complemento ha somma degli indici pari, segno cambiato se la somma degli indici è dispari

Nel nostro caso abbiamo:

$$
\textcolor{red}{x = C_{1,1} = \begin{vmatrix} -2 & 1 \\ -1 & -1 \end{vmatrix} = (-2) \cdot (-1) - 1 \cdot (-1) = 2 + 1 = 3}
$$

$$
\textcolor{red}{y = C_{1,2} = \begin{vmatrix} 1 & 1 \\ 5 & -1 \end{vmatrix} = - [1 \cdot (-1) - 5 \cdot (1)] = - (-1 - 5) = 6}
$$

$$
\textcolor{red}{z = C_{1,3} = \begin{vmatrix} 1 & -2 \\ 5 & -1 \end{vmatrix} = 1 \cdot (-1) - (-2) \cdot 5 = -1 + 10 = 9}
$$

ottengo quindi come soluzione

$$
\textcolor{blue}{
\begin{cases}
x = 3 \\
y = 6 \\
z = 9
\end{cases}
}
$$

siccome ho come infinite soluzioni tutte quelle proporzionali a queste avrò come soluzione anche

$$
\textcolor{blue}{
\begin{cases}
x = 1 \\
y = 2 \\
z = 3
\end{cases}
}
$$

ottenuta dalla precedente dividendo ogni risultato per $$3$$
È preferibile indicare le soluzioni come

$$
\textcolor{blue}{
\begin{cases}
x = k \\
y = 2k \\
z = 3k
\end{cases} \quad \text{con } k \text{ numero reale}
}
$$