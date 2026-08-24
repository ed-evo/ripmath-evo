# Calcolare il valore dell'integrale

$$
\textcolor{blue}{\int x \arctan x \, dx =}
$$

Questa volta c'è poco da scegliere: di $\arctan x$ conosco solo la derivata e non l'integrale, quindi considero $x$ come funzione di cui trovare l'integrale e $\arctan x$ come funzione di cui trovare la derivata, cioè dalla formula:

$$
\textcolor{red}{\int f \cdot g = f \cdot \int g - \int \left( f' \cdot \int g \right)}
$$

Pongo
$$
\textcolor{red}{f = \textcolor{blue}{\arctan x}}
$$
$$
\textcolor{red}{g = \textcolor{blue}{x}}
$$

Quindi ottengo

$$
\textcolor{blue}{= \arctan x \cdot \int x \, dx - \int \left( \frac{1}{1+x^2} \cdot \int x \, dx \right) dx}
$$

$$
\textcolor{blue}{= \arctan x \cdot \frac{x^2}{2} - \int \frac{1}{1+x^2} \cdot \frac{x^2}{2} \, dx}
$$

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} \int \frac{x^2}{1+x^2} \, dx}
$$

Nel secondo integrale aggiungo e tolgo $1$ al numeratore [Integrali per scomposizione](ckdea.html)

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} \int \frac{x^2 + 1 - 1}{1 + x^2} \, dx}
$$

Spezzo l'integrale in due

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} \left( \int \frac{x^2+1}{1+x^2} \, dx - \int \frac{1}{1+x^2} \, dx \right)}
$$

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} \left( \int 1 \, dx - \int \frac{1}{1+x^2} \, dx \right)}
$$

Ora so fare entrambi gli integrali (sono immediati)

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} (x - \arctan x)}
$$

$$
\textcolor{blue}{= \frac{x^2}{2} \arctan x - \frac{1}{2} x + \frac{1}{2} \arctan x + c}
$$