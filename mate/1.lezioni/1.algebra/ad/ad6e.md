# Scomposizione secondo il trinomio notevole

La scomposizione secondo il trinomio notevole è l'operazione inversa della moltiplicazione fra binomi: cioè dato il trinomio $\textcolor{red}{x^2+sx+p}$ con $\textcolor{red}{s}$ e $\textcolor{red}{p}$ numeri dati dobbiamo trovare il prodotto fra binomi $\textcolor{red}{(x+a)(x+b)}$ il cui risultato sia il polinomio di partenza.

Se noi proviamo ad eseguire la moltiplicazione vedremo cosa sono $\textcolor{red}{s}$ e $\textcolor{red}{p}$ rispetto ad $\textcolor{red}{a}$ e $\textcolor{red}{b}$:

$$
\textcolor{red}{(x+a)(x+b)=x^2+ax+bx+ab=x^2+(a+b)x+ab}
$$

allora avremo che

$$
\textcolor{red}{x^2+sx+p=x^2+(a+b)x+ab}
$$

e per il [principio di identità dei polinomi](../../identita.html) avremo:

$$
\textcolor{red}{s=(a+b)}
$$

$$
\textcolor{red}{p=ab}
$$

Quindi avendo $\textcolor{red}{p}$ e $\textcolor{red}{s}$ dovrò trovare due numeri il cui prodotto è $\textcolor{red}{p}$ e la somma è $\textcolor{red}{s}$.

Esempio:
$\textcolor{red}{x^2+5x+6=}$

Devo trovare due numeri il cui prodotto è $\textcolor{red}{6}$ e la somma è $\textcolor{red}{5}$ (conviene partire dal prodotto):
i numeri che danno prodotto $\textcolor{red}{6}$ possono essere $\textcolor{red}{1}$ e $\textcolor{red}{6}$ oppure $\textcolor{red}{2}$ e $\textcolor{red}{3}$ e la somma di $\textcolor{red}{2}$ e $\textcolor{red}{3}$ mi dà $\textcolor{red}{5}$.
i due numeri cercati sono $\textcolor{red}{2}$ e $\textcolor{red}{3}$ quindi:

$$
\textcolor{red}{x^2+5x+6=(x+2)(x+3)}
$$

Quindi quando hai un polinomio ordinato di 3 termini puoi usare questa regola senza scomodare Ruffini.

> **Attenzione:** guarda che per somma si intende somma algebrica quindi è importante guardare il segno del prodotto: se è positivo allora i due numeri cercati hanno lo stesso segno e devi farne la somma, ma se il segno del prodotto è negativo i due numeri hanno segni diversi e devi fare la differenza;
> 
> esempio:
> $\textcolor{red}{x^2+3x-10=}$
> 
> Devo trovare due numeri il cui prodotto è $\textcolor{red}{-10}$ e la somma è $\textcolor{red}{+3}$ (conviene partire dal prodotto che in questo caso è negativo quindi devi fare la differenza):
> i numeri che danno prodotto $\textcolor{red}{10}$ possono essere $\textcolor{red}{1}$ e $\textcolor{red}{10}$ oppure $\textcolor{red}{2}$ e $\textcolor{red}{5}$ e la differenza di $\textcolor{red}{5}$ e $\textcolor{red}{2}$ mi dà $\textcolor{red}{3}$ ed essendo $\textcolor{red}{3}$ positivo dovrò fare $\textcolor{red}{+5-2}$.
> 
> i due numeri cercati sono $\textcolor{red}{-2}$ e $\textcolor{red}{+5}$ quindi:
> 
> $$
> \textcolor{red}{x^2+3x-10=(x-2)(x+5)}
> $$