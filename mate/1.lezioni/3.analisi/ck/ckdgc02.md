Calcolare il valore dell'integrale

$$
\int x^2 e^x dx =
$$

Considero $$e^x$$ come funzione di cui trovare l'integrale ed $$x^2$$ come funzione di cui trovare la derivata (perché derivando si abbasserà di grado), cioè dalla formula:

$$
\textcolor{red}{\int f \cdot g = f \cdot \int g - \int (f' \cdot \int g)}
$$

pongo
[$$\textcolor{red}{f}$$] = [$$x^2$$]{.text-blue}
[$$\textcolor{red}{g}$$] = [$$e^x$$]{.text-blue}

quindi ottengo

$$
\textcolor{blue}{= x^2 \cdot \int e^x dx - \int (2x \cdot \int e^x dx) dx =}
$$

$$
\textcolor{blue}{= x^2 \cdot e^x - 2 \int x e^x dx =}
$$

Integro per parti il secondo integrale ponendo
[$$\textcolor{red}{f}$$] = [$$x$$]{.text-blue}
[$$\textcolor{red}{g}$$] = [$$e^x$$]{.text-blue}

$$
\textcolor{blue}{= x^2 e^x - 2 [ x \cdot \int e^x dx - \int (1 \cdot \int e^x dx) dx ] =}
$$

$$
\textcolor{blue}{= x^2 e^x - 2 (x \cdot e^x - \int e^x dx) =}
$$

$$
\textcolor{blue}{= x^2 e^x - 2 (x \cdot e^x - e^x) =}
$$

$$
\textcolor{blue}{= x^2 e^x - 2xe^x + 2e^x + c =}
$$

Raccogliendo $$e^x$$

$$
\textcolor{blue}{= e^x (x^2 - 2x + 2) + c =}
$$