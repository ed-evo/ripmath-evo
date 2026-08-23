Calcolare il valore dell'integrale

$$
\int \log x \, dx =
$$

Poiché qui c'è una funzione sola, per avere due funzioni possiamo pensare di avere

$$
\int 1 \cdot \log x \, dx =
$$

Considero $$1$$ come funzione di cui trovare l'integrale e $$\log x$$ come funzione di cui trovare la derivata, cioè dalla formula:

[$$
\int f \cdot g = f \cdot \int g - \int \left( f' \cdot \int g \right)
$$]{.text-red}

pongo
[$$f = \textcolor{blue}{\log x}$$]{.text-red}
[$$g = \textcolor{blue}{1}$$]{.text-red}

quindi ottengo

[$$
= \log x \cdot \int 1 \, dx - \int \left( \frac{1}{x} \cdot \int 1 \, dx \right) dx =
$$]{.text-blue}

[$$
= \log x \cdot x - \int \frac{1}{x} \cdot x \, dx =
$$]{.text-blue}

[$$
= \log x \cdot x - \int 1 \, dx =
$$]{.text-blue}

[$$
= x \log x - x + c =
$$]{.text-blue}

Raccogliendo $$x$$

[$$
= x(\log x - 1) + c
$$]{.text-blue}

E questo è un integrale che sarebbe bene aggiungere alla tabella degli integrali immediati