# [La successione geometrica]{.text-red}

In questa pagina studiamo una successione molto importante: la successione geometrica che abbiamo già utilizzato varie volte.

La successione geometrica è una progressione geometrica di ragione uguale al suo primo termine.
Se chiamiamo $$a$$ il primo termine posso scriverla come:

$$a, a^2, a^3, a^4, \dots, a^n, \dots$$

la ragione è $$q = a$$.

***

Se $$a > 1$$ la successione diverge, per mostrarlo trovo una minorante che diverga: considero, come minorante, la successione:

$$1, 2a-1, 3a-2, \dots, na-n+1, \dots$$
o meglio
$$1, 2a-1, 3a-2, \dots, 1 + n(a-1), \dots$$

> **Dimostrazione:** Mostriamo che vale sempre (per $$a > 1$$ ed $$n > 1$$):
> $$
> a^n > 1 + n(a-1)
> $$
> Partiamo dalla disuguaglianza
> $$
> (1+b)^n > 1 + nb
> $$
> sempre vera se $$b > 1$$ ed $$n > 1$$.
> Devo far comparire $$(1+b)$$ anche al secondo termine, allora aggiungo $$+n$$ e $$-n$$ nel secondo termine:
> $$
> (1+b)^n > 1 + nb + n - n
> $$
> $$
> (1+b)^n > 1 + n(b+1) - n
> $$
> Pongo $$(1+b) = a$$, posso farlo perché ho posto $$a > 1$$.
> Ottengo:
> $$
> a^n > 1 + na - n
> $$
> cioè, raccogliendo $$n$$:
> $$
> a^n > 1 + n(a-1)
> $$
> come volevamo.

Abbiamo, essendo $$a > 1$$:

$$
\lim_{n \to \infty} 1 + n(a-1) = +\infty
$$

quindi, essendo la successione geometrica una maggiorante, avremo:

$$
\lim_{n \to \infty} a^n = +\infty
$$

***

Se $$a = 1$$ la mia successione diventa una successione costante:

$$1, 1^2, 1^3, 1^4, \dots, 1^n, \dots$$
o meglio
$$1, 1, 1, 1, \dots, 1, \dots$$

e quindi:

$$
\lim_{n \to \infty} 1^n = 1
$$

***

Se $$-1 < a < +1$$ allora la successione inversa:

$$\frac{1}{a}, \frac{1}{a^2}, \frac{1}{a^3}, \dots, \frac{1}{a^n}, \dots$$

è divergente come successione geometrica di base $$(1/a)$$ maggiore di $$1$$:

$$
\lim_{n \to \infty} \frac{1}{a^n} = +\infty
$$

quindi la mia successione, essendo inversa di una successione divergente, è infinitesima:

$$
\lim_{n \to \infty} a^n = 0
$$

***

Se $$a = -1$$ la mia successione diventa una successione oscillante di modulo costante $$1$$:

$$(-1)^1, (-1)^2, (-1)^3, (-1)^4, \dots, (-1)^n, \dots$$
o meglio
$$-1, +1, -1, +1, \dots, (-1)^n, \dots$$

e non ammette limite.

***

Se $$a < -1$$ la mia successione diventa oscillante ed avrà in modulo gli stessi termini della successione considerata sopra per $$a > 1$$:

$$(-1)^1 a^1, (-1)^2 a^2, (-1)^3 a^3, (-1)^4 a^4, \dots, (-1)^n a^n, \dots$$
o meglio
$$-a, +a^2, -a^3, +a^4, \dots, (-1)^n a^n, \dots$$

e divergerà all'infinito:

$$
\lim_{n \to \infty} (-1)^n \cdot a^n = \infty
$$