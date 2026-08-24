> Notare che la formula è valida solamente se $$P(E_1) \neq 0$$

$$
\textcolor{red}{P(E_2|E_1) = \frac{P(E_1 \cap E_2)}{P(E_1)}}
$$

Minimo comune multiplo $$P(E_1)$$

$$
\textcolor{red}{\frac{P(E_2|E_1) \cdot P(E_1)}{P(E_1)} = \frac{P(E_1 \cap E_2)}{P(E_1)}}
$$

Tolgo i denominatori

$$
\textcolor{red}{P(E_2|E_1) \cdot P(E_1) = P(E_1 \cap E_2)}
$$

Leggo a rovescio

$$
\textcolor{red}{P(E_1 \cap E_2) = P(E_1) \cdot P(E_2|E_1)}
$$

Ma posso farlo anche per la seconda formula ($$P(E_2) \neq 0$$)

$$
\textcolor{red}{P(E_1|E_2) = \frac{P(E_1 \cap E_2)}{P(E_2)}}
$$

Minimo comune multiplo $$P(E_2)$$

$$
\textcolor{red}{\frac{P(E_1|E_2) \cdot P(E_2)}{P(E_2)} = \frac{P(E_1 \cap E_2)}{P(E_2)}}
$$

Tolgo i denominatori

$$
\textcolor{red}{P(E_1|E_2) \cdot P(E_2) = P(E_1 \cap E_2)}
$$

Leggo a rovescio

$$
\textcolor{red}{P(E_1 \cap E_2) = P(E_2) \cdot P(E_1|E_2)}
$$

Raccogliendo posso scrivere:

$$
\textcolor{red}{P(E_1 \cap E_2) = P(E_2) \cdot P(E_1|E_2) = P(E_1) \cdot P(E_2|E_1)}
$$