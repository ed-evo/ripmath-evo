# [Dimostrazione della regola della derivata del prodotto di due funzioni]{.text-red}

> **Avvertenza:** per una migliore visualizzazione metti la pagina a tutto schermo

> Voglio dimostrare che se ho
> [$$\textcolor{red}{y = f(x) \cdot g(x)}$]{.text-red}
> allora ne segue
> [$$\textcolor{red}{y' = f'(x) \cdot g(x) + f(x) \cdot g'(x)}$]{.text-red}
>
> Parto dal rapporto incrementale per la funzione [$$\textcolor{red}{y = f(x) \cdot g(x)}$]{.text-red}
> il rapporto incrementale vale:
>
> $$
> \lim_{h \to 0} \frac{\textcolor{red}{f(x+h) \cdot g(x+h) - f(x) \cdot g(x)}}{h}
> $$
>
> Però io so fare la derivata solo quando il rapporto incrementale mi coinvolge una sola funzione, quindi aggiungo e tolgo un termine in modo da spezzare quel rapporto incrementale in due rapporti incrementali: (se aggiungo e contemporaneamente tolgo la stessa quantità l'espressione non mi cambia di valore)
>
> $$
> \lim_{h \to 0} \frac{\textcolor{red}{f(x+h) \cdot g(x+h) - f(x) \cdot g(x+h) + f(x) \cdot g(x+h) - f(x) \cdot g(x)}}{h}
> $$
>
> ora spezzo il limite in due limiti:
>
> $$
> \lim_{h \to 0} \frac{\textcolor{red}{f(x+h) \cdot g(x+h) - f(x) \cdot g(x+h)}}{h} + \lim_{h \to 0} \frac{\textcolor{red}{f(x) \cdot g(x+h) - f(x) \cdot g(x)}}{h}
> $$
>
> Per problemi di visualizzazione sullo schermo facciamo un limite per volta:
>
> nel primo limite
>
> $$
> \lim_{h \to 0} \frac{\textcolor{red}{f(x+h) \cdot g(x+h) - f(x) \cdot g(x+h)}}{h}
> $$
>
> posso mettere in evidenza [$$\textcolor{red}{g(x+h)}$]{.text-red} ed ottengo il limite di un prodotto
>
> $$
> \lim_{h \to 0} \textcolor{red}{g(x+h)} \cdot \frac{\textcolor{red}{f(x+h) - f(x)}}{h}
> $$
>
> e posso fare il prodotto dei limiti:
>
> $$
> \lim_{h \to 0} \textcolor{red}{g(x+h)} \cdot \lim_{h \to 0} \frac{\textcolor{red}{f(x+h) - f(x)}}{h}
> $$
>
> il primo limite quando $h$ tende a zero vale [$\textcolor{red}{g(x)}$]{.text-red} ed il secondo è [$\textcolor{red}{f'(x)}$]{.text-red} quindi
> [$$\textcolor{red}{= g(x) \cdot f'(x) = f'(x) \cdot g(x)}$]{.text-red}
>
> nel secondo limite
>
> $$
> \lim_{h \to 0} \frac{\textcolor{red}{f(x) \cdot g(x+h) - f(x) \cdot g(x)}}{h}
> $$
>
> posso mettere in evidenza [$$\textcolor{red}{f(x)}$]{.text-red} ed ottengo il limite di un prodotto
>
> $$
> \lim_{h \to 0} \textcolor{red}{f(x)} \cdot \frac{\textcolor{red}{g(x+h) - g(x)}}{h}
> $$
>
> e posso fare il prodotto dei limiti:
>
> $$
> \lim_{h \to 0} \textcolor{red}{f(x)} \cdot \lim_{h \to 0} \frac{\textcolor{red}{g(x+h) - g(x)}}{h}
> $$
>
> il primo limite non dipende da $h$ e vale [$\textcolor{red}{f(x)}$]{.text-red} ed il secondo è [$\textcolor{red}{g'(x)}$]{.text-red} quindi
> [$$\textcolor{red}{= f(x) \cdot g'(x)}$]{.text-red}
>
> Raccogliendo i risultati l'espressione iniziale vale
> [$$\textcolor{red}{= f'(x) \cdot g(x) + f(x) \cdot g'(x)}$]{.text-red}
> come volevamo