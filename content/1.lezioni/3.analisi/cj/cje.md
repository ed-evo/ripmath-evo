# Formula di Taylor

Abbiamo trovato la formula (fino alla derivata quarta)

$$
\textcolor{red}{f(x) = f(a) + \frac{(x-a)}{1}f'(a) + \frac{(x-a)^2}{1 \cdot 2}f''(a) + \frac{(x-a)^3}{1 \cdot 2 \cdot 3}f'''(a) + \frac{(x-a)^4}{1 \cdot 2 \cdot 3 \cdot 4}f^{IV}(c) + \dots}
$$

estendiamola alla derivata $$n$$ ma prima usiamo la [notazione fattoriale](../../l/lb/lbab.html)

***

indichiamo con [!]{.text-red} il fattoriale di un numero cioè il prodotto di quel numero per tutti i suoi antecedenti

così ad esempio

$$
\textcolor{red}{6! = 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}
$$

$$
\textcolor{red}{9! = 9 \cdot 8 \cdot 7 \cdot 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}
$$

$$
\textcolor{red}{n! = n \cdot (n-1) \cdot (n-2) \cdot \dots \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1}
$$

***

## Formula di Taylor

$$
\textcolor{red}{f(x) = f(a) + \frac{(x-a)}{1!}f'(a) + \frac{(x-a)^2}{2!}f''(a) + \frac{(x-a)^3}{3!}f'''(a) + \dots + \frac{(x-a)^n}{n!}f^n(a) + \frac{(x-a)^{n+1}}{(n+1)!}f^{n+1}(c)}
$$

***

> L'ultimo termine della formula è il resto secondo Lagrange della formula ed è un [infinitesimo di ordine superiore](cjea.html) rispetto agli altri termini.
>
> Si può anche considerare un'altra forma per il resto ([resto secondo Peano](cjeb.html)).