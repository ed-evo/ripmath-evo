# [Intersezioni fra una retta ed una circonferenza]{.text-red}

Data l'equazione di una retta e l'equazione di una circonferenza, se le due curve hanno dei punti in comune deve essere possibile trovarne le coordinate perché geometricamente possiamo trovare i punti comuni.
I punti comuni appartengono contemporaneamente alla retta ed alla circonferenza, quindi basterà imporre che l'equazione della retta e l'equazione della circonferenza valgano contemporaneamente, ciò equivale a fare il sistema fra le due equazioni.
Le coordinate dei punti che si trovano contemporaneamente sulla retta e sulla circonferenza saranno le soluzioni del sistema.

***

Vediamo un esercizio.
Trovare i punti comuni alla retta

$$
\textcolor{red}{y = -2x + 6}
$$

ed alla circonferenza

$$
\textcolor{red}{2x^2 + 2y^2 - 6x - 7y = 0}
$$

***

> **Nota:** Possiamo dire subito che la circonferenza passa per l'origine perché manca il termine noto $c$. Inoltre è sempre consigliabile fare la rappresentazione geometrica per poter controllare se i risultati sono accettabili.

***

Imposto il sistema

$$
\textcolor{red}{
\begin{cases} 
y = -2x + 6 \\
2x^2 + 2y^2 - 6x - 7y = 0
\end{cases}
}
$$

Sostituisco

$$
\textcolor{red}{
\begin{cases} 
y = -2x + 6 \\
2x^2 + 2(-2x + 6)^2 - 6x - 7(-2x + 6) = 0
\end{cases}
}
$$

Eseguo i calcoli

$$
\textcolor{red}{
\begin{cases} 
\dots \\
2x^2 + 2(4x^2 - 24x + 36) - 6x + 14x - 42 = 0
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
\dots \\
2x^2 + 8x^2 - 48x + 72 - 6x + 14x - 42 = 0
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
\dots \\
10x^2 - 40x + 30 = 0
\end{cases}
}
$$

Divido tutto per $10$ (così semplifico i calcoli)

$$
\textcolor{red}{
\begin{cases} 
\dots \\
x^2 - 4x + 3 = 0
\end{cases}
}
$$

Applico la formula risolutiva per l'equazione di secondo grado

$$
\textcolor{red}{
\begin{cases} 
\dots \\
x_{1,2} = \frac{-(-4) \pm \sqrt{(-4)^2 - 4(1)(3)}}{2(1)}
\end{cases}
}
$$

Eseguo i calcoli

$$
\textcolor{red}{
\begin{cases} 
\dots \\
x_{1,2} = \frac{4 \pm \sqrt{16-12}}{2}
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
\dots \\
x_{1,2} = \frac{4 \pm \sqrt{4}}{2}
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
\dots \\
x_{1,2} = \frac{4 \pm 2}{2}
\end{cases}
}
$$

Otteniamo le due soluzioni

$$
\textcolor{red}{x_1 = \frac{4+2}{2} = \frac{6}{2} = 3}
$$

$$
\textcolor{red}{x_2 = \frac{4-2}{2} = \frac{2}{2} = 1}
$$

Sostituisco la prima soluzione nel sistema

$$
\textcolor{red}{
\begin{cases} 
y = -2x + 6 \\
x = 3
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
y = -2 \cdot 3 + 6 \\
x = 3
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
y = 0 \\
x = 3
\end{cases}
}
$$

Primo punto di intersezione $\textcolor{red}{A(3,0)}$

Sostituisco la seconda soluzione nel sistema

$$
\textcolor{red}{
\begin{cases} 
y = -2x + 6 \\
x = 1
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
y = -2 \cdot 1 + 6 \\
x = 1
\end{cases}
}
$$

$$
\textcolor{red}{
\begin{cases} 
y = 4 \\
x = 1
\end{cases}
}
$$

Secondo punto di intersezione $\textcolor{red}{B(1,4)}$

A destra la rappresentazione grafica.