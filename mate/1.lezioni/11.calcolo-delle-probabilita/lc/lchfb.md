# esercizio

Calcolare la probabilità che il pezzo difettoso provenga dall'azienda $$\text{C}$$
anche qui applico la formula di Bayes

$$
P(E_3|E) = P(E_3) \cdot \frac{P(E|E_3)}{P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2) + P(E_3) \cdot P(E|E_3)}
$$

$$P(E_1) = 20/100 = 1/5$$ probabilità che il pezzo provenga dall'azienda $$\text{A}$$
$$P(E_2) = 30/100 = 3/10$$ probabilità che il pezzo provenga dall'azienda $$\text{B}$$
$$P(E_3) = 50/100 = 1/2$$ probabilità che il pezzo provenga dall'azienda $$\text{C}$$
$$P(E|E_1) = 3/100$$ probabilità che il pezzo proveniente dall'azienda $$\text{A}$$ sia difettoso
$$P(E|E_2) = 4/100 = 1/25$$ probabilità che il pezzo proveniente dall'azienda $$\text{B}$$ sia difettoso
$$P(E|E_3) = 2/100 = 1/50$$ probabilità che il pezzo proveniente dall'azienda $$\text{C}$$ sia difettoso
$$P(E_2|E) =$$ probabilità che il pezzo difettoso provenga dall'azienda $$\text{B}$$

$$
P(E_3|E) = 1/2 \cdot \frac{1/50}{1/5 \cdot 3/100 + 3/10 \cdot 1/25 + 1/2 \cdot 1/50}
$$

$$
= \frac{1/100}{3/500 + 3/250 + 1/100} = \frac{1/100}{14/500}
$$

$$
= 1/100 \cdot 500/14 = 5/14 = 0,357... \approx 36\%
$$

La probabilità che il pezzo difettoso provenga dall'azienda $$\text{B}$$ è del $$36\%$$

> **Nota:** Da notare che il denominatore resta sempre uguale nei calcoli per le varie aziende, cosa che rende molto più semplici i calcoli