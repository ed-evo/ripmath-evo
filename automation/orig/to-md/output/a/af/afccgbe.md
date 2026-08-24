# [esercizio]{.text-red}

risolvere la seguente equazione:

$$
\textcolor{red}{\frac{3}{x^2 - 3x + 2} - \frac{x - 2}{x - 1} + \frac{1}{2 - x} = 0}
$$

scomponiamo il primo denominatore ([trinomio notevole](../ad/ad6e.html)):

$$
\textcolor{blue}{\frac{3}{(x - 1)(x - 2)} - \frac{x - 2}{x - 1} + \frac{1}{2 - x} = 0}
$$

Notiamo ora che al primo denominatore abbiamo $x - 2$ mentre al terzo abbiamo $2 - x$, cioè lo stesso con il segno cambiato, quindi conviene cambiare il terzo termine di segno per avere denominatori uguali (moltiplico sopra e sotto per $-1$, sopra metto il meno davanti alla frazione, sotto ottengo $-2 + x$, cioè ordinando $x - 2$):

$$
\textcolor{blue}{\frac{3}{(x - 1)(x - 2)} - \frac{x - 2}{x - 1} - \frac{1}{x - 2} = 0}
$$

È un' [equazione fratta](afbg.html), quindi prima di risolverla dobbiamo porre le condizioni di realtà: ogni termine al denominatore che contenga la $x$ va posto diverso da zero.

> **[C.R.]{.text-red}**
>
> $$
> \textcolor{red}{x - 1 \neq 0 \quad \text{ovvero} \quad x \neq 1}
> $$
>
> $$
> \textcolor{red}{x - 2 \neq 0 \quad \text{ovvero} \quad x \neq 2}
> $$

Cioè se troveremo come soluzione $x = 1$ o $x = 2$ diremo che l'equazione è impossibile.
Ora possiamo fare il minimo comune multiplo e poi semplificarlo:

$$
\textcolor{blue}{\text{m.c.m.} = (x - 1)(x - 2)}
$$

$$
\textcolor{blue}{\frac{3 - (x - 2)^2 - (x - 1)}{(x - 1)(x - 2)} = \frac{0}{(x - 1)(x - 2)}}
$$

Elimino i denominatori.

> **Nota:** Devo moltiplicare da entrambe le parti per $(x - 1)(x - 2)$; posso farlo perché so che ogni termine è diverso da zero.

$$
\textcolor{blue}{3 - (x - 2)^2 - (x - 1) = 0}
$$

eseguo i calcoli, prima il quadrato:

$$
\textcolor{blue}{3 - (x^2 - 4x + 4) - (x - 1) = 0}
$$

ora faccio cadere le parentesi:

$$
\textcolor{blue}{3 - x^2 + 4x - 4 - x + 1 = 0}
$$

sommo i termini simili:

$$
\textcolor{blue}{-x^2 + 3x = 0}
$$

raccolgo a fattor comune $-x$:

$$
\textcolor{blue}{-x(x - 3) = 0}
$$

per la legge dell'annullamento del prodotto la mia equazione equivale alle due equazioni:

$$
\textcolor{blue}{-x = 0}
$$

$$
\textcolor{blue}{x - 3 = 0}
$$

- Risolvo la prima:
  $$
  \textcolor{blue}{-x = 0}
  $$
  cambio di segno (moltiplico per $-1$) ed ottengo
  $$
  \textcolor{blue}{x = 0}
  $$
- Risolvo la seconda:
  $$
  \textcolor{blue}{x - 3 = 0}
  $$
  porto $-3$ dopo l'uguale cambiandolo di segno
  $$
  \textcolor{blue}{x = 3}
  $$
  Controllo le condizioni di realtà, va tutto bene.

Ho quindi le due soluzioni:

$$
\textcolor{red}{x_1 = 0 \quad x_2 = 3}
$$