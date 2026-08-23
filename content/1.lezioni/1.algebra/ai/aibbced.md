# Determinanti $$2 \times 2$$ estraibili dalla matrice completa

> **Nota:** Per determinare gli elementi tengo fissa una riga: la terza, poi la seconda e poi la prima e fissando l'ultima colonna faccio scorrere la penultima colonna verso l'inizio.

Tolgo gli elementi in blu

### Tengo fissa la terza riga

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
a_{2,1} & a_{2,2} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & a_{1,2} \\
a_{2,1} & a_{2,2}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} & \textcolor{blue}{b_{1}} \\
a_{2,1} & \textcolor{blue}{a_{2,2}} & a_{2,3} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & a_{1,3} \\
a_{2,1} & a_{2,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,2} & a_{1,3} \\
a_{2,2} & a_{2,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & b_{1} \\
a_{2,1} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & b_{2} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & b_{1} \\
a_{2,1} & b_{2}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & \textcolor{blue}{a_{1,3}} & b_{1} \\
\textcolor{blue}{a_{2,1}} & a_{2,2} & \textcolor{blue}{a_{2,3}} & b_{2} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,2} & b_{1} \\
a_{2,2} & b_{2}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & a_{1,3} & b_{1} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & a_{2,3} & b_{2} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,3} & b_{1} \\
a_{2,3} & b_{2}
\end{vmatrix}
}
$$

### Tengo fissa la seconda riga

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & a_{1,2} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & a_{1,2} \\
a_{3,1} & a_{3,2}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & a_{1,3} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & a_{1,3} \\
a_{3,1} & a_{3,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & a_{1,3} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,2} & a_{1,3} \\
a_{3,2} & a_{3,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
a_{1,1} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & b_{1} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,1} & b_{1} \\
a_{3,1} & b_{3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & a_{1,2} & \textcolor{blue}{a_{1,3}} & b_{1} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & \textcolor{blue}{a_{3,3}} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,2} & b_{1} \\
a_{3,2} & b_{3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & a_{1,3} & b_{1} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & a_{3,3} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{1,3} & b_{1} \\
a_{3,3} & b_{3}
\end{vmatrix}
}
$$

### Ora fisso la prima riga

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
a_{2,1} & a_{2,2} & \textcolor{blue}{a_{2,3}} & \textcolor{blue}{b_{2}} \\
a_{3,1} & a_{3,2} & \textcolor{blue}{a_{3,3}} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,1} & a_{2,2} \\
a_{3,1} & a_{3,2}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
a_{2,1} & \textcolor{blue}{a_{2,2}} & a_{2,3} & \textcolor{blue}{b_{2}} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & a_{3,3} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,1} & a_{2,3} \\
a_{3,1} & a_{3,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & a_{2,2} & a_{2,3} & \textcolor{blue}{b_{2}} \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & a_{3,3} & \textcolor{blue}{b_{3}}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,2} & a_{2,3} \\
a_{3,2} & a_{3,3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
a_{2,1} & \textcolor{blue}{a_{2,2}} & \textcolor{blue}{a_{2,3}} & b_{2} \\
a_{3,1} & \textcolor{blue}{a_{3,2}} & \textcolor{blue}{a_{3,3}} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,1} & b_{2} \\
a_{3,1} & b_{3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & a_{2,2} & \textcolor{blue}{a_{2,3}} & b_{2} \\
\textcolor{blue}{a_{3,1}} & a_{3,2} & \textcolor{blue}{a_{3,3}} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,2} & b_{2} \\
a_{3,2} & b_{3}
\end{vmatrix}
}
$$

$$
\textcolor{red}{
\begin{Vmatrix}
\textcolor{blue}{a_{1,1}} & \textcolor{blue}{a_{1,2}} & \textcolor{blue}{a_{1,3}} & \textcolor{blue}{b_{1}} \\
\textcolor{blue}{a_{2,1}} & \textcolor{blue}{a_{2,2}} & a_{2,3} & b_{2} \\
\textcolor{blue}{a_{3,1}} & \textcolor{blue}{a_{3,2}} & a_{3,3} & b_{3}
\end{Vmatrix}
\Rightarrow
\begin{vmatrix}
a_{2,3} & b_{2} \\
a_{3,3} & b_{3}
\end{vmatrix}
}
$$