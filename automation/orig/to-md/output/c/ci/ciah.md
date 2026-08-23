# [Funzioni con diversa forma matematica al variare del dominio]{.text-red}

Talvolta le funzioni si presentano in forma algebrica diversa a seconda del dominio su cui sono definite: tali tipi di funzione servono per meglio imprimersi i concetti di continuità e derivabilità e quindi vengono molto usate soprattutto in ambito teorico.

Per studiarle dobbiamo restringere ogni funzione solo alla parte di piano in cui è definita la sua forma algebrica e quindi, con un'operazione di "ricucitura", ricostruire il dominio di tutta la funzione.

Vediamo su un esempio come affrontare lo studio di una funzione di tale tipo.

***

Disegnare intuitivamente il grafico della funzione

[$$
y = \begin{cases} 
x + 1 & \text{se } x < 0 \\ 
e^x & \text{se } 0 \le x \le 1 \\ 
ex & \text{se } x > 1 
\end{cases}
$$]{.text-blue}

e dire se essa è continua e derivabile.

Considero il grafico della funzione.

Per studiarne la continuità e la derivabilità devo vedere cosa succede nei punti di congiunzione, cioè per $$x = 0$$ ed $$x = 1$$.

Per definizione di continuità dovrà essere:

nel punto $$0$$
[$$
\lim_{x \to 0^-} x + 1 = \lim_{x \to 0^+} e^x
$$]{.text-red}
e sostituendo $$0$$ alla $$x$$ ottengo $$1 = 1$$, quindi la funzione è continua in $$0$$.

nel punto $$1$$
[$$
\lim_{x \to 1^-} e^x = \lim_{x \to 1^+} ex
$$]{.text-red}
e sostituendo $$1$$ alla $$x$$ ottengo $$e = e$$, quindi la funzione è continua in $$1$$.

quindi la funzione è continua su tutto $$\mathbb{R}$$.

Consideriamo la derivata della funzione (basterà derivare ogni componente):

[$$
y' = \begin{cases} 
1 & \text{se } x < 0 \\ 
e^x & \text{se } 0 \le x \le 1 \\ 
e & \text{se } x > 1 
\end{cases}
$$]{.text-blue}

e controlliamo cosa succede in $$0$$ ed $$1$$.

Per definizione di derivabilità dovrà essere la derivata destra uguale alla derivata sinistra nel punto, cioè:

nel punto $$0$$
[$$
\lim_{x \to 0^-} 1 = 1
$$]{.text-red}
[$$
\lim_{x \to 0^+} e^x = e^0 = 1
$$]{.text-red}
quindi la funzione è derivabile in $$0$$.

nel punto $$1$$
[$$
\lim_{x \to 1^-} e^x = e^1 = e
$$]{.text-red}
[$$
\lim_{x \to 1^+} e = e
$$]{.text-red}
quindi la funzione è derivabile in $$1$$.

quindi la funzione è derivabile su tutto $$\mathbb{R}$$.

[**Risultato: la funzione è continua e derivabile su tutto $$\mathbb{R}$$**]{.text-blue}