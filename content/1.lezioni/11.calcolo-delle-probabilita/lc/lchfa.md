# [esercizio]{.text-red}

Calcolare la probabilità che il pezzo difettoso provenga dall'azienda $$B$$
Anche qui applico la formula di Bayes:

$$
P(E_2|E) = P(E_2) \cdot \frac{P(E|E_2)}{P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2) + P(E_3) \cdot P(E|E_3)}
$$

- $$P(E_1) = 20/100 = 1/5$$ probabilità che il pezzo provenga dall'azienda $$A$$
- $$P(E_2) = 30/100 = 3/10$$ probabilità che il pezzo provenga dall'azienda $$B$$
- $$P(E_3) = 50/100 = 1/2$$ probabilità che il pezzo provenga dall'azienda $$C$$
- $$P(E|E_1) = 3/100$$ probabilità che il pezzo proveniente dall'azienda $$A$$ sia difettoso
- $$P(E|E_2) = 4/100 = 1/25$$ probabilità che il pezzo proveniente dall'azienda $$B$$ sia difettoso
- $$P(E|E_3) = 2/100 = 1/50$$ probabilità che il pezzo proveniente dall'azienda $$C$$ sia difettoso
- $$P(E_2|E)$$ probabilità che il pezzo difettoso provenga dall'azienda $$B$$

$$
P(E_2|E) = \frac{3}{10} \cdot \frac{\frac{1}{25}}{\frac{1}{5} \cdot \frac{3}{100} + \frac{3}{10} \cdot \frac{1}{25} + \frac{1}{2} \cdot \frac{1}{50}}
$$

$$
= \frac{\frac{3}{250}}{\frac{3}{500} + \frac{3}{250} + \frac{1}{100}} = \frac{\frac{3}{250}}{\frac{14}{500}}
$$

$$
= \frac{3}{250} \cdot \frac{500}{14} = \frac{6}{14} = 0,428 \dots \approx 43\%
$$

La probabilità che il pezzo difettoso provenga dall'azienda $$B$$ è del $$43\%$$

> **Nota:** Il denominatore resta sempre uguale nei calcoli per le varie aziende, cosa che rende molto più semplici i calcoli.