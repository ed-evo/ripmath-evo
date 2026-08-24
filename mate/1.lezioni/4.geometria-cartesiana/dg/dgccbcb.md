# Metodo semplice per determinare le condizioni

Se abbiamo le coordinate del vertice
$$\textcolor{blue}{V = (x_0, y_0)}$$
della generica parabola
$$\textcolor{blue}{y = ax^2 + bx + c}$$
sapendo che tale parabola ha vertice

$$
\textcolor{blue}{V = \left( -\frac{b}{2a}, -\frac{b^2 - 4ac}{4a} \right)}
$$

- allora, come prima, scriviamo la prima condizione eguagliando le coordinate $$x$$ del vertice
$$
\textcolor{blue}{x_0 = -\frac{b}{2a}}
$$
- per la seconda condizione, invece di eguagliare le coordinate facciamo la condizione di passaggio per un punto (vertice)
$$\textcolor{blue}{y_0 = ax_0^2 + bx_0 + c}$$

***

Vediamo un esempio:
Calcolare le condizioni per cui la parabola
$$\textcolor{red}{y = ax^2 + bx + c}$$
ha il vertice nel punto $$\textcolor{red}{V(2, 3)}$$

- prima condizione
$$
\textcolor{blue}{2 = -\frac{b}{2a}}
$$
moltiplico tutto per $$2a$$ (cioè faccio il m.c.m. e semplifico)
$$\textcolor{blue}{4a = -b}$$
$$\textcolor{red}{4a + b = 0}$$

- seconda condizione
$$\textcolor{blue}{3 = a \cdot (2)^2 + b \cdot (2) + c}$$
$$\textcolor{blue}{3 = 4a + 2b + c}$$
$$\textcolor{red}{4a + 2b + c - 3 = 0}$$

> **Attenzione:** una volta usata una condizione non si può riusare, cioè se per il vertice segui questo metodo non puoi usare come ulteriore condizione quella della seconda coordinata, perché essa è contenuta nel passaggio per il vertice: se facessi il sistema con le tre condizioni
> - uguaglianza prima coordinata
> - uguaglianza seconda coordinata
> - passaggio per il vertice
>
> otterrei un sistema [indeterminato](../../a/ai/aibabc.html)
> viceversa se ottieni ad un certo punto $$0 = 0$$ vuol dire che hai usato due volte la stessa condizione