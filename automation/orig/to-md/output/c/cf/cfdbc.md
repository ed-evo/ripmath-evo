## [$\textcolor{red}{y = x^n \to y' = nx^{n-1}}$]{.text-red}
[dimostrazione]{.text-red}

> Devo trovare la derivata di $y = x^n$.
>
> Faccio il limite del rapporto incrementale:
>
> $$
> \lim_{h \to 0} \frac{(x + h)^n - x^n}{h} =
> $$
>
> Sviluppo la [potenza del binomio](../../l/lb/lbdc.html) $(x + h)^n$:
>
> $$
> \lim_{h \to 0} \frac{x^n + nx^{n-1}h + n(n-1)x^{n-2}h^2 + n(n-1)(n-2)x^{n-3}h^3 + \dots + n!h^n - x^n}{h} =
> $$
>
> Elimino la $x^n$ iniziale con quella finale:
>
> $$
> \lim_{h \to 0} \frac{nx^{n-1}h + n(n-1)x^{n-2}h^2 + n(n-1)(n-2)x^{n-3}h^3 + \dots + n!h^n}{h} =
> $$
>
> Divido per $h$ ogni termine sopra la linea di frazione semplificandolo col denominatore:
>
> $$
> \lim_{h \to 0} (nx^{n-1} + n(n-1)x^{n-2}h + n(n-1)(n-2)x^{n-3}h^2 + \dots + n!h^{n-1}) =
> $$
>
> Tutti i termini (eccetto il primo che non ha $h$) sono moltiplicati per $h$ che, al limite, vale zero, quindi valgono tutti zero ed ottengo:
>
> $$
> = nx^{n-1}
> $$