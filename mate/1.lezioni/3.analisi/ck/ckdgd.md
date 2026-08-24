Infatti abbiamo, indicando la derivata con $$'$$:

$$
\textcolor{red}{(f \cdot h)' = f' \cdot h + f \cdot h'}
$$

> [La derivata di un prodotto di funzioni è uguale alla derivata della prima funzione per la seconda non derivata più la derivata della seconda funzione per la prima non derivata]{.text-blue}

Ricavando $$\textcolor{red}{f \cdot h'}$$ ottengo:

$$
\textcolor{red}{f \cdot h' = (f \cdot h)' - f' \cdot h}
$$

Ora se $$\textcolor{red}{h' = g}$$ sarà $$\textcolor{red}{h = \int g}$$

Sostituendo:

$$
\textcolor{red}{f \cdot g = (f \cdot \int g)' - f' \cdot \int g}
$$

Applicando l'integrazione ad ogni termine:

$$
\textcolor{red}{\int f \cdot g = \int (f \cdot \int g)' - \int (f' \cdot \int g)}
$$

Ricordando che l'integrale è l'inverso della derivata posso togliere l'integrale e la derivata nel primo termine dopo l'uguale ed ottengo:

$$
\textcolor{red}{\int f \cdot g = f \cdot \int g - \int (f' \cdot \int g)}
$$

che è la formula di integrazione per parti.