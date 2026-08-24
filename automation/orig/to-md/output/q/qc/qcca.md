[# Limite finito di una successione]{.text-red}

Quella che abbiamo dato nella pagina precedente è una definizione mediante intorni ed è valida sempre per ogni tipo di limite; ma è possibile dare, per una successione convergente, una definizione di limite più "algebrica" che può essere meglio utilizzizzata negli esercizi.

> **Definizione**
>
> Diremo che la successione
>
> $$
> a_1, a_2, \dots, a_n, \dots
> $$
>
> tende al **limite finito $a$** se, considerato un numero $\epsilon$ positivo, piccolo a piacere, esiste in sua corrispondenza un numero $k_\epsilon \in \mathbb{N}$ tale che quando $|a_n - a| < \epsilon$ abbiamo $n > k_\epsilon$.
>
> In simboli:
>
> $$
> \lim_{n \to \infty} a_n = a \iff (|a_n - a| < \epsilon \implies n > k_\epsilon)
> $$

Intuitivamente significa che una successione

$$
a_1, a_2, a_3, \dots, a_k, \dots
$$

tende al limite finito $a$ se, preso un intorno piccolo di $a$ (largo $\epsilon$), da un certo termine $a_k$ in poi tutti i termini della successione cadono dentro tale intorno.

Esempio: considero la successione

$$
-8, +4, -2, +1, -\frac{1}{2}, +\frac{1}{4}, \dots, \left(-\frac{1}{2}\right)^{n-4}, \dots
$$

[Se vuoi vedere perché il termine generico è $(-\frac{1}{2})^{n-4}$](qccaa.html)

***

Se guardi la figura a destra vedi che già prendendo come valore di $\epsilon$ sulle ordinate circa $\pm 1/2$, già il termine $1/4$ della successione cade dentro la striscia colorata come tutti i termini successivi, che si avvicinano tanto a $0$ che non posso nemmeno disegnarli.

***

La successione tende a $0$ perché se considero un numero piccolo, tipo $1/1000$ (un millesimo), esiste un termine della successione oltre il quale tutti i termini cadono a meno di un millesimo da $0$.

Tale termine sarà $1/512$; il termine successivo $1/1024$ è più vicino a zero di un millesimo come tutti i termini seguenti.

Ti scrivo i primi 15 termini della successione, così puoi verificare da solo:

$$
-8, +4, -2, +1, -\frac{1}{2}, +\frac{1}{4}, -\frac{1}{8}, +\frac{1}{16}, -\frac{1}{32}, +\frac{1}{64}, -\frac{1}{128}, +\frac{1}{256}, -\frac{1}{512}, +\frac{1}{1024}, -\frac{1}{2048}, \dots
$$

***

In tal caso diremo che il limite è finito e scriviamo

$$
\lim_{k \to \infty} a_k = a
$$

Nel nostro caso la successione considerata ha valore $0$. Poiché possiamo indicarla come $-8 \cdot \left(-\frac{1}{2}\right)^{k-1}$ potremo scrivere

$$
\lim_{k \to \infty} -8 \cdot \left(-\frac{1}{2}\right)^{k-4} = 0
$$

> **Nota:** Da notare che per indicare il termine generico dello sviluppo della successione uso la lettera $n$, mentre per fare il limite del termine generico uso la lettera $k$: è una pignoleria, però così indico in modo diverso due cose diverse.