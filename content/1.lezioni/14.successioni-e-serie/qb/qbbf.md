# Somma dei termini di una progressione geometrica

Vediamo come è possibile sommare tutti i termini di una progressione geometrica nel caso in cui la ragione sia inferiore ad $$1$$ (se la ragione è superiore ad $$1$$ la progressione diverge).

Abbiamo visto la formula

$$
S_n = a_1 \frac{q^n - 1}{q - 1}
$$

scriviamola, cambiando segno sia sopra che sotto, come

$$
S_n = a_1 \frac{1 - q^n}{1 - q}
$$

posso anche scrivere, suddividendo i numeratori in due frazioni

$$
S_n = \frac{a_1}{1 - q} - \frac{a_1 q^n}{1 - q}
$$

Essendo $$q$$ un numero inferiore ad $$1$$, maggiormente cresce la sua potenza e minore è il valore della frazione, cioè possiamo dire

$$
\lim_{n \to \infty} - \frac{a_1 q^n}{1 - q} = - \frac{a_1 \cdot 0}{1 - q} = 0
$$

quindi posso scrivere la formula

$$
\textcolor{red}{S_\infty = \frac{a_1}{1 - q}}
$$

> **Esempio:** calcoliamo la somma dei termini della progressione geometrica
>
> $$1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, \dots$$
>
> la ragione è $$q = \frac{1}{2}$$, quindi applico la formula
>
> $$
> S_\infty = \frac{a_1}{1 - q} = \frac{1}{1/2} = 1 \cdot \frac{2}{1} = 2
> $$
>
> quindi
>
> $$
> S_\infty = 1 + \frac{1}{2} + \frac{1}{4} + \dots = 2
> $$