# <span class="text-red-600">esercizio</span>

Discutere la seguente equazione
$$
a^2x + b = ab + x
$$
devo lasciare i termini con la $x$ prima dell'uguale e quelli senza dopo l'uguale. Chi salta l'uguale cambia di segno
$$
a^2x - x = ab - b
$$
metto in evidenza la $x$ al primo membro e la $b$ al secondo
$$
x(a^2 - 1) = b(a - 1)
$$
notando che $a - 1$ è un fattore di $a^2 - 1$ scompongo in fattori
$$
x(a + 1)(a - 1) = b(a - 1)
$$
dovrei applicare il secondo principio dividendo entrambi i termini per $(a + 1)(a - 1)$, ma posso farlo solo se questo termine è diverso da zero.
distinguo i due casi:
$\text{se } (a + 1)(a - 1) \neq 0$
equivale a dire $a \neq 1$ e $a \neq -1$
posso dividere
$$
\frac{x(a + 1)(a - 1)}{(a + 1)(a - 1)} = \frac{b(a - 1)}{(a + 1)(a - 1)}
$$
semplifico
$$
x = \frac{b}{a + 1}
$$
Ho altre due possibilità: $a = +1$ oppure $a = -1$;

- la prima:
  $\text{se } a = 1$ sostituisco $1$ invece di applicare il secondo principio
  $$
  x(1 + 1)(1 - 1) = b(1 - 1)
  $$
  $$
  0 = 0
  $$
  equazione indeterminata
- la seconda:
  $\text{se } a = -1$ sostituisco $-1$ invece di applicare il secondo principio
  $$
  x(-1 + 1)(-1 - 1) = b(-1 - 1)
  $$
  $$
  0 = -2b
  $$
  ho due sottocasi:
  - $\text{se } b = 0 \implies 0 = 0$ equazione indeterminata
  - $\text{se } b \neq 0 \implies 0 = \text{numero}$ equazione impossibile

Raccogliendo i risultati:

- <span class="text-red-600">se</span> $a \neq \pm 1 \quad x = \frac{b}{a + 1}$
- <span class="text-red-600">se</span> $a = 1$ <span class="text-red-600">equazione indeterminata</span>
- <span class="text-red-600">se</span> $a = -1$ <span class="text-red-600">e</span> $b = 0$ <span class="text-red-600">equazione indeterminata</span>
- <span class="text-red-600">se</span> $a = -1$ <span class="text-red-600">e</span> $b \neq 0$ <span class="text-red-600">equazione impossibile</span>