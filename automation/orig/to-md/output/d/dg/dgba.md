# [Equazione della parabola con vertice nell'origine ed asse verticale]{.text-red}

Applichiamo la definizione considerando il Fuoco sull'asse $y$ e la direttrice come retta orizzontale da banda opposta dell'origine rispetto al fuoco ed avente dall'origine la stessa distanza del fuoco

[$\text{PF} = \text{PH}$]{.text-blue}

Ora dobbiamo decidere quanto vale la distanza dall'origine del fuoco e della direttrice

> Abbiamo il solito problema: se mettiamo semplice la costante avremo poi un'equazione complicata, mentre conviene porre la costante in un certo modo in maniera che poi l'equazione resti semplice. Negli anni '60 si preferiva procedere così.

Per avere il risultato semplice poniamo

$$
\textcolor{red}{F = \left( 0, \frac{1}{4a} \right)}
$$

Quindi la direttrice avrà equazione

$$
\textcolor{red}{y = -\frac{1}{4a}}
$$

Siccome devo porre $\text{PF} = \text{PH}$ ricaviamo $\text{PF}$ e $\text{PH}$. Per ricavare $\text{PF}$ uso la formula della distanza fra due punti

$$
\textcolor{red}{P = (x, y), \quad F = \left( 0, \frac{1}{4a} \right)}
$$

$$
\textcolor{red}{\text{PF} = \sqrt{(x - 0)^2 + \left( y - \frac{1}{4a} \right)^2}}
$$

Per trovare $\text{PH}$ mi servono le coordinate di $H$. Osservando la figura vedo che la $x$ di $H$ è uguale a quella di $P$ mentre la $y$ si trova sulla direttrice quindi vale $-1/4a$

$$
\textcolor{red}{P = (x, y), \quad H = \left( x, -\frac{1}{4a} \right)}
$$

Anche qui applico la distanza fra due punti

> Potevo fare anche la distanza punto retta, oppure osservare che il segmento è verticale quindi si può ottenere come differenza fra le coordinate $y$.

$$
\textcolor{red}{\text{PH} = \sqrt{(x - x)^2 + \left( y + \frac{1}{4a} \right)^2}}
$$

$(x - x)$ vale zero e sparisce: posso semplificare il quadrato con la radice: ottengo

> Per fare prima posso uguagliare le radici e poi eliminarle prima e dopo l'uguale e quindi saltare un paio di passaggi.

$$
\textcolor{red}{\text{PH} = y + \frac{1}{4a}}
$$

Imposto l'uguaglianza $\text{PF} = \text{PH}$

$$
\textcolor{red}{\sqrt{(x - 0)^2 + \left( y - \frac{1}{4a} \right)^2} = y + \frac{1}{4a}}
$$

Per togliere la radice elevo al quadrato prima e dopo l'uguale, così la radice si elimina con il quadrato

$$
\textcolor{red}{x^2 + \left( y - \frac{1}{4a} \right)^2 = \left( y + \frac{1}{4a} \right)^2}
$$

Eseguo i quadrati

$$
\textcolor{red}{x^2 + y^2 - \frac{y}{2a} + \frac{1}{16a^2} = y^2 + \frac{y}{2a} + \frac{1}{16a^2}}
$$

Elimino i termini uguali da parti opposte dell'uguale

$$
\textcolor{red}{x^2 - \frac{y}{2a} = \frac{y}{2a}}
$$

Faccio il minimo comune multiplo $2a$

$$
\textcolor{red}{\frac{2ax^2 - y}{2a} = \frac{y}{2a}}
$$

Elimino i denominatori

$$
\textcolor{red}{2ax^2 - y = y}
$$

$$
\textcolor{red}{2ax^2 = y + y}
$$

$$
\textcolor{red}{2ax^2 = 2y}
$$

$$
\textcolor{red}{2y = 2ax^2}
$$

> Ho usato la proprietà simmetrica.

E, dividendo per $2$, ottengo la formula finale

$$
\textcolor{blue}{y = ax^2}
$$