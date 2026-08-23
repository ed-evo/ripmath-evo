# [Scomposizione di Ruffini con binomi di grado superiore ad uno]{.text-red}

La faremo quando i termini componenti hanno i gradi multipli secondo un numero intero: ad esempio $$9, 6, 3, 0$$ oppure $$4, 2, 0$$. Vediamo su un esempio come procedere.

$$
\textcolor{red}{x^6 - 5x^3 + 6 =}
$$

Trovo i divisori di Ruffini. I divisori del termine noto sono:
[$$+1, -1, +2, -2, +3, -3, +6, -6$$]{.text-red}

Considero come lettera non $$x$$ ma $$x^3$$, quindi il mio polinomio posso considerarlo come:

$$
\textcolor{red}{(x^3)^2 - 5x^3 + 6 =}
$$

> **Nota:** Se trovi difficoltà pensa di mettere al posto di $$x^3$$ una $$y$$, ottieni [$$\textcolor{red}{y^2 - 5y + 6 =}$$]{.text-red} e procedi normalmente; alla fine, nel risultato al posto di $$y$$ metterai $$x^3$$.

Provo i divisori: sostituisco il numero al posto di $$x^3$$, quindi attento a non fare confusione con gli esponenti:

$$
\textcolor{red}{(x^3-1); P(1) = 1^2 - 5(1) + 6 = 1 - 5 + 6 \neq 0}
$$

Quindi [$$\textcolor{red}{x^3 - 2}$$]{.text-red} è un divisore:

$$
\begin{array}{c|ccc}
& 1 & -5 & 6 \\
2 & & 2 & -6 \\
\hline
& 1 & -3 & 0
\end{array}
$$

Adesso devi fare attenzione per ricostruire il quoziente: partendo dal termine noto hai:
termine noto, $$x^3$$, $$x^6$$, $$x^9$$, ...
Noi abbiamo solo due termini, quindi termine noto ed $$x^3$$.

$$
\textcolor{red}{x^6 - 5x^3 + 6 = (x^3 - 2)(x^3 - 3)}
$$