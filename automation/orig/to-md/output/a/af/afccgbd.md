# [esercizio]{.text-red}

risolvere la seguente equazione:

$$
\textcolor{red}{\frac{x^2 - x + 1}{x - 1} - \frac{x^2 + x + 1}{x + 1} = \frac{3x}{x + 1} + \frac{2}{x^2 - 1}}
$$

Prima scomponiamo l'ultimo denominatore

$$
\textcolor{blue}{\frac{x^2 - x + 1}{x - 1} - \frac{x^2 + x + 1}{x + 1} = \frac{3x}{x + 1} + \frac{2}{(x+1)(x-1)}}
$$

È un' equazione fratta quindi prima di risolverla dobbiamo porre le condizioni di realtà cioè supporre che i denominatori siano diversi da zero

### [C.R.]{.text-red}

$$
\textcolor{red}{x - 1 \neq 0 \implies x \neq 1}
$$

$$
\textcolor{red}{x + 1 \neq 0 \implies x \neq -1}
$$

Cioè se troveremo come soluzione $$x = 1$$ o $$x = -1$$ diremo che l'equazione è impossibile.
Ora possiamo fare il minimo comune multiplo e poi semplificarlo:

$$
\textcolor{blue}{m.c.m. = (x+1)(x-1)}
$$

$$
\textcolor{blue}{\frac{(x+1)(x^2 - x + 1) - (x-1)(x^2 + x + 1)}{(x-1)(x+1)} = \frac{3x(x - 1) + 2}{(x-1)(x+1)}}
$$

Elimino i denominatori

> Devo moltiplicare da entrambe le parti per $$(x-1)(x+1)$$; posso farlo perché nelle condizioni di realtà ho posto che i fattori sono diversi da zero

$$
\textcolor{blue}{(x+1)(x^2 - x + 1) - (x-1)(x^2 + x + 1) = 3x(x - 1) + 2}
$$

eseguo i calcoli, da notare che prima dell'uguale ottengo delle somme e differenze di cubi

$$
\textcolor{blue}{x^3 + 1 - (x^3 - 1) = 3x^2 - 3x + 2}
$$

faccio cadere le parentesi

$$
\textcolor{blue}{x^3 + 1 - x^3 + 1 = 3x^2 - 3x + 2}
$$

conviene portare tutto prima dell'uguale

$$
\textcolor{blue}{x^3 + 1 - x^3 + 1 - 3x^2 + 3x - 2 = 0}
$$

sommo i termini simili

$$
\textcolor{blue}{-3x^2 + 3x = 0}
$$

raccolgo a fattor comune $$-3x$$

$$
\textcolor{blue}{-3x(x - 1) = 0}
$$

per la legge dell'annullamento del prodotto la mia equazione equivale alle due equazioni:

$$
\textcolor{blue}{-3x = 0}
$$
$$
\textcolor{blue}{x - 1 = 0}
$$

- Risolvo la prima:
  $$
  \textcolor{blue}{-3x = 0}
  $$
  divido per $$-3$$ da entrambe le parti dell'uguale ed ottengo
  $$
  \textcolor{blue}{x = 0}
  $$
- Risolvo la seconda:
  $$
  \textcolor{blue}{x - 1 = 0}
  $$
  porto $$-1$$ dopo l'uguale cambiandolo di segno
  $$
  \textcolor{blue}{x = 1}
  $$
  Però per le condizioni di realtà questo valore non può essere accettato (altrimenti, per togliere i denominatori, avrei moltiplicato per zero entrambi i membri dell'equazione contro il secondo principio di equivalenza).

Ho quindi una sola soluzione accettabile

$$
\textcolor{red}{x_1 = 0 \text{ accettabile}} \quad \textcolor{red}{x_2 = 1 \text{ non accettabile}}
$$