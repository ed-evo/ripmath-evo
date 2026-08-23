# [.text-red-darken-1]calcoli

Risolvere l'equazione

$$
\int_{0}^{+\infty} ke^{-\alpha x} dx = 1
$$

essendo $$k$$ una costante la estraggo dal segno di integrale

$$
k \int_{0}^{+\infty} e^{-\alpha x} dx = 1
$$

è un integrale del tipo $$\int e^{f(x)} f'(x) dx$$ con $$f(x) = -\alpha x$$

Siccome $$f'(x) = -\alpha$$ allora moltiplichiamo e dividiamo tutto per $$-\alpha$$ in modo da non variare il valore ma avere la derivata della funzione al numeratore

$$
k \int_{0}^{+\infty} \frac{-\alpha}{-\alpha} e^{-\alpha x} dx = 1
$$

essendo $$\alpha$$ un valore dato posso estrarre il $$-\alpha$$ del denominatore dal segno di integrale; quello al numeratore mi serve per avere la derivata dell'esponente

$$
\frac{k}{-\alpha} \int_{0}^{+\infty} -\alpha e^{-\alpha x} dx = 1
$$

adesso, essendo $$-\alpha$$ la derivata dell'esponente $$-\alpha x$$, è un integrale immediato che trovi nella tabella degli integrali di funzione di funzione e, come integrale indefinito vale $$e^{-\alpha x}$$, quindi ottengo:

$$
\frac{k}{-\alpha} \left[ e^{-\alpha x} \right]_{0}^{+\infty} = 1
$$

Adesso devo sostituire dentro il simbolo differenza prima alla $$x$$ il valore $$+\infty$$ poi devo sostituire $$0$$ e sottrarlo

$$
\frac{k}{-\alpha} ( e^{-\alpha(+\infty)} - e^{-\alpha \cdot 0} ) = 1
$$

$$-\alpha$$ per $$+\infty$$ vale $$-\infty$$; ho $$e^{-\infty} = 0$$
$$-\alpha$$ per $$0$$ vale zero; ho $$e^{0} = 1$$

$$
\frac{k}{-\alpha} (0 - 1) = 1
$$

Eseguo l'operazione poi moltiplico i segni

$$
\frac{k}{\alpha} = 1
$$

quindi ho

$$
k = \alpha
$$