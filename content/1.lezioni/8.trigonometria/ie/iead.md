# [Raggio del cerchio inscritto nel triangolo]{.text-red}

Partiamo dall'area del triangolo conoscendone il perimetro ed il raggio del cerchio inscritto che abbiamo [trovato](../../f/fm/fmbc.html) in geometria euclidea nel capitolo dedicato all'equivalenza: l'[area del triangolo](../../f/fn/fnic.html) vale

$$
\textcolor{red}{A_s(ABC) = \frac{2p \cdot r}{2}}
$$

Da questa formula posso ricavare il raggio del cerchio inscritto nel triangolo

$$
\textcolor{red}{r = \frac{\text{Area}}{p}}
$$

essendo $$p$$ il semiperimetro.

Sostituendo all'area la formula di Erone avremo la formula per trovare il raggio del cerchio inscritto essendo noti i lati

$$
\textcolor{blue}{r = \frac{\sqrt{p(p-a)(p-b)(p-c)}}{p}}
$$

ora portiamo il semiperimetro al denominatore dentro radice

$$
\textcolor{blue}{r = \sqrt{\frac{p(p-a)(p-b)(p-c)}{p^2}}}
$$

Semplifico sopra e sotto per $$p$$

$$
\textcolor{blue}{r = \sqrt{\frac{(p-a)(p-b)(p-c)}{p}}}
$$

adesso moltiplico sopra e sotto per $$(p-a)$$: cerco di trasformare in modo da avere una delle formule di Briggs

$$
\textcolor{blue}{r = \sqrt{\frac{(p-a)^2(p-b)(p-c)}{p(p-a)}}}
$$

Estraggo dalla radice $$(p-a)$$ ed ottengo

$$
\textcolor{blue}{r = (p-a) \sqrt{\frac{(p-b)(p-c)}{p(p-a)}}}
$$

ma per le [formule di Briggs](ieaca.html) so che

$$
\textcolor{blue}{\tan \frac{\alpha}{2} = \sqrt{\frac{(p-b)(p-c)}{p(p-a)}}}
$$

Quindi posso scrivere la relazione

$$
\textcolor{red}{r = (p-a) \tan \frac{\alpha}{2}}
$$

Potendo applicare lo stesso ragionamento per estrarre dalla radice $$(p-b)$$ e $$(p-c)$$ avremo le tre formule per il raggio del cerchio inscritto nel triangolo:

$$
\textcolor{red}{r = (p-a) \tan \frac{\alpha}{2}}
$$

$$
\textcolor{red}{r = (p-b) \tan \frac{\beta}{2}}
$$

$$
\textcolor{red}{r = (p-c) \tan \frac{\gamma}{2}}
$$