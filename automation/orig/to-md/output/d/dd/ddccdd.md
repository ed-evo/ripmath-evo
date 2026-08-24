# [esercizio]{.text-red}

Data la seguente equazione indicare se rappresenta una circonferenza ed in caso positivo trovarne il centro ed il raggio

$$
\textcolor{blue}{x^2 + y^2 + 4x + 6y + 30 = 0}
$$

So che

$$
\textcolor{blue}{a = 4}
$$
$$
\textcolor{blue}{b = 6}
$$
$$
\textcolor{blue}{c = 30}
$$

Come prima cosa devo vedere se sono verificate le condizioni perché la curva sia una circonferenza:

- I termini al quadrato $\textcolor{blue}{x^2}$ e $\textcolor{blue}{y^2}$ hanno lo stesso coefficiente
  - È vero, valgono entrambe 1
- il termine rettangolare $\textcolor{blue}{(bxy)}$ non c'è
  - giusto
- il quadrato del raggio deve essere maggiore di zero
  - Calcolo il raggio e vedo se viene un numero reale

Calcolo il centro:

> **Nota:** Basta prendere $a$ e $b$, dividerli per due e cambiarli di segno

$$
\textcolor{blue}{x_0 = -2}
$$
$$
\textcolor{blue}{y_0 = -3}
$$
$$
\textcolor{blue}{C(-2, -3)}
$$

ora calcolo il raggio

$$
\textcolor{blue}{r = \sqrt{x_0^2 + y_0^2 - c} =}
$$
$$
\textcolor{blue}{= \sqrt{(-2)^2 + (-3)^2 - 30} =}
$$
$$
\textcolor{blue}{= \sqrt{4 + 9 - 30} = \sqrt{-17}}
$$

Non si tratta di una circonferenza perché il quadrato del raggio è un numero negativo, cioè il raggio è un [numero immaginario](../../b/be/bea.html).

***

Per curiosità vediamo di quale tipo di conica si tratta: confrontando con l'equazione generale di una conica

$$
\textcolor{red}{ax^2 + bxy + cy^2 + dx + ey + f = 0}
$$

ho che

$$
\textcolor{red}{a = 1}
$$
$$
\textcolor{red}{b = 0}
$$
$$
\textcolor{red}{c = 1}
$$

Calcolo

$$
\textcolor{red}{b^2 - 4ac = 0 - 4(1)(1) = -4 < 0}
$$

Si tratta di un'ellisse