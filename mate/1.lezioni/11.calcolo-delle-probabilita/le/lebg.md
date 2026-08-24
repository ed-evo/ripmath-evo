# Varianza

Per la varianza consideriamo al solito lo scarto dal valore medio e poi facciamo la somma dei quadrati degli scarti (ricordo che l'integrale è il limite della somma)

Variabile casuale $$X$$

Valore medio 
$$
m = M(X) = \int_{a}^{b} x f(x) dx
$$

scarto $$X - m$$

scarto al quadrato $$(X - m)^2$$

anche gli scarti sono variabili casuali e quindi dobbiamo considerare la probabilità solita, cioè moltiplicarli per $$dF(x)$$

Valore medio dello scarto 
$$
M(X-m) = \int_{a}^{b} (x-m) dF(x) = \int_{a}^{b} (x-m) f(x) dx
$$

Varianza 
$$
\sigma^2(X) = M(X-m)^2 = \int_{a}^{b} (x-m)^2 dF(x) = \int_{a}^{b} (x-m)^2 f(x) dx
$$

---

Per il calcolo ricordiamo che vale la formula che [abbiamo già visto](lead.html)

$$
\sigma^2(X) = M(X-m)^2 = M(X^2) - m^2 = M(X^2) - [M(X)]^2
$$

cioè

$$
\sigma^2(X) = \int_{a}^{b} x^2 f(x) dx - \left[\int_{a}^{b} x f(x) dx\right]^2
$$

---

Calcoliamo la varianza per la variabile aleatoria che prende valori nell'intervallo $$[0;4]$$ con funzione densità

$$
y = \frac{x}{8}
$$

Ricordando che il valore medio, trovato nella pagina precedente è $$8/3$$

$$
\sigma^2(X) = \int_{a}^{b} x^2 f(x) dx - \left[\int_{a}^{b} x f(x) dx\right]^2
$$

$$
\sigma^2(X) = \int_{0}^{4} x^2 \cdot 1/8 \, dx - m^2 = \int_{0}^{4} 1/8 x^3 \, dx - (8/3)^2 = \left[ 1/32 x^4 \right]_{0}^{4} - 64/9 = 256/32 - 0 - 64/9 = 8 - 64/9 = 8/9
$$

---