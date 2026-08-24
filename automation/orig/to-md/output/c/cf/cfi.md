# [Relazioni fra continuità e derivabilità]{.text-red}

C'è da dire subito che una funzione continua non è sempre derivabile, infatti se ho un punto con un angolo (punto angoloso) non ho la derivata perché la derivata destra è diversa dalla derivata sinistra; inoltre posso pensare curve che non hanno nessun punto derivabile: la curva di Peano, la curva di von Koch.

### Curva di Peano

Per costruire la curva di Peano su un quadrato dividilo in $4$ parti e considera i centri dei sottoquadrati, congiungili con dei segmenti (prima figura); dividi poi ognuno dei sottoquadrati in $4$ sotto-sottoquadrati e congiungili come vedi nella seconda figura. Continuando il procedimento riempirai tutto il quadrato con una curva che non sarà derivabile in nessun punto.

### Curva di von Koch

Prendi un segmento, dividilo in tre parti uguali e su quella in mezzo, al posto del segmento, prendi due lati di un triangolo equilatero; ripeti il procedimento su ognuno dei $4$ segmenti così ottenuti. Procedendo all'infinito, la curva che si ottiene non ha nessun punto derivabile.

Dimostriamo, a completamento della pagina, che se una funzione è derivabile allora è anche continua.

Ho per ipotesi che esiste la derivata finita $f'(x_0)$.
Devo dimostrare che allora la funzione è continua (tesi).

La definizione di continuità è che:

$$
\textcolor{red}{\lim_{x \to x_0} f(x) = f(x_0)}
$$

o anche:

$$
\textcolor{red}{\lim_{h \to 0} f(x_0+h) = f(x_0)}
$$

cioè:

$$
\textcolor{red}{\lim_{h \to 0} (f(x_0+h) - f(x_0)) = 0}
$$

> **Dimostrazione**
>
> Parto dall'espressione:
>
> $$
> \textcolor{red}{\lim_{h \to 0} (f(x_0+h) - f(x_0))}
> $$
>
> Devo dimostrare che vale zero. Moltiplico sopra e sotto per $h$:
>
> $$
> \textcolor{red}{\lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h} \cdot h}
> $$
>
> La prima parte del prodotto è la derivata:
>
> $$
> \textcolor{red}{= f'(x_0) \cdot \lim_{h \to 0} h = f'(x_0) \cdot 0 = 0}
> $$
>
> Come volevamo dimostrare.