# Definizione di derivata

Dobbiamo vedere come varia la $$y$$ quando la $$x$$ varia in modo regolare: intuitivamente il sistema più semplice è quello di considerare un intervallo sulla $$y$$ ed il corrispondente intervallo sulle $$x$$ e farne il rapporto: questo mi darà la variazione media. Se voglio la variazione in un punto dovrò restringere gli intervalli fino a quel punto.

Matematicamente: considero sull'asse $$x$$ i punti $$\textcolor{red}{x_0}$$ e $$\textcolor{red}{x_0+h}$$, in loro corrispondenza avrò i punti $$\textcolor{red}{f(x_0)}$$ ed $$\textcolor{red}{f(x_0+h)}$$ sull'asse $$y$$.

La distanza tra $$\textcolor{red}{f(x_0)}$$ ed $$\textcolor{red}{f(x_0+h)}$$ sull'asse $$y$$ (in verticale) sarà:

$$
\textcolor{red}{f(x_0+h) - f(x_0)}
$$

mentre la distanza tra $$\textcolor{red}{x_0+h}$$ ed $$\textcolor{red}{x_0}$$ sull'asse $$x$$ sarà:

$$
\textcolor{red}{x_0+h - x_0 = h}
$$

chiamiamo [rapporto incrementale]{.text-red} il rapporto tra la distanza sull'asse $$y$$ e la distanza sull'asse $$x$$:

$$
\textcolor{red}{\frac{f(x_0+h) - f(x_0)}{h} = \text{rapporto incrementale}}
$$

Ora per ottenere la derivata nel punto $$\textcolor{red}{x_0}$$ basterà far stringere l'intervallo facendo diminuire $$\textcolor{red}{h}$$:

$$
\textcolor{red}{\lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h} = f'(x_0)}
$$

> [**Definizione:** si definisce derivata di una funzione in un punto il limite (se esiste ed è finito) del rapporto incrementale al tendere a zero dell'incremento $$h$$]{.text-purple}
>
> [Per avere la derivata generica basterà considerare il punto come $$x$$, cioè non fisso ma generico sull'asse delle $$x$$]{.text-purple}