Calcolare il valore dell'integrale

$$
\int x \sin x \, dx =
$$

Considero $$\sin x$$ come funzione di cui trovare l'integrale ed $$x$$ come funzione di cui trovare la derivata cioè dalla formula:

$$
\textcolor{red}{\int f \cdot g = f \cdot \int g - \int \left( f' \cdot \int g \right)}
$$

pongo
$$\textcolor{red}{f} = \textcolor{blue}{x}$$
$$\textcolor{red}{g} = \textcolor{blue}{\sin x}$$

quindi ottengo

$$
\textcolor{blue}{= x \cdot \int \sin x \, dx - \int \left( 1 \cdot \int \sin x \, dx \right) \, dx =}
$$

$$
\textcolor{blue}{= x \cdot (-\cos x) - \int -\cos x \, dx =}
$$

$$
\textcolor{blue}{= -x \cos x + \int \cos x \, dx =}
$$

$$
\textcolor{blue}{= -x \cos x + \sin x + c}
$$