# [Proprietà moltiplicativa]{.text-red}

Il concetto di probabilità condizionata nella trattazione assiomatica equivale al teorema della probabilità composta visto nella probabilità classica: infatti facendo il minimo comune multiplo nella formula della probabilità condizionata ottengo il teorema della probabilità composta.

> **Attenzione:** è il teorema della probabilità composta nella teoria classica, qui è meglio chiamarlo proprietà moltiplicativa

$$
\textcolor{red}{P(E_1 \cap E_2) = P(E_1) \cdot P(E_2|E_1) = P(E_2) \cdot P(E_1|E_2)}
$$

Cioè: **la probabilità del prodotto di due eventi è uguale al prodotto fra la probabilità del primo e la probabilità del secondo condizionata al fatto che il primo evento sia accaduto**

> **Esempio:**
> Trovare la probabilità che estraendo due carte da un mazzo di $$40$$ siano entrambe assi
>
> $$E_1$$ = uscita di un asso
> $$E_2|E_1$$ = uscita di un secondo asso
>
> probabilità di uscita di un asso = $$P(E_1) = 4/40 = 1/10$$
> probabilità condizionata di uscita di un secondo asso = $$P(E_2|E_1) = 3/39 = 1/13$$
>
> $$
> \textcolor{red}{P(E_1 \cap E_2) = P(E_1) \cdot P(E_2|E_1) = 1/10 \cdot 1/13 = 1/130 = 0,0076 \approx 0,8\%}
> $$