# [terzo tipo]{.text-red}

Devo risolvere

$$
\int \frac{\textcolor{blue}{Ax + B}}{\textcolor{blue}{x^2 + px + q}} dx =
$$

voglio che al denominatore vi sia un termine al quadrato, perché con i termini al quadrato ho alcuni integrali che so risolvere: $x^2$ è il quadrato del primo termine, $px$ sarà il doppio prodotto quindi devo aggiungere [e togliere] $(p^2/4)$

$$
= x^2 + px + \frac{p^2}{4} - \frac{p^2}{4} + q =
$$

quindi ottengo

$$
= (x + \frac{p}{2})^2 + q - \frac{p^2}{4} =
$$

[$q - (p^2/4)$] è una costante positiva quindi possiamo chiamarla $k^2$

ed ottengo:

$$
x^2 + px + q = (x + \frac{p}{2})^2 + k^2
$$

Ora cerco di trasformare il numeratore in modo che vi compaia la derivata del denominatore iniziale $[2x + p]$ (in questo modo potrò poi dividere l'integrale in due integrali più semplici).

Al numeratore pongo: [$Ax + B =$]{.text-blue}

$$
= \frac{A}{2}(2x) + B =
$$

per avere la derivata (a meno del fattore $A/2$) devo aggiungere e togliere $(Ap)/2$

$$
= \frac{A}{2}(2x) + B + \frac{A}{2}p - \frac{A}{2}p =
$$

$$
= \frac{A}{2}(2x + p) + B - \frac{A}{2}p
$$

Quindi posso scrivere

$$
\int \frac{(A/2)(2x + p) + B - (A/2)p}{x^2 + px + q} dx =
$$

spezzo l'integrale

$$
\int \frac{(A/2)(2x + p)}{x^2 + px + q} dx + \int \frac{B - (A/2)p}{x^2 + px + q} dx =
$$

Estraggo le costanti e nel secondo integrale sostituisco il denominatore con l'espressione trovata prima

$$
\frac{A}{2} \int \frac{2x + p}{x^2 + px + q} dx + (B - \frac{A}{2}p) \int \frac{1}{(x + p/2)^2 + K^2} dx =
$$

E questi due integrali so risolverli: il primo è immediato di tipo logaritmo, il secondo lo avevamo già calcolato

- Il primo:
  $$
  \frac{A}{2} \int \frac{2x + p}{x^2 + px + q} dx = \frac{A}{2} \log(x^2 + px + q)
  $$

- il secondo:
  $$
  (B - \frac{A}{2}p) \int \frac{1}{(x + p/2)^2 + k^2} dx =
  $$
  $$
  (B - \frac{A}{2}p) \frac{1}{k} \arctan \frac{x + p/2}{k} =
  $$

> **Nota:** Ricordando che $k^2 = q - (p^2/4)$ ottengo [Calcoli](ckdhdcb.html)
> $$
> \frac{2B - Ap}{\sqrt{4q - p^2}} \arctan \frac{2x + p}{\sqrt{4q - p^2}}
> $$

Ottengo quindi la formula finale

$$
\int \frac{Ax + B}{x^2 + px + q} dx = \frac{A}{2} \log(x^2 + px + q) + \frac{2B - Ap}{\sqrt{4q - p^2}} \arctan \frac{2x + p}{\sqrt{4q - p^2}} + c
$$