# Equazioni differenziali del primo ordine lineari omogenee

La nostra equazione è del tipo:

$$
\textcolor{red}{y' + p(x) y = 0}
$$

Con $$p(x)$$ espressione in $$x$$.

> Per risolverla è sufficiente osservare che è un'equazione differenziale a variabili separabili.

La formula risolutiva è:

$$
\textcolor{red}{y = c e^{-\int p(x)dx}}
$$

---

## Esempio

Risolvere la seguente equazione differenziale:

$$
\textcolor{red}{y' + y \sin x = 0}
$$

In questo caso abbiamo $$\textcolor{blue}{p(x) = \sin x}$$.

Applicando la formula ottengo:

$$
\textcolor{blue}{y = c e^{-\int \sin x dx}}
$$

E siccome l'integrale di $$\sin x$$ è $$-\cos x$$ ottengo come integrale generale:

$$
\textcolor{red}{y = c e^{\cos x}}
$$