$$
\textcolor{red}{y = \tan x \rightarrow y' = \frac{1}{\cos^2 x}}
$$

[dimostrazione]{.text-red}

> Devo trovare la derivata di $y = \tan x$.
>
> Trasformo la tangente nella forma
>
> $$
> \tan x = \frac{\sin x}{\cos x}
> $$
>
> Faccio il limite del rapporto incrementale:
>
> $$
> \lim_{h \to 0} \frac{\frac{\sin(x + h)}{\cos(x + h)} - \frac{\sin x}{\cos x}}{h} =
> $$
>
> Anche qui utilizzeremo il primo limite notevole; intanto facciamo il minimo comune multiplo:
>
> $$
> = \lim_{h \to 0} \frac{\frac{\sin(x + h)\cos x - \cos(x + h)\sin x}{\cos(x + h)\cos x}}{h} =
> $$
>
> Al numeratore ho la formula del seno della differenza fra due angoli $(x+h)$ e $x$:
>
> $$
> \sin[(x + h) - x] = \sin(x + h)\cos x - \cos(x + h)\sin x
> $$
>
> Applico la forma in senso inverso e ottengo:
>
> $$
> = \lim_{h \to 0} \frac{\frac{\sin[(x + h) - x]}{\cos(x + h)\cos x}}{h} =
> $$
>
> Calcolo entro la parentesi e moltiplico la frazione superiore per l'inversa di quella inferiore:
>
> $$
> = \lim_{h \to 0} \frac{\sin h}{\cos(x + h)\cos x} \cdot \frac{1}{h} =
> $$
>
> Separo i limiti:
>
> $$
> = \lim_{h \to 0} \frac{1}{\cos(x + h)\cos x} \cdot \frac{\sin h}{h} =
> $$
>
> Per il limite fondamentale so che:
>
> $$
> \lim_{h \to 0} \frac{\sin h}{h} = 1
> $$
>
> Quindi mi resta da fare:
>
> $$
> = \lim_{h \to 0} \frac{1}{\cos(x + h)\cos x} =
> $$
>
> Passando al limite per $h \to 0$ ottengo:
>
> $$
> = \frac{1}{\cos x \cos x} = \frac{1}{\cos^2 x}
> $$
>
> Per ricavare l'altra formula basta un po' di trigonometria:
>
> $$
> \frac{1}{\cos^2 x} =
> $$
>
> Uso la prima relazione fondamentale $1 = \sin^2 x + \cos^2 x$:
>
> $$
> = \frac{\sin^2 x + \cos^2 x}{\cos^2 x} =
> $$
>
> Spezzo la frazione:
>
> $$
> = \frac{\sin^2 x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} =
> $$
>
> So per la seconda relazione fondamentale che $\frac{\sin x}{\cos x} = \tan x$, quindi scrivo:
>
> $$
> = \tan^2 x + 1
> $$
>
> Come volevamo.