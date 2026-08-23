# [Quoziente di limiti di successioni convergenti]{.text-red}

Se le successioni

$$a_1, a_2, a_3, a_4, \dots, a_n, \dots$$

e

$$b_1, b_2, b_3, b_4, \dots, b_n, \dots$$

sono convergenti e la seconda successione non ha termini nulli e non è infinitesima allora anche il loro quoziente converge e il limite del loro quoziente è uguale al quoziente dei limiti

$$
\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{\lim_{n \to \infty} a_n}{\lim_{n \to \infty} b_n}
$$

> Al solito, siccome non possiamo dividere per zero dobbiamo supporre che il denominatore sia sempre diverso da zero

***

> **Dimostrazione:** Per la dimostrazione basta pensare che vale:
>
> se $$b_1, b_2, b_3, b_4, \dots, b_n, \dots$$ è una successione limitata e non infinitesima e con tutti i termini diversi da zero, allora anche la successione
>
> $$
> \frac{1}{b_1}, \frac{1}{b_2}, \frac{1}{b_3}, \dots, \frac{1}{b_n}, \dots
> $$
>
> è limitata.
>
> Allora vale:
>
> $$
> \lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \left( a_n \cdot \frac{1}{b_n} \right)
> $$
>
> quindi posso rifarmi al teorema sul limite del prodotto di successioni limitate