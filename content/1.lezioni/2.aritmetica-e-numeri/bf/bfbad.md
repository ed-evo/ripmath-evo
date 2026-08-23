Dimostriamo che la relazione in $$\mathbb{Z} \times \mathbb{Z}$$ tale che

$$
\textcolor{red}{(a,b) \text{ Rel } (c,d) \text{ se } a \cdot d = c \cdot b}
$$

è una relazione di equivalenza. Devo dimostrare che è:

I. Riflessiva
II. Simmetrica
III. Transitiva

> **I. È riflessiva:** infatti
> $$\textcolor{red}{(a,b)} \text{ Rel } \textcolor{blue}{(a,b)}$$
> è sempre vera perché
> $$
> \textcolor{red}{a} \cdot \textcolor{blue}{b} = \textcolor{blue}{a} \cdot \textcolor{red}{b}
> $$

> **II. È simmetrica:** devo dimostrare che
> $$\textcolor{red}{(a,b) \text{ Rel } (c,d)} \implies \textcolor{red}{(c,d) \text{ Rel } (a,b)}$$
> si ha
> $$
> \textcolor{red}{a \cdot d = c \cdot b}
> $$
> per la proprietà simmetrica dell'uguaglianza ho
> $$
> \textcolor{red}{c \cdot b = a \cdot d}
> $$
> quindi vale
> $$\textcolor{red}{(c,d) \text{ Rel } (a,b)}$$
> come volevamo

> **III. Mostriamo che è transitiva:** devo mostrare che da
> $$\textcolor{red}{(a,b) \text{ Rel } (c,d)} \text{ e } \textcolor{red}{(c,d) \text{ Rel } (e,f)} \implies \textcolor{red}{(a,b) \text{ Rel } (e,f)}$$
> Abbiamo, per le due relazioni:
> $$
> \textcolor{red}{a \cdot d = c \cdot b}
> $$
> $$
> \textcolor{red}{c \cdot f = e \cdot d}
> $$
> Moltiplichiamo in verticale; otteniamo
> $$
> \textcolor{red}{a \cdot d \cdot c \cdot f = c \cdot b \cdot e \cdot d}
> $$
> Utilizzando la regola di cancellazione togliamo i termini uguali da parti opposte dell'uguale ed otteniamo
> $$
> \textcolor{red}{a \cdot f = b \cdot e}
> $$
> e per la proprietà simmetrica della moltiplicazione posso scrivere
> $$
> \textcolor{red}{a \cdot f = e \cdot b}
> $$
> quindi vale
> $$\textcolor{red}{(a,b) \text{ Rel } (e,f)}$$
> come volevamo