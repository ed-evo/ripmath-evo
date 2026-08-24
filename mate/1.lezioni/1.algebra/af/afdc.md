# Equazioni biquadratiche

Si chiamerà biquadratica un'equazione che ha tre termini, uno con $x^4$, uno con $x^2$, ed un termine noto.

$$
\textcolor{blue}{ax^4 + bx^2 + c = 0}
$$

Per risolvere quest'equazione conviene sostituire $x^2$ con $y$ e quindi $x^4$ con $y^2$, quindi l'equazione diviene di secondo grado in $y$;

$$
\textcolor{blue}{ay^2 + by + c = 0}
$$

trovate le due soluzioni $y_1$ ed $y_2$ dovrò risolvere le due equazioni

$$
\textcolor{blue}{x^2 = y_1}
$$

$$
\textcolor{blue}{x^2 = y_2}
$$

Le 4 soluzioni trovate saranno le soluzioni dell'equazione di partenza.

---

In qualche libro di testo viene addirittura fornita una formula finale

$$
\textcolor{blue}{\pm \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

---

Vediamo un esempio concreto: risolvere

$$
\textcolor{blue}{x^4 - 5x^2 + 4 = 0}
$$

pongo $\textcolor{red}{x^2 = y}$ e quindi $\textcolor{red}{x^4 = y^2}$

$$
\textcolor{red}{y^2 - 5y + 4 = 0}
$$

risolvo rispetto ad $y$

$$
\textcolor{red}{y_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

$$
\textcolor{red}{y_{1,2} = \frac{5 \pm \sqrt{25 - 16}}{2}}
$$

$$
\textcolor{red}{y_{1,2} = \frac{5 \pm \sqrt{9}}{2}}
$$

$$
\textcolor{red}{y_{1,2} = \frac{5 \pm 3}{2}}
$$

- $\textcolor{red}{y_1 = (5 + 3)/2 = 8/2 = 4}$
- $\textcolor{red}{y_2 = (5 - 3)/2 = 2/2 = 1}$

Ora devo risolvere le due equazioni:

- $\textcolor{red}{x^2 = 4}$
- $\textcolor{red}{x^2 = 1}$

- risolvo la prima
    - $\textcolor{red}{x_1 = -2}$
    - $\textcolor{red}{x_2 = +2}$
- risolvo la seconda
    - $\textcolor{red}{x_3 = -1}$
    - $\textcolor{red}{x_4 = +1}$

quindi le 4 soluzioni (messe in fila) sono:

$$
\textcolor{blue}{x_1 = -2 \quad x_2 = -1 \quad x_3 = +1 \quad x_4 = +2}
$$

---

Risolviamo per esercizio le seguenti equazioni

- $\textcolor{blue}{x^4 - 10x^2 + 9 = 0}$ [soluzione](afdc1.html)
- $\textcolor{blue}{x^4 - 3x^2 - 4 = 0}$ [soluzione](afdc2.html)
- $\textcolor{blue}{x^4 + 13x^2 + 36 = 0}$ [soluzione](afdc3.html)

---