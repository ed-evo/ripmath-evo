# <span class="text-red-600">esercizio</span>

Risolvere e discutere la seguente equazione
$$
(x + 2a)^2 + a^2 = (x - a)^2 - (a - b)(a + b)
$$
eseguo i prodotti notevoli
$$
x^2 + 4ax + 4a^2 + a^2 = x^2 - 2ax + a^2 - (a^2 - b^2)
$$
$$
x^2 + 4ax + 4a^2 + a^2 = x^2 - 2ax + a^2 - a^2 + b^2
$$
Sposto i termini con la $x$ prima dell'uguale e quelli senza dopo l'uguale e chi salta l'uguale cambia di segno (potrei prima sommare i termini simili ma preferisco fare in questo modo perché così posso risparmiare un passaggio)
$$
x^2 + 4ax - x^2 + 2ax = a^2 - a^2 + b^2 - 4a^2 - a^2
$$
sommo i termini simili
$$
6ax = b^2 - 5a^2
$$

Ora dovrei applicare il secondo principio dividendo entrambi i termini per $6a$ ma posso farlo solo se $a$ è diverso da zero mentre se $a$ è uguale a zero avrò un'equazione o impossibile o indeterminata:
distinguo i due casi

- se $a \neq 0$ posso dividere
  $$
  \frac{6ax}{6a} = \frac{b^2 - 5a^2}{6a}
  $$
  semplifico
  $$
  x = \frac{b^2 - 5a^2}{6a}
  $$
- se $a = 0$ sostituisco zero invece di applicare il secondo principio
  $$
  6 \cdot 0 \cdot x = b^2 - 5 \cdot 0^2
  $$
  $$
  0 = b^2
  $$
  devo distinguere due sottocasi
  - se $b = 0 \quad 0 = 0^2 \quad 0 = 0$ equazione indeterminata
  - se $b \neq 0 \quad 0 = \text{numero}$ equazione impossibile

Raccogliendo i risultati:

> se $a \neq 0 \quad x = (b^2 - 5a^2)/6a$
>
> se $a = 0$ e $b = 0$ equazione indeterminata
>
> se $a = 0$ e $b \neq 0$ equazione impossibile