# infinitesimi

> metti la pagina a tutto schermo altrimenti le formule si vedono male

Approfondiamo un po' questo concetto di infinitesimo di ordine superiore. Consideriamo la nostra formula:

$$
\textcolor{red}{f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}
$$

Quando $$x$$ tende ad $$a$$ il termine $$(x-a)$$ diventa infinitesimo.
Il grado di un infinitesimo di tipo $$(x-a)$$ corrisponde al valore dell'esponente.

Quando $$x$$ tende ad $$a$$ abbiamo che:

- il primo termine dopo l'uguale è una costante $$f(a)$$
- il secondo termine dopo l'uguale è un infinitesimo di primo grado $$(x-a)^1$$ per una costante $$f'(a)$$
- il terzo termine dopo l'uguale è un infinitesimo di secondo grado $$(x-a)^2$$ per una costante $$f''(a)$$
- il quarto termine dopo l'uguale è un infinitesimo di terzo grado $$(x-a)^3$$ per una costante $$f'''(a)$$
- ...
- il penultimo termine dopo l'uguale è un infinitesimo di grado $$n$$ $$(x-a)^n$$ per una costante $$f^{(n)}(a)$$
- l'ultimo termine dopo l'uguale è un infinitesimo di grado $$n+1$$ $$(x-a)^{n+1}$$ per il termine $$f'(c)$$

Se un infinitesimo ha grado superiore rispetto ad un altro si dice che è un infinitesimo di ordine superiore, quindi l'ultimo termine della formula (il resto) è un infinitesimo di ordine superiore.