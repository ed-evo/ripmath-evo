# [Integrazione per ricorrenza]{.text-red}

Gli integrali per ricorrenza sono abbastanza "strani": devi integrare finché lo stesso integrale non compare dall'altra parte ma con segno cambiato: uguagliando il primo e l'ultimo termine puoi ricavarne il valore; Vediamo il metodo su di un esempio

calcolare

$$
\textcolor{red}{\int \sin^2 x \, dx}
$$

Posso calcolarlo per parti pensandolo come

$$
\textcolor{red}{\int (\sin x) \cdot (\sin x) \, dx}
$$

Si tratta di un prodotto di funzioni: e della funzione $$\sin x$$ conosco bene sia la derivata che l'integrale. Quindi pongo

$$
\begin{aligned}
\textcolor{red}{f(x)} &= \textcolor{red}{\sin x} \\
\textcolor{red}{g(x)} &= \textcolor{red}{\sin x}
\end{aligned}
$$

Applicando la formula e ricordando che la derivata di $$\sin x$$ è $$\cos x$$:

$$
\textcolor{red}{\int (\sin x) \cdot (\sin x) \, dx = \sin x \int \sin x \, dx - \int \left( \cos x \int \sin x \, dx \right) dx}
$$

ricordando che l'integrale di $$\sin x$$ è $$-\cos x$$ avrò

$$
\textcolor{red}{= \sin x (-\cos x) - \int [(\cos x)(-\cos x)] \, dx}
$$

Calcolando:

$$
\textcolor{red}{= -\sin x \cos x + \int \cos^2 x \, dx}
$$

ora ricordando che $$\cos^2 x = 1 - \sin^2 x$$
[prima relazione fondamentale della trigonometria](../../i/ib/ibca.html)

$$
\textcolor{red}{= -\sin x \cos x + \int (1 - \sin^2 x) \, dx}
$$

trasformiamo in una somma di integrali

$$
\textcolor{red}{= -\sin x \cos x + \int 1 \, dx - \int \sin^2 x \, dx}
$$

cioè

$$
\textcolor{red}{= -\sin x \cos x + x - \int \sin^2 x \, dx}
$$

Ora se scrivo il primo e l'ultimo passaggio ottengo

$$
\textcolor{blue}{\int \sin^2 x \, dx} \textcolor{red}{= -\sin x \cos x + x} \textcolor{blue}{- \int \sin^2 x \, dx}
$$

è un'equazione di incognita $$\int \sin^2 x \, dx$$ la ricavo:

$$
\textcolor{red}{2} \textcolor{blue}{\int \sin^2 x \, dx} \textcolor{red}{= x - \sin x \cos x}
$$

dividendo per 2 ottengo il risultato finale

$$
\textcolor{blue}{\int \sin^2 x \, dx} = \frac{\textcolor{red}{x - \sin x \cos x}}{\textcolor{red}{2}} \textcolor{red}{+ c}
$$