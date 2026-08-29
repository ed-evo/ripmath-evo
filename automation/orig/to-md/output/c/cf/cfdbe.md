# [$\textcolor{red}{y = \sin x \to y' = \cos x}$]{.text-red}

> [**Dimostrazione**]{.text-red}
> 
> Devo trovare la derivata di $y = \sin x$.
> 
> Faccio il limite del rapporto incrementale:
> 
> $$
> \lim_{h \to 0} \frac{\sin(x + h) - \sin x}{h} =
> $$
> 
> Ci rifacciamo al primo [limite notevole](../cd/cdfa.html); per questo utilizziamo la [seconda formula di prostaferesi](../../i/ic/icaeb.html) (quella della differenza dei seni):
> 
> $$
> = \lim_{h \to 0} \frac{2 \cos\left(\frac{x + h + x}{2}\right) \sin\left(\frac{x + h - x}{2}\right)}{h} =
> $$
> 
> Sposto il $2$ iniziale al denominatore e calcolo entro parentesi:
> 
> $$
> = \lim_{h \to 0} \frac{\cos\left(\frac{2x + h}{2}\right) \sin\left(\frac{h}{2}\right)}{\frac{h}{2}} =
> $$
> 
> $$
> = \lim_{h \to 0} \frac{\cos\left(x + \frac{h}{2}\right) \sin\left(\frac{h}{2}\right)}{\frac{h}{2}} =
> $$
> 
> Per il limite fondamentale so che:
> 
> $$
> \lim_{h \to 0} \frac{\sin\left(\frac{h}{2}\right)}{\frac{h}{2}} = 1
> $$
> 
> Quindi mi resta da fare:
> 
> $$
> = \lim_{h \to 0} \cos\left(x + \frac{h}{2}\right) =
> $$
> 
> Passando al limite per $h \to 0$ anche $\frac{h}{2} \to 0$, quindi ottengo:
> 
> $$
> = \cos x
> $$