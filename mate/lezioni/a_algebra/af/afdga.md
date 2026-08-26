# Equazioni reciproche di terzo grado

[$ax^3 + bx^2 + bx + a = 0$]{.text-blue} prima specie
[$ax^3 + bx^2 - bx - a = 0$]{.text-blue} seconda specie

Come prima cosa c'è da dire che se l'equazione reciproca è di grado dispari, siccome ogni soluzione deve avere la sua reciproca e, per il teorema fondamentale dell'algebra le soluzioni sono in numero dispari allora (intuitivamente) tra le soluzioni dovrà sempre esservi $1$ (o $-1$) come numero reciproco di sé stesso.

> in particolare per le equazioni reciproche di prima specie $-1$
> per le equazioni reciproche di seconda specie $+1$

Pertanto potremo sempre usare Ruffini con il divisore:
- $(x+1)$ per le equazioni di prima specie
- $(x-1)$ per le equazioni di seconda specie

Vediamo un esempio per tipo:

## Equazione reciproca di prima specie

[$3x^3 + 13x^2 + 13x + 3 = 0$]{.text-blue}

È reciproca di prima specie perché i coefficienti equidistanti dal centro dell'equazione sono uguali e di stesso segno: $3$ con $3$ e $13$ con $13$.

Posso scomporre per $(x+1)$: infatti

[$$
P(-1) = 3(-1)^3 + 13(-1)^2 + 13(-1) + 3
$$]{.text-red}
[$$
= 3(-1) + 13(1) + 13(-1) + 3
$$]{.text-red}
[$$
= -3 + 13 - 13 + 3 = 0
$$]{.text-red}

Quindi faccio la divisione di Ruffini:

[$$
3x^3 + 13x^2 + 13x + 3 = (x + 1)(3x^2 + 10x + 3)
$$]{.text-blue}

Adesso pongo uguali a zero i fattori ed ottengo:

- Primo fattore:
  [$x + 1 = 0$]{.text-blue} cioè [$x = -1$]{.text-blue}
- Secondo fattore:
  [$3x^2 + 10x + 3 = 0$]{.text-blue} che mi dà come soluzioni [$x = -3$]{.text-blue} e [$x = -1/3$]{.text-blue}

Ottengo quindi le tre soluzioni (le ordino):
[$x_1 = -3$]{.text-red} [$x_2 = -1$]{.text-red} [$x_3 = -1/3$]{.text-red}

---

## Equazione reciproca di seconda specie

[$2x^3 - 7x^2 + 7x - 2 = 0$]{.text-blue}

È reciproca di seconda specie perché i coefficienti equidistanti dal centro dell'equazione sono uguali e di segno contrario: $2$ con $-2$ e $-7$ con $7$.

Posso scomporre per $(x-1)$: infatti

[$$
P(1) = 2(1)^3 - 7(1)^2 + 7(1) - 2 = 2 - 7 + 7 - 2 = 0
$$]{.text-red}

Quindi faccio la divisione di Ruffini:

[$$
2x^3 - 7x^2 + 7x - 2 = (x - 1)(2x^2 - 5x + 2)
$$]{.text-blue}

Adesso pongo uguali a zero i fattori ed ottengo:

- Primo fattore:
  [$x - 1 = 0$]{.text-blue} cioè [$x = 1$]{.text-blue}
- Secondo fattore:
  [$2x^2 - 5x + 2 = 0$]{.text-blue} che mi dà come soluzioni [$x = 2$]{.text-blue} e [$x = 1/2$]{.text-blue}

Ottengo quindi le tre soluzioni (le ordino):
[$x_1 = 1/2$]{.text-red} [$x_2 = 1$]{.text-red} [$x_3 = 2$]{.text-red}