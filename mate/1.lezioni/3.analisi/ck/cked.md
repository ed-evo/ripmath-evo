# Integrali generalizzati

Discutiamo in questa pagina il caso in cui l'area della regione di piano sia illimitata, il che non vuol dire che sia infinita.

[Vogliamo calcolare l'area della regione di piano compresa fra la curva $$y = e^x$$ e l'asse delle $$x$$ da meno infinito sino al punto zero]{.text-red}

L'area da trovare è quella in viola; useremo questa proprietà che applicheremo ogni volta che avremo un'area illimitata.

$$
\int_{a}^{+\infty} f(x) \, dx = \lim_{b \to +\infty} \int_{a}^{b} f(x) \, dx = \lim_{b \to +\infty} [F(x)]_{a}^{b} = \lim_{b \to +\infty} (F(b) - F(a))
$$

Cioè se abbiamo un integrale sino all'infinito (o anche sino a un punto dove la funzione non è definita) basterà fare prima l'integrale e successivamente fare il limite della funzione ottenuta.

Quindi nel nostro caso faremo:

$$
\int_{-\infty}^{0} e^x \, dx = \lim_{a \to -\infty} \int_{a}^{0} e^x \, dx =
$$

siccome l'integrale di $$e^x$$ vale sempre $$e^x$$ avremo:

$$
= \lim_{a \to -\infty} [e^x]_{a}^{0} = e^0 - \lim_{a \to -\infty} e^a = 1 - 0 = 1
$$

Qualche testo, quando non c'è possibilità di errore, invece di fare il limite usando la lettera $$a$$ o $$b$$ preferisce usare la $$x$$; teoricamente sarebbe un errore anche se non cambia nulla nel risultato.

Quindi l'area cercata vale $$1$$.

> **Nota:** da un lato abbiamo la funzione $$e^x$$ che si avvicina all'asse $$x$$ in modo asintotico, cioè dopo centinaia di chilometri ancora non tocca l'asse delle $$x$$; se vado a calcolare la distanza tra la funzione e l'asse $$x$$ dopo soli $$100$$ metri vedo che vale
>
> $$
> e^{-100} = \frac{1}{e^{100}}
> $$
>
> cioè già dopo soli $$100$$ metri la distanza fra la curva e l'asse $$x$$ è di molti ordini di grandezza inferiore al diametro di un atomo!
> Per questo non c'è da meravigliarsi se l'area totale vale un'unità quadrata di misura del piano.
> Se ci pensi bene quest'esempio ti fa anche vedere l'abisso che c'è fra la matematica come scienza esatta e le scienze applicate.

Vediamo ora alcuni esercizi:

1. [Calcolare l'area della regione di piano compresa fra la curva $$y=1/x$$ e l'asse delle $$x$$ tra gli estremi $$0$$ ed $$1$$]{.text-blue}
   [soluzione](ckeda.html)

2. [Calcolare l'area della regione di piano compresa fra la curva $$y=1/(x^2)$$ e l'asse delle $$x$$ da $$1$$ a più infinito]{.text-blue}
   [soluzione](ckedb.html)