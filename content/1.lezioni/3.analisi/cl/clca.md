# Equazioni differenziali ordinarie del primo ordine a variabili separabili

Diremo che un'equazione differenziale è a variabili separabili se possiamo separare le $$x$$ e le $$y$$ mettendo tutti i termini con le $$x$$ prima dell'uguale e quelli con le $$y$$ dopo l'uguale (o viceversa).

***

Esempio: risolvere l'equazione differenziale
[$$y = 2 y'$$]{.text-blue}

scriviamola come
$$
y = \frac{2dy}{dx}
$$

separiamo le variabili: otteniamo
$$
dx = \frac{2}{y} dy
$$

ora integriamo da entrambe le parti (metteremo sempre la costante come ultimo termine dopo l'uguale)
$$
\int dx = 2 \int \frac{dy}{y}
$$

sono tutti integrali immediati ed otteniamo
[$$x = 2 \log y + k$$]{.text-blue}

> **Nota:** Al solito per $$\log y$$ si intende il logaritmo naturale di $$y$$.

Esplicito rispetto alla $$y$$
[$$\log y = \frac{x}{2} - \frac{k}{2}$$]{.text-blue}

applico l'esponenziale
[$$e^{\log y} = e^{x/2 - k/2}$$]{.text-blue}

semplifico
[$$y = e^{x/2 - k/2}$$]{.text-blue}

Per le proprietà delle potenze posso scrivere
[$$y = e^{x/2} \cdot e^{-k/2}$$]{.text-blue}

Quindi, ponendo $$e^{-k/2} = c$$ l'integrale generale è
[$$y = c e^{x/2}$$]{.text-red}

***

Vediamo un altro esempio: risolvere l'equazione differenziale
[$$xy' = y$$]{.text-blue}

scriviamola come
$$
x \frac{dy}{dx} = y
$$

separiamo le variabili: otteniamo
$$
\frac{dy}{y} = \frac{dx}{x}
$$

ora integriamo da entrambe le parti
$$
\int \frac{dy}{y} = \int \frac{dx}{x}
$$

sono tutti integrali immediati ed otteniamo
[$$\log y = \log x + c$$]{.text-blue}

> **Nota:** Al solito per $$\log$$ si intende il logaritmo naturale.

Metto la costante in forma di logaritmo $$c = \log k$$ per poter poi togliere i logaritmi (vedi logaritmo di un prodotto)
[$$\log y = \log x + \log k$$]{.text-blue}
[$$\log y = \log kx$$]{.text-blue}

quindi l'integrale generale è
[$$y = kx$$]{.text-red}
con $$k$$ costante.