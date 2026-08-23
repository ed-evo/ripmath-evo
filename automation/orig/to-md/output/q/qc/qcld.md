# [calcoli]{.text-red}

Mostriamo che la successione $$1/2^{k-1}$$ è una maggiorante (per $$k > 2$$) della successione $$1/k!$$.

Basterà mostrare che per gli inversi vale il contrario:
cioè mostriamo che la successione
$$1, 2, 4, \dots, 2^{k-1}, \dots$$
è una minorante della successione
$$1, 2, 6, \dots, k!, \dots$$

> Da qui si vede perché devo mettere per $$k > 2$$, infatti per $$k = 1$$ e $$k = 2$$ le due successioni hanno termine uguale.

Per induzione dimostriamo che, per $$k > 2$$, i termini della prima successione sono sempre inferiori ai termini della seconda.

Per $$k = 3$$ la mia proposizione è vera $$4 < 6$$.
Supponiamo che per $$k = n$$ la proposizione sia vera:
cioè che valga $$n! > 2^{n-1}$$.
Mostriamo che allora è vera per $$k = n + 1$$.
Devo mostrare che
$$
(n + 1)! > 2^n
$$
posso scrivere
$$
(n + 1) \cdot n! > 2 \cdot 2^{n-1}
$$
cioè il termine di indice $$n + 1$$ si ottiene, prima della disuguaglianza, moltiplicando il termine precedente per $$n + 1$$ e, dopo la disuguaglianza, moltiplicando il termine precedente per $$2$$; essendo $$(n + 1) > 2$$ ed essendo vera la disuguaglianza precedente sarà vera anche questa.

Per la legge delle disuguaglianze, passando dai numeri ai loro inversi le disuguaglianze cambiano verso, quindi posso scrivere per ogni termine maggiore di 2:

$$
\frac{1}{n!} < \frac{1}{2^n}
$$

come volevamo.