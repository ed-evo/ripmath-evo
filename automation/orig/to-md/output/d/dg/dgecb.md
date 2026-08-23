# [Esercizio]{.text-red}

[Data la parabola $$y = -x^2 + 6x$$ indicate con $$O$$ ed $$A$$ le intersezioni fra la parabola e l'asse delle $$x$$, indicata poi con $$B$$ l'ulteriore intersezione fra la retta $$y = kx$$ e la parabola determinare il valore di $$k$$ perché l'area del triangolo $$OAB$$ abbia valore $$15$$ unità quadrate del piano.]{.text-blue}

> Ripetendo quanto detto nell'esercizio precedente, il metodo generale per risolvere questi problemi è quello di procedere come se al posto del parametro ci fosse un numero qualunque: una volta trovato il dato che viene posto come condizione si uguaglia tale dato con quello fornito dal problema: si ottiene un'equazione che, risolta, ci dà il valore del parametro cercato.
>
> A destra la rappresentazione grafica che in questi casi è molto utile. [Rappresentazione grafica della parabola](dgcda.html)

In questo caso il dato è l'area del triangolo $$OAB$$.
Per trovare l'area devo trovare la misura della base e dell'altezza.
La base è $$OA$$, $$A$$ è l'intersezione fra la parabola e l'asse $$x$$, cioè:

$$
\begin{cases}
\textcolor{red}{y = -x^2 + 6x} \\
\textcolor{red}{y = 0}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 - 6x = 0} \\
\textcolor{red}{y = 0}
\end{cases}
$$

Ho le soluzioni:

$$
\begin{cases}
\textcolor{red}{x = 0} \\
\textcolor{red}{y = 0}
\end{cases}
\quad
\begin{cases}
\textcolor{red}{x = 6} \\
\textcolor{red}{y = 0}
\end{cases}
$$

Quindi [**A(6,0)**]{.text-red} e la base [**OA**]{.text-red} del triangolo [**OAB**]{.text-red} vale [**6**]{.text-red}.

Ora devo trovare le coordinate dell'intersezione [**B**]{.text-red} fra la retta $$y = kx$$ e la parabola $$y = -x^2 + 6x$$.
L'altezza $$BH$$ corrisponderà alla coordinata $$y$$ di $$B$$.

Faccio il sistema fra la retta e la parabola:

$$
\begin{cases}
\textcolor{red}{y = -x^2 + 6x} \\
\textcolor{red}{y = kx}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{kx = -x^2 + 6x} \\
\textcolor{red}{y = kx}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 - 6x + kx = 0} \\
\textcolor{red}{\text{---}}
\end{cases}
$$

$$
\begin{cases}
\textcolor{red}{x^2 + (k - 6)x = 0} \\
\textcolor{red}{\text{---}}
\end{cases}
$$

È un'equazione di secondo grado spuria ed ottengo:
[$$x = 0$$]{.text-red}
[$$x = 6 - k$$]{.text-red}

Quindi avrò le soluzioni:

$$
\begin{cases}
\textcolor{red}{x = 0} \\
\textcolor{red}{y = k \cdot 0 = 0}
\end{cases}
\quad
\begin{cases}
\textcolor{red}{x = 6 - k} \\
\textcolor{red}{y = k(6 - k) = 6k - k^2}
\end{cases}
$$

La prima corrisponde all'origine [**O(0,0)**]{.text-red}, la seconda corrisponde al punto [**B(6 - k, 6k - k^2)**]{.text-red}.
Quindi l'altezza del triangolo vale [**$$6k - k^2$$**]{.text-red}.

[**$$\text{AREA} = \frac{OA \cdot BH}{2} = \frac{6(6k - k^2)}{2} = 3(6k - k^2) = 18k - 3k^2$$**]{.text-red}
[**$$\text{AREA} = 15$$**]{.text-red}

Quindi dobbiamo risolvere:
[**$$-3k^2 + 18k = 15$$**]{.text-red}

Cambio di segno:
[**$$3k^2 - 18k = -15$$**]{.text-red}
[**$$3k^2 - 18k + 15 = 0$$**]{.text-red}

Divido tutto per $$3$$:
[**$$k^2 - 6k + 5 = 0$$**]{.text-red}

Risolvo ed ottengo [calcoli](dgeaba.html):
[**$$k = 1$$**]{.text-red} $\quad$ [**$$k = 5$$**]{.text-red}

Avremo quindi due possibilità, entrambe con il punto $$B$$ nel primo quadrante e la retta potrà essere la bisettrice del primo quadrante ($$y = x$$) oppure una retta con crescita molto più marcata ($$y = 5x$$), in modo che i triangoli siano tra loro simmetrici rispetto all'asse della parabola.

> Geometricamente sarebbe possibile avere altre due soluzioni, con la retta che passa nel secondo e nel quarto quadrante, ma, in tal caso, il triangolo avrebbe area negativa (assurdo) perché l'altezza del triangolo sarebbe un numero negativo essendo il vertice una volta nel terzo ed una volta nel quarto quadrante.
>
> Se, per esercizio, vuoi generalizzare il problema, avrai bisogno di utilizzare il concetto di [modulo](../../a/af/afbhb.html): otterrai come equazione per l'area:
> [**$$-3k^2 + 18k = |15|$$**]{.text-red}