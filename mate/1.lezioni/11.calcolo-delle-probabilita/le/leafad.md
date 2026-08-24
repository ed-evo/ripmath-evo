# Caratteristiche della variabile binomiale

Raccogliendo, nella variabile binomiale $$S_n$$ abbiamo che:

- Ogni prova può avere solo due esiti con probabilità l'una $$p$$ e l'altra $$q = (1 - p)$$.
- All'aumentare del numero delle prove, ogni prova è indipendente dalle altre e quindi la probabilità del primo evento è sempre $$p$$.

Per la variabile binomiale abbiamo:

- La media per un evento $$X$$ vale
$$
\textcolor{red}{M(X) = np}
$$
essendo $$n$$ il numero di prove effettuate e $$p$$ la probabilità dell'evento.

> **Nota:** Cioè, se un evento ha probabilità $$p$$, allora in $$n$$ prove la media del numero di volte che l'evento si verifica è $$np$$.
>
> **Esempio:** Lanciamo un dado $$360$$ volte; trovare la media dell'evento: $$X = \text{"Uscita del valore 3"}$$.
> Abbiamo $$n = 360$$ e $$p = 1/6$$.
> $$
> \textcolor{red}{M(X_n) = 360 \cdot 1/6 = 60}
> $$
> In media il valore $$3$$ uscirà $$60$$ volte.

- La varianza vale
$$
\textcolor{red}{\sigma^2(X_n) = npq}
$$
essendo $$n$$ il numero di prove effettuate, $$p$$ la probabilità dell'evento e $$q$$ la probabilità contraria.

> **Esempio:** Lanciamo un dado $$360$$ volte; trovare la varianza dell'evento: $$X = \text{"uscita del valore 3"}$$.
> Abbiamo $$n = 360$$, $$p = 1/6$$ e $$q = 5/6$$.
> $$
> \textcolor{red}{\sigma^2(X_n) = 360 \cdot 1/6 \cdot 5/6 = 50}
> $$

Vediamo un esempio:
Un partecipante ad una gara di tiro con l'arco colpisce il bersaglio in media con la probabilità dell'$$80\%$$. Calcolare il numero medio di centri che egli può aspettarsi con $$20$$ tiri e calcolare anche la varianza.

- Probabilità di colpire: $$80/100 = 4/5$$
- Probabilità di non colpire: $$20/100 = 1/5$$

Abbiamo la variabile aleatoria (per $$1$$ tiro):

| [$$S_1$$]{.text-red} | [non $$X$$]{.text-red} | [$$X$$]{.text-red} |
| :--- | :---: | :---: |
| [$$Pr$$]{.text-red} | [$$1/5$$]{.text-red} | [$$4/5$$]{.text-red} |

Per $$20$$ tiri avremo:
$$
\textcolor{red}{M(X_{20}) = 20 \cdot 4/5 = 16}
$$
$$
\textcolor{red}{\sigma^2(X_{20}) = 20 \cdot 4/5 \cdot 1/5 = 16/5 = 3,2}
$$