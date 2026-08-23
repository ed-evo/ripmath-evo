# [esercizio]{.text-red-darken-1}

Discutere la seguente equazione
$$\textcolor{red}{a^2x + b = ab + x}$$

Devo lasciare i termini con la $$x$$ prima dell'uguale e quelli senza dopo l'uguale. Chi salta l'uguale cambia di segno:
$$\textcolor{red}{a^2x - x = ab - b}$$

Metto in evidenza la $$x$$ al primo membro e la $$b$$ al secondo:
$$\textcolor{red}{x(a^2 - 1) = b(a - 1)}$$

Notando che $$-1$$ è un fattore di $$a^2 - 1$$ scompongo in fattori:
$$\textcolor{red}{x(a + 1)(a - 1) = b(a - 1)}$$

Dovrei applicare il secondo principio dividendo entrambi i termini per $$(a + 1)(a - 1)$$, ma posso farlo solo se questo termine è diverso da zero. Distinguo i due casi:

[se $$(a + 1)(a - 1) \neq 0$$]{.text-red-darken-1}
Equivale a dire $$a \neq 1$$ e $$a \neq -1$$. Posso dividere:

$$
\textcolor{red}{\frac{x(a + 1)(a - 1)}{(a + 1)(a - 1)} = \frac{b(a - 1)}{(a + 1)(a - 1)}}
$$

Semplifico:

$$
\textcolor{red}{x = \frac{b}{a + 1}}
$$

Ho altre due possibilità: $$a = +1$$ oppure $$a = -1$$;

- la prima:
  [se $$a = 1$$]{.text-red-darken-1} sostituisco $$1$$ invece di applicare il secondo principio:
  $$
  \textcolor{red}{x(1 + 1)(1 - 1) = b(1 - 1)}
  $$
  $$
  \textcolor{red}{0 = 0}
  $$
  equazione indeterminata

- la seconda:
  [se $$a = -1$$]{.text-red-darken-1} sostituisco $$-1$$ invece di applicare il secondo principio:
  $$
  \textcolor{red}{x(-1 + 1)(-1 - 1) = b(-1 - 1)}
  $$
  $$
  \textcolor{red}{0 = -2b}
  $$
  ho due sottocasi:
  - [se $$b = 0$$ $$0 = 0$$]{.text-red-darken-1} equazione indeterminata
  - [se $$b \neq 0$$ $$0 = \text{numero}$$]{.text-red-darken-1} equazione impossibile

Raccogliendo i risultati:

[se $$a \neq \pm 1$$ $$x = \frac{b}{a + 1}$$]{.text-red-darken-1}
[se $$a = 1$$ equazione indeterminata]{.text-red-darken-1}
[se $$a = -1$$ e $$b = 0$$ equazione indeterminata]{.text-red-darken-1}
[se $$a = -1$$ e $$b \neq 0$$ equazione impossibile]{.text-red-darken-1}